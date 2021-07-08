const axios = require('axios');

class GoveeLED {
	constructor(config) {
		this.apiKey = config.apiKey
		this.mac = config.mac
		this.model = config.model
		this.basePath = "https://developer-api.govee.com/v1/devices"
	}

	request(endpoint, reqData, method) {

		return new Promise( ( resolve, reject ) => {

			if (this.mac === "") return reject(new Error("No MAC Address provided."));
			if (this.model === "") return reject(new Error("No Model provided."));

			let reqURL = this.basePath + endpoint;

			var data = JSON.stringify(reqData);

			var config = {
				method: method,
				url: reqURL,
				headers: { 
					'Govee-API-Key': this.apiKey, 
					'Content-Type': 'application/json'
				},
				data: data
			};

			axios(config)
			.then(function (response) {
				resolve(response.data);
			})
			.catch(function (error) {
				reject(error);
			});
		});
	}

	setColor(hexCode) {
		var regex = /^#([0-9A-F]{3}){1,2}$/i;
		if (!regex.test(hexCode)) throw new Error("Invalid Hex Color Code");
		
		function hex2rgb(hex) {
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return r + r + g + g + b + b;
			});

			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
		
		var RGBconv = hex2rgb(hexCode);
		var reqData = {
		    "device": this.mac,
		    "model": this.model,
		    "cmd": {
		        "name": "color",
		        "value": {
		            "r": RGBconv.r,
		            "g": RGBconv.g,
		            "b": RGBconv.b
		        }
		    }
		};
		var endpoint = '/control';
		return this.request(endpoint, reqData, "put");
	}

	setBrightness(brightnessLevel) {
		if (!Number.isInteger(brightnessLevel)) throw new Error("Brightness Level Provided is Not A Number");
		if (brightnessLevel > 100) throw new Error("Brightness Level Provided is Not From 1-100");
		if (brightnessLevel < 1) throw new Error("Brightness Level Provided is Not From 1-100");
		var reqData = {
		    "device": this.mac,
		    "model": this.model,
		    "cmd": {
		        "name": "brightness",
		        "value": brightnessLevel
		    }
		};
		var endpoint = '/control';
		return this.request(endpoint, reqData, "put");
	}

	setColorTemperature(temperatureLevel) {
		if (!Number.isInteger(temperatureLevel)) throw new Error("Temperature Level Provided is Not A Number");
		if (temperatureLevel > 9000) throw new Error("Temperature Level Provided is Not From 2000-9000");
		if (temperatureLevel < 2000) throw new Error("Temperature Level Provided is Not From 2000-9000");
		var reqData = {
		    "device": this.mac,
		    "model": this.model,
		    "cmd": {
		        "name": "colorTem",
		        "value": temperatureLevel
		    }
		};
		var endpoint = '/control';
		return this.request(endpoint, reqData, "put");
	}

	turnOn() {
		var reqData = {
		    "device": this.mac,
		    "model": this.model,
		    "cmd": {
		        "name": "turn",
		        "value": "on"
		    }
		};
		var endpoint = '/control';
		return this.request(endpoint, reqData, "put");
	}

	turnOff() {
		var reqData = {
		    "device": this.mac,
		    "model": this.model,
		    "cmd": {
		        "name": "turn",
		        "value": "off"
		    }
		};
		var endpoint = '/control';
		return this.request(endpoint, reqData, "put");
	}

	getState() {
		var reqData = {};
		var endpoint = `/state?device=${this.mac}&model=${this.model}`;
		return this.request(endpoint, reqData, "get");
	}

	async getDevices() {
		var reqData = {};
		var endpoint = ``;
		let reqURL = this.basePath + endpoint;

		var data = JSON.stringify(reqData);

		var config = {
			method: "get",
			url: reqURL,
			headers: { 
				'Govee-API-Key': this.apiKey, 
				'Content-Type': 'application/json'
			},
			data: data
		};

		let resData;

		await axios(config)
		.then(async function (response) {
			resData = response.data.data;
		})
		.catch(function (error) {
			throw new Error(error);
		});

		return resData;
	}

};

module.exports = GoveeLED;
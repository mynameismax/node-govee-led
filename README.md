# NodeJS Govee LED Client

This package allows you to control Govee LED lights using the official Govee HTTP API. To use this you will only need: an API key from Govee, your LED light strip's MAC address, and the model of the lights.


# Installation

To get started with this package, you just need to run `npm i node-govee-led`. No additional software/libraries are required to be installed to use this package.

# Example Code

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Turn on
	Client.turnOn();
	// Turn off
	Client.turnOff();
	// Set color
	Client.setColor("<hex color code here>");
	// Set brightness
	Client.setBrightness(<number from 1-100>);

## How to get an API key

-   Open the Govee Home mobile app
-   Go to the "My Profile" tab, press "About us", press "Apply for API key"
-   Fill out your name and your reason (For the reason you can just write "I would like to control my LEDs with programming" and it should be fine) and submit
-   You will receive an email with your API key to the email address you entered when registering a Govee account normally within minutes.

## How to get the device's MAC address (and model)

Finding the LED's MAC address is one of the hardest parts of setup. Luckily, I've made it easy for you to do using this package (and you also find out the model, too!). You just need to run the code below (of course replacing `<govee api key>` with your api key), and leaving the mac address and model fields empty.

	const Govee = require("node-govee-led");

	const GoveeClient = new Govee({
		apiKey: "<govee api key>",
		mac: "",
		model: ""
	})

	GoveeClient.getDevices().then(data => console.log(data))

Once you run this, you should see something like the response below in your console. The MAC address is in the "device" field and the model is in the "model" field.

    {
	  devices: [
	    {
	      device: '<the mac address>',
	      model: '<the device's model>',
	      deviceName: '<the device's name>',
	      controllable: true,
	      retrievable: true,
	      supportCmds: [Array]
	    }
	  ]
	}


## Supported models

The currently supported models are: **H6160, H6163, H6104, H6109, H6110, H6117, H6159, H7021, H7022, H6086, H6089, H6182, H6085, H7014, H5081, H6188, H6135, H6137, H6141, H6142, H6195, H7005, H6083, H6002, H6003, H6148, H6052, H6143, H6144, H6050, H6199, H6054, H5001**.


# Functions

This package currently supports you being able to: turn the lights on/off, change the brightness, and change the color. Once you have all the options filled out (api key, mac address, model), you will be able to use all of these functions.

## Turn on

Turning on the device is very simple. All you need to do is run the function `turnOn()`.
**Example:**

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Turn on
	Client.turnOn();


## Turn off
Turning off the device is as simple as turning it on. All you need to do is run the function `turnOff()`.
**Example:**

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Turn off
	Client.turnOff();


## Change color


Changing the device's color is simple as well. You need to provide a color when running in a hex code format.
**Example:**

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Change color to white
	Client.setColor("#ffffff");
	
	// Change color to blue
	Client.setColor("#0000ff");


## Change brightness

Once again, changing the brightness is simple. You need to provide a brightness level from 1-100 when running.
**Example:**

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Set brightness to 50%
	Client.setBrightness(50);
	

# Notes
Have fun and enjoy! If you use this package in a program, it would be awesome if you credited me, but you don't have to.

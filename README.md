# NodeJS Govee LED Client

This package allows you to control Govee LED lights using the official Govee HTTP API. To use this you will only need: an API key from Govee, your LED light strip's MAC address, and the model of the lights.

# Installation

To get started with this package, you just need to run `npm i node-govee-led`. No additional software/libraries are required to be installed to use this package.

# Note: New Govee API Ratelimits

Govee recently announced a new version of their API, which unfortunately has much harsher ratelimits. Previously, there was only a limit of 100 requests per minute. The update, which will be implemented after May 4th, 2022, has the following ratelimits:
| API-wide requests                                                         | 10,000 per day            |
|---------------------------------------------------------------------------|---------------------------|
| Get devices (getDevices)                                                  | 10 per minute             |
| Device control (turnOn, turnOff, setColor, setBrightness, setTemperature) | 10 per minute, per device |
| Device state (getState)                                                   | 10 per minute, per device |

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
	// Get device state
	Client.getState();

## How to get an API key

-   Open the Govee Home mobile app
-   Go to the "My Profile" tab, press "About us", press "Apply for API key"
-   Fill out your name and your reason (For the reason you can just write "I would like to control my LEDs with programming" and it should be fine) and submit
-   You will receive an email with your API key to the email address you entered when registering a Govee account normally within minutes.

## How to get the device's MAC address (and model)

Finding the LED's MAC address is one of the hardest parts of setup. Luckily, it's easy for you to do using this package (and you also find out the model, too!). You just need to run the code below (of course replacing `<govee api key>` with your api key), and leaving the mac address and model fields empty.

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

The Govee API currently supports the following models: **H6160, H6163, H6160, H6163, H6104, H6109, H6110, H6117, H6159, H7022, H6086, H6089, H6182, H6085, H7014, H5081, H6188, H6135, H6137, H6141, H6142, H6195, H7005, H6083, H6002, H6003, H6148, H6052, H6143, H6144, H6050, H6199, H6054, H5001, H6154, H6072, H6121, H611A, H5080, H6062, H614C, H615A, H615B, H7020, H7021, H614D, H611Z, H611B, H611C, H615C, H615D, H7006, H7007, H7008, H7012, H7013, H7050, H6051, H6056, H6061, H6058, H6073, H6076, H619A, H619C, H618A, H618C, H6008, H6071, H6075, H614A, H614B, H614E, H618E, H619E, H605B, H6087, H6172, H619B, H619D, H619Z, H61A0, H7060, H610A, H6059, H7028, H6198, H6049, H7031, H7032, H61A1, H61A2, H61B2, H7061, H6067, H6066, H6009, H7041, H7042, H604A, H6173, H615E, H604B, H6091, H7051, H7062, H618F, H605D**. (For an up to date list, [check the Govee API documentation](https://govee-public.s3.amazonaws.com/developer-docs/GoveeDeveloperAPIReference.pdf))


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
	

## Get device state

To get information about the device's current state (if turned on, brightness level, current color), all you need to do is use .getState().
**Example:**

    var Govee = require("node-govee-led");
	
	var Client = new Govee({
		apiKey: "<govee api key>",
		mac: "<MAC address>",
		model: "<device model>"
	});
	
	// Get device state and log to console
	Client.getState().then(state => console.log(state));
	

# Notes
Have fun and enjoy! If you use this package in a program, it would be awesome if you credited me, but you don't have to.

//Literally only for the button counter
const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

const buttonClicker = document.getElementById("buttonClicker")
const buttonCounter = document.getElementById("buttonCounter")
var buttonCounts = 0



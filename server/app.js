const express = require("express");
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const cors = require('cors');
const path = require('path')
const mailController = require("../server/controller/mail-controller");

const server = express();

//view engine setup
server.engine('handlebars', exphbs());
server.set('view engine', 'handlebars')
//
// server.use(express.static(`${__dirname}\\server\\static`));
server.use('/static', express.static(path.join(__dirname, 'public')));
server.locals.layout = false; 
server.use(express.urlencoded({ extended: true }))
server.use(cors({ origin: "http://localhost:3000" }));
server.use(express.json());


server.use("/mail", mailController);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));
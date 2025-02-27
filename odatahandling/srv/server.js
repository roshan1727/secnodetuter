const cds = require('@sap/cds')
const path = require('path')
const glob = require('glob')
const express = require('express')
// const { JWTStrategy } = require("@sap/xssec");
// const xsenv = require("@sap/xsenv");
// const passport = require("passport");
var cors = require('cors');

global.__base = __dirname + "/"
console.log(global.__base)
console.log(`CDS Custom Boostrap from /srv/server.js`)


process.on('uncaughtException', function (err) {
    console.error(err.name + ': ' + err.message, err.stack.replace(/.*\n/, '\n')) // eslint-disable-line
})


// delegate to default server.js:
module.exports = async (o) => {
    o.port = process.env.PORT || 4004
    //API route (Disabled by default)
    o.baseDir = global.__base
    o.routes = []
    o.keepAliveTimeout = 1100000;

    var app = express()
    app.use(express.json({ limit: '100mb' }));
    app.use(express.urlencoded({ limit: '100mb', extended: false }));

    app.use(cors());
    
    app.express = express
    app.baseDir = o.baseDir

    o.app = app

    // passport.use(new JWTStrategy(xsenv.getServices({ uaa: { tag: "xsuaa" } }).uaa));
    // app.use(passport.initialize());
    // app.use(passport.authenticate("JWT", { session: false }));

    o.app.httpServer = await cds.server(o)
    //Load routes
 
    let routesDir = path.join(global.__base, 'routes/**/*.js')
    let files = glob.sync(routesDir)

    this.routerFiles = files;
    if (files.length !== 0) {
        for (let file of files) {
            await require(file)(app, o.app.httpServer)
        }
    }

    return o.app.httpServer
}  
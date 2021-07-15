# NPM Commands
- npm init
- npm install : seeks for dependencies in package.json file and install them locally
- npm install chalk@4.1.0 --save
- npm outdated
- npm update
- npm uninstall chalk --save
- npm ls [--depth 0/1/2]
- npm adduser
- npm config get registry
- npm config set registry=<registry_name>
- npm publish
- npm search

# VS Code Extensions for NodeJS
- npm 
- npm intellisense


<!-- > ng serve --port="4000" --prod --base-href="" -->
<!-- http://localhost:4200 -->


> typescript > tsc compiler -> JS File -> import

<!-- ES6 module import -->
> import {} from "./";
> export {}

# ES5 Common Module - 
module.exports = {}
require()

# Angular Code -> Package.json -> typescript (TSC) / ts-node -> Browser

# Angular - TypeScript | JavaSCript | DART
# Why TypeScript ?
 - Robust Type Definition
 - OOPS Concepts
 - latest JAvaSCript 
 - Angular itself programmed in TS


 # nodemon - restarts server automaticaaly whenever we save the JS file
> npm install nodemon -g

# Mongo DB Atlas
username - synergy
password - s46BeW38iwyIL7Pw 
mongodb+srv://synergy:s46BeW38iwyIL7Pw@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

> Database Access
> Network Access -> include your current IP Address


# Testing 
> npm i mocha -g
> chai : Assertion Library
> chai-http : remote Server call

> beforeEach, afterEach, beforeAll, afterAll


# Heroku Cloud

> Heroku Signup
> Generate SSH Key
    - download git bash from GIT SCM
    - ssh-keygen -> will generate SSH Key
> Change "start" script in package.json -> node index.js
> PORT will come from process.env.PORT in "index.js"
> GITHUB Signup
> Create new Repo on Github
> Create gitignore file > node_modules
> Push code to GITHUB Repo
meteor-introduction
==================

This repository contains materials for an "Introduction to Meteor" presentation. It is based off of [meteor-boilerplate](https://github.com/patrickocoffeyo/meteor-boilerplate), but adds some cool examples and some pretty css to make the examples visually yummy.

##Packages
Here's a list of packages installed by default.

###[Iron Router](https://github.com/EventedMind/iron-router)
A router that works on the server and the browser.

###[Collection 2](https://github.com/aldeed/meteor-collection2)
Extends Mongo.Collection to provide support for specifying a schema and then validating against that schema when inserting and updating.

###[Collection Helpers](https://github.com/dburles/meteor-collection-helpers)
Sets up a transformation on your collections allowing for simple models, with an interface similar to template helpers.

###[Autoform](https://github.com/aldeed/meteor-autoform)
Adds UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.

###[Roles](https://github.com/alanning/meteor-roles)
Roles-based authorization package for Meteor - compatible with built-in accounts package.

###[Sass](https://github.com/particle4dev/meteor-sass/)
Brings sass to your meteor application using node-sass.


##Core Packages
meteor-boilerplate adds these meteor core packages by default:

 - insecure
 - jquery
 - accounts-base
 - underscore


## Coding Standards
This project contains multiple tools for enforcing coding standards and checking for errors within the codebase. The standards are defined in the `.jscsrc` and `.jshintrc` files in the project root.

### Installation

* Change directory to the root directory of the boilerplate (Not Meteor's root), like: `cd /path/to/project`
* Run `npm install` to retrieve dependencies.

### Checking

To check your local codebase, run `gulp cs` from a console in the project root. An error report, if any, will be generated in the console.


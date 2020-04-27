# crud-project

a [Sails v1](https://sailsjs.com) application using MongoDB

### Model

The data model used represent students.

* name
  * type:"string",
  * required:true,
  * minLength: 2

* email
  * type:"string",
  * required:true,
  * minLength: 5,
  * unique: true

* course
  * type:"string",
  * required:true

* semester
  * type:"number",
  * required:true

### RESTful API

**GET /students** -> find students matching criteria provided on the query string.

Example: GET http://localhost:1337/students
___
**GET /students/:id** -> find a single student with the given unique ID (i.e. primary key) value.

Example: GET http://localhost:1337/students/5ea71cb30d966c91f67a6018
___
**POST /students** -> create a new student with the attributes provided in the request body.

Example: POST http://localhost:1337/students

with request body:
```
{
    "name": "Daniel",
    "email": "craviee@pm.me",
    "course": "Software Engineering",
    "semester": 3
}
```
___
**PATCH /students/:id** -> update the student with the given unique ID with the attributes provided in the request body.

Example: PATCH http://localhost:1337/students/5ea71cb30d966c91f67a6018

with request body:
```
{
    "email": "craviee@protonmail.com"
}
```
___
**DELETE /students/:id** -> destroy the student with the given unique ID

Example: DELETE http://localhost:1337/students/5ea71cb30d966c91f67a6018
___
### Shortcut routes API for development-mode
Shortcut routes are a simple (development-mode only) hack that provides access to your models from your browser's URL bar.

**GET /students/find**

Example: http://localhost:1337/students/find?course=Software%20Engineering
___
**GET /students/find/:id**

Example: http://localhost:1337/students/5ea71cb30d966c91f67a6018
___
**GET /students/create**

Example: http://localhost:1337/students/create?name=Daniel&email=craviee@pm.me&course=Software%20Engineering&semester=3
___
**GET /students/update/:id**

Example: http://localhost:1337/students/5ea71cb30d966c91f67a6018/email=craviee@protonmail.com
___
**GET /students/destroy/:id**

Example: http://localhost:1337/students/5ea71cb30d966c91f67a6018
___
### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Apr 27 2020 19:10:42 GMT+0200 (Central European Summer Time) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->


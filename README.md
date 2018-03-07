# Eat the veggie burger - Sequelize edition

This is a full-stack JavaScript app built using MySQL, Node.js, Express.js, Sequelize, Handlebars.js, HTML, and CSS. The architecture follows a [model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern. It also demonstrates routes, body-parsing middleware, and `GET`, `PUT`, and `POST` requests to a server. 

Play online at https://full-stack-burgers.herokuapp.com/.

With this app, you can order a burger by typing its name, and click `Devour it!` when your burger is ready. After you eat it, the burger is added to the list of `Burgers that have been eaten`.

On the backend, MySQL stores the data and Sequelize is used to build the SQL queries. Handlebars.js allows for reuse of common components on the the frontend.

![Video of user interface](/public/assets/img/front-end-video.gif)

## Local set up for development purposes

These must be installed to run the app locally:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [MySQL](https://www.mysql.com/)

You first need to make a local MySQL database named `burgers_db`. Then, in a terminal window, navigate into the folder where you downloaded this app and type `npm install`. Next, type `sequelize init` to create the Sequelize files. In `config/config.json`, enter the connection information and credentials to your database. To start the app, type `node server.js` and open your browser to `localhost:3000`.

## Technology

- HTML, CSS, Bootstrap, [Handlebars.js](https://handlebarsjs.com/)
- JavaScript
- Node.js
- [Sequelize](http://docs.sequelizejs.com/)
- [Express.js](https://expressjs.com/)
- npm, including [express](https://www.npmjs.com/package/express) and [body-parser](https://www.npmjs.com/package/body-parser) packages.
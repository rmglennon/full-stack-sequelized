# Eat the veggie burger

This is a full-stack JavaScript app built using MySQL, Node.js, Express.js, Handlebars.js, HTML, and CSS. The architecture follows a [model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern. It also demonstrates routes, body-parsing middleware, and `GET`, `PUT`, and `POST` requests to a server. 

Play online at https://full-stack-burgers.herokuapp.com/.

With this app, you can order a burger by typing its name, and click `Devour it!` when your burger is ready. After you eat it, the burger is added to the list of `Burgers that have been eaten`.

On the backend, MySQL stores the data, and there is a custom [object-relational mapping (ORM)](https://en.wikipedia.org/wiki/Object-relational_mapping) to make it easier to repeat SQL queries. Handlebars.js allows for reuse of common components on the the frontend.

![Video of user interface](/public/assets/img/front-end-video.gif)

## Local set up for development purposes

These must be installed to run the app locally:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [MySQL](https://www.mysql.com/)

You need to make your own copy of the MySQL database to run this app. Use `schema.sql` and `seeds.sql` (optional) to create an initial database. Then, in `connection.js`, enter the connection information and credentials to your database.

In a terminal window, navigate into the folder where you downloaded this app, and type `npm install`. Then, type `node server.js` and open your browser to `localhost:3000`.

## Technology

- HTML, CSS, Bootstrap, [Handlebars.js](https://handlebarsjs.com/)
- JavaScript
- Node.js
- object-relational mapping
- [Express.js](https://expressjs.com/)
- npm, including [express](https://www.npmjs.com/package/express) and [body-parser](https://www.npmjs.com/package/body-parser) packages.
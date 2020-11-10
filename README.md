# Eat-A-Burger
A full stack, MVC (Model-View-Controller) application that allows you to create burgers, view a list of burgers available to eat, devour burgers, and throw them away after devoured.

## Table of contents
  * [Live](#live)
  * [About this project](#about-this-project)
  * [Getting started](#getting-started)
  * [Structure](#structure)
  * [Screenshots](#screenshots)
  * [Technologies used](#technologies-used)
  	* [Backend](#Backend)
  	* [Frontend](#Frontend)
  * [Design improvements](#design-improvements)
  * [Acknowledgments](#Acknowledgments)
  * [Issues](#Issues)

## <a name="live"></a>Live
https://glacial-mountain-61312.herokuapp.com/

## <a name="about-this-project"></a> About this project

  * [How the app works](#how-app-works)
  * [How the app is built](#how-the-app-is-built)
  * [MVC design](#about-mvc)

### <a name="how-app-works"></a> How the app works
This project is a full stack application that allows you to place an order for a burger. When you place an order, the burger you enter is added to the list of burgers on the left side of the screen. Each burger in the list has a <b>Devour burger</b> button. Clicking this button moves the burger from the list on the left side to the list on the right. The list on the right is a list of burgers that have already been devoured. Each burger in this list has a <b>Throw away</b> button that allows you to remove the burger, which deletes the burger from the user interface as well as from the MySQL database. 

### <a name="how-the-app-is-built"></a> How the app is built
This project uses MySQL, Node, Express, Handlebars, ORM. Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a language that is used to generate the HTML.

### <a name="about-mvc"></a> MVC design
This project also follows the MVC design. The MVC design assigns objects in the application one of three roles and defines the way the different parts of the application communicate with each other.

  * <b>View object:</b>
  A view object is an object in the application that is visible to the end user of the application. The view displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user enters a burger name in a text field. The view communicates the user input via the controller to the model.

  * <b>Controller object:</b>
  A controller object controls the flow of data between the view and the model. The controller interprets any user changes made in the view and communicates the changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the updated data in the user interface.

  * <b>Model object:</b>
  A model object manages the data. When data is created or changed by the user in the view, that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view, and the view displays the updated data to the user.

For more information about the MVC design, check out the following:
  * https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
  * https://docs.microsoft.com/en-us/aspnet/core/mvc/overview

## <a name="getting-started"></a> Getting started
The following will take you through the steps of setting up this application and getting it running locally on your computer via my github.

If you don't want to set up this project locally and just want to see the deployed application, go to  https://glacial-mountain-61312.herokuapp.com/.

To set up this application locally on your computer, perform the following steps:
  1. [Clone repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install the dependencies](#dependencies)
  4. [Install MySQL Workbench](#install-mysql)
  5. [Set up a development database](#database-setup)
  6. [Verify database connection information](#db-connect)
  7. [Start the server](#start-server)

### <a name="clone-repository"></a> 1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone git@github.com:btoney1988/burger.git
  cd burger
</pre>

#### <a name="structure-of-project"></a> Structure of the project
<p>After you clone the repository, navigate to the project root directory (burger). The project directory structure is set up as follows:</p>
<ul>
  <li> 
    <p><b>server.js</b>: This file does the following:</p>
		<ul>
	    	<li>Defines and requires the dependencies, including express, body-parser, and express-handlebars.</li>
	    	 <li>Sets up the Express server.</li>
	    	 <li>Sets up the Express server to handle data parsing using body-parser.</li>
	    	 <li>Points the server to the API routes, which gives the server a map of how to respond when users visit or request data from various URLs.</li>
         <li>Defines the port the server is listening on.</li>
	    	 <li>Starts the server.</li>
         <li>Allows the app to serve static content from the public directory.</li>
    	</ul>
  <li>
    <p><b>public</b>: Contains the static content (images, Javascript, and CSS). </p>
    <ul>
      <li><b>assets/css/style.css</b>: External CSS stylesheet.</li>
    </ul>
  </li>
  <li>
    <p><b>models</b>: Contains a file called <b>burger.js</b>, which contains functions used to manage the application data and interact with the database.</p>
    <p>The <b>burger.js</b> file also includes the code that will call the ORM functions using burger specific input for the ORM.</p>
  </li>
  <li>
    <p><b>db</b>: Contains 2 files:</p>
    <ul>
      <li><b>schema.sql</b>: The database schema. The schema is what describes the structure of the database table, and the datatypes that each column of the table can contain. For this project, the database includes one table that includes columns for id, burger name, and devoured state.</li>
      <li><b>seeds.sql</b>: Used to populate the table in the development database with some starter burger data.</li>
    </ul>
  </li>
  <li>
    <p><b>config</b>: Contains 2 files.
      <ul>
        <li><b>connection.js</b>: Contains the code to connect Node to MySQL.</li>
        <li><b>orm.js</b>: Contains the methods that will execute the necessary MySQL commands in the controllers. These methods are used to retrieve and store data in the database.</li>
      </ul>
  </li>
  <li>
    <p><b>controllers</b>: Contains a file called <b>burger_controllers.js</b>, which contains different routes. These routes are used to pass information to and from the view and model objects.</p>
  <li>
    <p><b>views</b>: Contains the Handlebars files, which are templates used to generate the html files.</p> 
  </li>
  <li><b>package.json</b>: Lists the project dependencies and their version numbers.</li>
  <li><b>.gitignore</b>: Anything listed inside this file will not be tracked by GitHub when code is committed.</li>
  <li><b>package-lock.json</b>: Dependency tree for the project. Lists all the dependencies and their versions.</li>
</ul>

### <a name="install-node"></a> 2. Install Node.js
<p>If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.</p>

### <a name="dependencies"></a> 3. Install the dependencies
<p>The following npm packages are dependencies to the project.</p>
<p>After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required npm packages:</p>
<pre>npm install</pre>
<ul>
	<li><b>express</b> -  a Node.js web application framework (https://www.npmjs.com/package/express).</li>
  <li><b>mysql</b> - used to create a connection to the MySQL database via the command line.(https://www.npmjs.com/package/mysql)</li>
  <li><b>express-handlebars</b> - allows you to use handlebars to create templates to build the HTML.</li>(https://www.npmjs.com/package/express-handlebars)</li>
</ul>

<p>Version information for each of these packages is available in the <b>package.json</b> file in the project root directory.</p>

### <a name="install-mysql"></a> 4. Install MySQL Workbench
<p>If you don't already have MySQL Workbench installed on your computer, you can install the latest version here: https://www.mysql.com/products/workbench/</p>
<p>For this project, MySQL Workbench is used to visually design, create, and manage the database used to store burger data.</p>

### <a name="database-setup"></a> 5. Set up a development database
To set up a development database that you can use with this application, perform the following steps:
<ol>
<li><p>Open the <b>db/schema.sql</b> file and paste the contents of this file into MySQL Workbench.</p></li>
<li><p>Execute the following statements:</p>
  <pre>
  CREATE DATABASE burgers_db;
  USE burgers_db;
  </pre>
  <p>Running these statements creates a database called <b>burgers_db</b> and sets it as the current database being used.</p>
</li>
<li>
  <p>Execute the following statement to create a table called <b>burgers</b>.</p>
  <pre>
  CREATE TABLE burgers
  (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,
    PRIMARY KEY (id)
  );
  </pre>
  <p>This table includes columns for id, burger name, and devoured.</p>
</li>
<li>
  <p>To populate the burgers table with some starting burger data, open up the <b>db/seeds.sql</b> file and paste the contents into MySQL Workbench. Execute the code in <b>seeds.sql</b> from MySQL Workbench:</p>
  <pre>
  INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Cheddar", true);

  INSERT INTO burgers (burger_name, devoured) VALUES ("BLT", false);

  INSERT INTO burgers (burger_name, devoured) VALUES ("Mondo", true);
  </pre>
</li>
</ol>

### <a name="db-connect">6. Verify database connection information</a>
<p>Open the <b>config/connection.js</b> file and verify that the password section is filled with your password.</p>
<p>For example:</p>
<pre>
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
</pre>

### <a name="start-server">7. Start the server</a>
<p>After performing all of the setup steps in the <b>Getting started</b> section, navigate to the project root directory (burger) and run the following command to start the server:</p>
<pre>
node server.js
</pre>

![image](https://user-images.githubusercontent.com/68873509/98727282-b3ca9800-2365-11eb-8af8-192166574186.png)

<p>To verify that the server has started and the application is working locally on your computer, open Chrome and go to <a href="http://localhost:3000">http://localhost:3000</a>.</p>

## <a name="screenshots"></a> Screenshots

### Welcome to Eat-Da-Burger

![image](https://user-images.githubusercontent.com/68873509/98727605-2c315900-2366-11eb-9882-4f4254f342fa.png)

## <a name="technologies-used"></a> Technologies used to build app
* [Backend](#Backend)
* [Frontend](#Frontend)

### <a name ="Backend"></a> Backend technologies
* Node.js
* MySQL
* Express
* ORM

### <a name="Frontend"></a> Frontend technologies
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Handlebars

## <a name="Acknowledgments"></a> Acknowledgments 
* <a href="https://fontawesome.com/icons?d=gallery">Font Awesome</a> for Throw away burger trash can icon and burger icon.
* <a href="https://guides.github.com/features/mastering-markdown/">Github Guides</a> for help with a professional readme file.
* <a href="https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-readmes#relative-links-and-image-paths-in-readme-files">Github Docs</a> for help with a professional readme file.
* <a href="https://github.com/philipstubbs13">Phillip Stubbs</a> for help with a beautiful readme format/layout.
* <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Wikipedia</a> for help with information used in the readme file.
* <a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/overview">MVC Microsoft Docs</a> for help with information used in the readme file.

## <a name="design-improvements"></a> Design improvements
* Add a form that allows users to pair their name with the burger.
* Allow users to update a burger's name after it is created.
* Add form validation so that the user can't submit an empty form.

## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/btoney1988/burger/issues" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>
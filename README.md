# TSKR - A simple task tracker

### Approach
I'm approaching this application with an initial rough roadmap of what I envision, and then starting with what's simple and using *progressive enhancement* to add new features and capabilities. I'm going to use github and handle each new enhancement with a pull request to the master branch from a *dev* branch. My hope is that both my dev process and coding can be followed through the pull requests for a bit of a view ino the process in addition to the final result.

### Rough Roadmap
* Environment - Vagrant with ubuntu 14.04, nginx webserver, php 7 fpm, mysql
* generator scripts?
  * Redis?
* Servers - Main (tskr.dev), Api (api.tskr.dev)
  * Websockets (socket.tskr.dev)?
* Fat Free Framework - backend for apis
  * RESTful
  * Models - Tasks
  * Users? Authentication? 2-Factor? Oauth?
  * User Settings?
  * Composer?
* Angular - Framework for front end
  * Routing
  * Directives
  * Services
  * Jspm and ES6
* Styling and UX
  * Responsive
  * Pure CSS library
  * Cool transitions/animations?
  * Different UI?
  * UI Enhancements
    * Auto-select text and highlight when editing
* Deployment and Testing
  * distribution bundling?
  * CDN syncing with AWS S3/CloudFront?
  * Unit Testing?
* Others
  * Offline?
  * Fancier Task Creation Interface - html, images, locations, etc?
  * Sharing - email, social?
(? = future progressive enhancement)

### Requirements and Getting Set Up
This project uses vagrant to set up it's dev enviroment. You'll need vagrant and virtualbox on your host computer. Then, clone this repo and simply `vagrant up` from inside the repo's folder. I strongly encourage a unix environment to vagrant up in; I did not test this in Windows host computer. While the vagrant is provisioning, add a new hosts line in your system's host file: `192.168.9.17 tskr.dev api.tskr.dev`. Once the vagrant machine is provisioned, you should be able to browse to http://tskr.dev in your browser to use the app.

### Next Steps
My next steps would be setting up unit tests and functional tests for both the API side using phpunit and for the client side using Karma. For the API side, I'd like to progressively enhance it by adding a base model class and extend each model from there to make introducing other models simpler. I'd introduce a user model and switch from relating tasks to the session to relating them to the user. Or maybe both and let the user sign in to save task lists long-term. Maybe a cron job of clearing out tasks that have expired sessions. On the dlient side, sharing functionality, text me my list type of things would be nice. Maybe more intricate task data with images, html, and a ui for that. A build process where the javascript gets tested and bundled. Maybe a deploy process to Amazon S3 folder with web hosting enabled. On a grander scale, I'd like to implement pub/sub via redis and then update off message events there for real-time awesomeness. And then maybe on offline feature that you could add, edit and delete tasks and it would sync it up to the database when you were back online. Perhaps settings for customization of look/layout/functionality.

### Last Thoughts
This was a fun little project. I got to explore some new things, namely ES6 in angular, and I got to revisit some things I haven't got to dive into for a while: Angular and Fat Free Framework.
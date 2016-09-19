# TSKR - A simple task tracker

### Approach
I'm approaching this application with an initial rough roadmap of what I envision, and then starting with what's simple and using *progressive enhancement* to add new features and capabilities. I'm going to use github and handle each new enhancement with a pull request to the master branch from a *dev* branch. My hope is that both my dev process and coding can be followed through the pull requests for a bit of a view ino the process in addition to the final result.

### Rough Roadmap
* Environment - Vagrant with ubuntu 14.04, nginx webserver, php 7 fpm, mysql
  * Redis?
* Servers - Main (tskr.dev), Api (api.tskr.dev), CDN (cdn.tskr.dev)
  * CDN syncing with AWS S3/CloudFront?
  * Websockets (socket.tskr.dev)?
* Fat Free Framework - backend for apis
  * RESTful
  * Models - Users and Tasks
  * Authentication? 2-Factor? Oauth?
  * User Settings?
  * Composer?
* Angular - Framework for front end
  * Routing
  * Directives
  * Services
  * jspm? es6? bundle?
  * generator scripts?
  * Offline?
* Styling and UX
  * Responsive
  * Pure CSS
  * Cool transitions/animations?
  * Different UI?
* Deployment and Testing
  * Unit Testing?
* Others
  * Offline?
  * Fancier Task Creation Interface - html, images, locations, etc?
  * Sharing - email, social?
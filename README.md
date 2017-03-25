# Assignment 1 - The klopp End  app.

Name: Nicky Cahill 

## Overview.
The Klopp End is a central location for Liverpool fans to share the latest stories from around the web realted to the football club. Users can visit the site and see a list of all the stories shared by other users. They can click on a link and visit the actual site where the story was originally shared. They can have their say on each story on the comment page. They can register to become a user on the site. There is an Admin page where an admin can delete any spam stories that may have been shared. 

 . . . . . List of user features  . . . . 
 
 + Create post
 + Comment on post
 + Delete a Post
 + Register
 + Login

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
     +bootstrap": "^3.3.6",
    +firebase": "^3.7.3",
    +lodash": "^2.4.2",
    +react": "^15.2.1",
    +react-datetime": "^2.8.8",
    +react-dom": "^15.2.1",
    +react-router": "^2.6.1"

installion:
Clone project 
Change config details in config/constants.js to the details of your application on the firebase console :
 
    apiKey: "AIzaSyBbHsj26deVQWmxiNT7u-aR196qRNEIAzo",
    authDomain: "kloppend-51e15.firebaseapp.com",
    databaseURL: "https://kloppend-51e15.firebaseio.com"
}
npm install
npm start

## Data Model Design.

see diagram in root folder 

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

see diagram in root folder



## UI Design.

see screenshots in root folder

## Routing.
 <Route path="posts/:postId" component={CommentView} /> View comments on a post
 <Route  path="CreatePost" component={PostView} /> Creat a post View 
 <Route path="Login" component={Login} /> Login view
 <Route path="Register" component={Register} /> Register View
  <Route path="Admin" component={HackerAppDel} /> Delete a post 

## Extra features

User can register and login via firebase authentication. Unfortunately I was not able to limit a user to be only allowed to create a post or comment if they are logged in. 



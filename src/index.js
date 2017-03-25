import React from 'react';
import ReactDOM from 'react-dom';
import HackerApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import CommentView from './commentPage';
import PostView from './CreatePost';
import Login from './auth/login';
import Register from './auth/register';
import { firebaseAuth } from './config/constants';
import './css/custom.css';
import HackerAppDel from './AppDel';



var Header = React.createClass({
  render : function() {
    return (
      <div className="navbar navbar-fixed-top navbar-inverse" >
            <div className="container">
              <Link to="/" id="logo" >The Klopp End</Link>
              <nav>
                  <ul className="nav navbar-nav navbar-right">
                   <li><Link to="/Admin">Admin</Link></li>
                    <li><Link to="/CreatePost">Create Story</Link></li>
                     <li><Link to="/login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                  </ul>
              </nav>
            </div>
          </div>
      );
  }
});

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}




var App = React.createClass({

		  render : function() {
        
		    return (
            
              <div>
                 <img  src = {require('./images/home.jpg')} id = "bg"/>
                <div className="container">
                   <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                         <div className="page-header">
                          <Header />
     
           
                         
                               {this.props.children}
                         </div>
                       </div>
                    </div>
                  </div>
              </div>
                  
                
		    ) 
		  }
		});

     ReactDOM.render(

         (
          <Router history={browserHistory} >
            <Route path="/" component={App}>
               <IndexRoute component={HackerApp}/>
               <Route path="posts/:postId" component={CommentView} />
               <Route  path="CreatePost" component={PostView} />
               <Route path="Login" component={Login} />
               <Route path="Register" component={Register} />
                <Route path="Admin" component={HackerAppDel} />
            </Route>
          </Router>
        ),
          document.getElementById('root')
      );


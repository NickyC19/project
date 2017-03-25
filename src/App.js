import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import api from './test/stubAPI';
 import './css/custom.css'

      

var NewsItem = React.createClass({
    handleVote : function() {
      this.props.upvoteHandler(this.props.post.id);
    },
    render : function() {
        var lineStyle = {
             fontSize: '20px', marginLeft: '10px' };
              var infoStyle = {
                               fontSize: '16px', marginLeft: '5px' };
        var cursor = { cursor: 'pointer' } ;
        var line ;
        if (this.props.post.link ) {
           line = <a href={this.props.post.link} >
                        {this.props.post.title} </a> ;
        } else {
           line = <span>{this.props.post.title} </span> ;
        }
        return (
          <div >
            <span className="glyphicon glyphicon-thumbs-up" 
                style={cursor} 
                onClick={this.handleVote} ></span>
            {this.props.post.upvotes}
            <span style={lineStyle} >{line}<span>
            <Link to={'/posts/' + this.props.post.id }>Comments</Link>
                  <br />
                <span style={infoStyle} >Posted by {this.props.post.username}</span>
                  <span style={infoStyle} >on {this.props.post.date}</span>
                <hr />
              


              </span>
            </span>
          </div>  
    );
    }
   }) ;

var NewsList = React.createClass({
    render : function() {
      var items = this.props.posts.map(function(post,index) {
         return <NewsItem key={index} post={post} 
                    upvoteHandler={this.props.upvoteHandler}  /> ;
        }.bind(this) )
      return (
        <div>
              {items}
              </div>
        );
    }
}) ;  




var HackerApp = React.createClass({ 
    componentWillUnmount: function() {
       api.persist() ;
    },
    
    incrementUpvote : function(id) {
      api.upvote(id) ;
      this.setState({});
    },    
    render: function(){
        var posts = _.sortBy(api.getAll(), function(post) {
                return - post.upvotes;
             }
          );
        return (
     
           <div >
              <h1><Link to="/" activeClassName="active">Latest Stories</Link></h1>
               <NewsList posts={posts} 
                    upvoteHandler={this.incrementUpvote} />
                    
            
             
          </div>
          
        );
    }
});

export default HackerApp;

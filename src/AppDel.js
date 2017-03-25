import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import api from './test/stubAPI';
import './css/custom.css';
import buttons from './config/buttonsConfig';

      

var NewsItem = React.createClass({
  getInitialState : function() {
             return {
              status : '',
             } ;
          },
    handleDelete : function() {
             this.setState({ status : 'del'} )
          },
    handleCancel : function() {
          this.setState({ status : '', 
                 } ) ;
            }, 
    handleConfirm : function(e) { 
              this.props.deleteHandler(this.props.post.id);
          },  
    handleVote : function() {
      this.props.upvoteHandler(this.props.post.id);
    },
    render : function() {
      var activeButtons = buttons.normal ;
      var rightButtonHandler = this.handleDelete ;
      var leftButtonHandler = '' ;
      var lineStyle = {
                       fontSize: '20px', marginLeft: '10px'
                      };
      var line = this.props.post.title;
      if (this.state.status === 'del' ) {
                   activeButtons = buttons.delete ;
                   leftButtonHandler = this.handleCancel;
                   rightButtonHandler = this.handleConfirm ;
                 }
        return (
          <div >

      <span style={lineStyle} >{line} </span>
      <br />
             <input type="button" className={'btn ' + activeButtons.leftButtonColor} 
                                 value={activeButtons.leftButtonVal}
                                 onClick={leftButtonHandler} />
             <input type="button" className={'btn ' + activeButtons.rightButtonColor} 
                               value={activeButtons.rightButtonVal} 
                               onClick={rightButtonHandler} />
           <hr />
          </div>  

    );
    }
   }) ;

var NewsList = React.createClass({
    render : function() {
      var items = this.props.posts.map(function(post,index) {
         return <NewsItem key={index} post={post} 
                    upvoteHandler={this.props.upvoteHandler}  
                   deleteHandler={this.props.deleteHandler} /> ;
        }.bind(this) )
      return (
        <div>
              {items}
              </div>
        );
    }
}) ;  




var HackerAppDel = React.createClass({ 
    componentWillUnmount: function() {
       api.persist() ;
    },
       deletePost : function(k) {
             api.delete(k);
             this.setState( {} ) ;
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
                    upvoteHandler={this.incrementUpvote}
                    deleteHandler={this.deletePost} />
                    
            
             
          </div>
          
        );
    }
});

export default HackerAppDel;

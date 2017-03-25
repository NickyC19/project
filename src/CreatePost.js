import React from 'react';
import _ from 'lodash';
import api from './test/stubAPI';

var Form = React.createClass({
   getInitialState: function() {
       return { title: '', link: ''};
    },
    handleTitleChange: function(e) {
       this.setState({title: e.target.value});
     },
     handleLinkChange: function(e) {
        this.setState({link: e.target.value});
     },
     handleSubmit : function(e) {
        e.preventDefault();
        var title = this.state.title.trim();
        var link = this.state.link.trim();
        if (!title ) {
            return;
        }
        this.props.addHandler(title,link );
        this.setState({title: '', link: ''});
     },
     render : function() {
       return (
         <form style={{marginTop: '30px'}}>
            <h3>Add a new post</h3>
            <div className="form-group">
              <input type="text"
                className="form-control" placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitleChange} ></input>
            </div>
            <div className="form-group">
              <input type="text"
                 className="form-control" placeholder="Link"
                 value={this.state.link}
                 onChange={this.handleLinkChange} ></input>
            </div>
            <button type="submit" className="btn btn-primary"
                 onClick={this.handleSubmit} >Post</button>
          </form>
        );
      }
   });

var postView = React.createClass({ 
    
  addPost : function(t,l) {   
      if (api.add(t,l)) {  
         this.setState({});
      }
    }, 
  render: function(){


      
       return (  
        <div >
    
          <h1>Create Post</h1>
           <Form addHandler={this.addPost}  />
        </div>
      );
  }
});

export default postView;
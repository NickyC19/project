import _ from 'lodash';


var posts = null ;
if ( localStorage.getItem('posts') ) {
     posts = JSON.parse(localStorage.getItem('posts')) ;
     localStorage.setItem('updated',false ) ;
} else { 
    posts = [
             {  id: 1 ,
                title : 'Daniel Sturridge urged to remain at Liverpool FC',
                link : 'http://www.dailypost.co.uk/sport/football/football-news/daniel-sturridge-urged-remain-liverpool-12745403',
                username : 'Steven Gerrard',
                comments : [],
                upvotes : 10,
                date: 'March 25, 2017'
           
              },
             { 
                id: 2,
                title : 'Wijnaldum gives Liverpool something they have lacked',
                link : 'http://www.liverpoolecho.co.uk/sport/football/football-news/hamann-wijnaldum-gives-liverpool-something-12748095',
                username : 'Jaime Carragher',
                comments : [],
                upvotes : 12,
                date: 'March 03, 2017'

              },
              { 
                id: 3,
                title : 'Emre Can insists new contract delay is not about money',
                link : 'http://talksport.com/football/liverpool-fc-news-emre-can-insists-new-contract-delay-isnt-about-money-170313231333',
                username : 'Luis Suarez',
                comments : [],
                upvotes : 12,
                date: 'February 08, 2017'

              },
              { 
                id: 4,
                title : '125 years since the formation of Liverpool',
                link : 'http://metro.co.uk/2017/03/15/today-marks-125-years-since-the-formation-of-liverpool-football-club-6510544/',
                username : 'Fernando Torres',  
                comments : [],
                upvotes : 2,
                date:'January 27, 2017'

              }
          ] ;
  localStorage.setItem('posts', JSON.stringify(posts)) ;
  localStorage.setItem('updated', false ) ;
}
 
 var stubAPI = {
     getAll : function() {
        return posts ;
      },
    delete : function(k) {
       var elements = _.remove(posts, 
           function(post) {
                 return post.id === k;
              });
       return elements; 
      },
     add : function(t,l) {
          var id = 1 ;
          var last = _.last(posts) ;
          if (last) {
             id = last.id + 1 ;
          }
          var len = posts.length ;
          var newL_len = posts.push({ 
          	'id': id,  
             title: t, link : l, username: '', comments: [], upvotes: 0, date: this.renderMonth}) ;
           localStorage.setItem('updated', true ) ;
           return newL_len > len ;
          },
     upvote : function(id) {
         var index = _.findIndex(posts, 
         	  function(post) {
                return post.id === id;
              } );   
         if (index !== -1) {                 
              posts[index].upvotes += 1 ;
              localStorage.setItem('updated', true ) ;
              return true ;
            }
          return false ;
       },
     getPost : function(id) {
         var result = null ;
         var index = _.findIndex(posts, function(post) {
                return post.id === id;
                } );     
         if (index !== -1) {                 
            result = posts[index];
                }
        return result ;
        },
     addComment : function(postId,c,n) {
        var post = this.getPost(postId ) ;
        var id = 1 ;
        var last = _.last(post.comments) ;
        if (last) {
           id = last.id + 1 ;
        }
        post.comments.push({ 'id': id,  
                 comment: c , author: n, upvotes: 0 } ) ;
        localStorage.setItem('updated', true ) ;
        },
     upvoteComment : function(postId,commentId) {
        var post = this.getPost(postId ) ;
        var index = _.findIndex(post.comments, function(c) {
                  return c.id === commentId;
                } );  
         if (index !== -1) {                 
             post.comments[index].upvotes += 1 ;
             localStorage.setItem('updated', true ) ;
            }

      },
      persist: function() {
        if (localStorage.getItem('updated') === 'true') { 
          localStorage.setItem('updated',false ) ;
          localStorage.setItem('posts', JSON.stringify(posts)) ;
        }
      }
  }
export default stubAPI ;
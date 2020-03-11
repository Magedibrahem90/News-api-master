//navigation bar links to slide category
var links = document.getElementsByClassName("nav-link");

//connected navigation bar links with category to slide between various topics 
// i made a for loop that loobs over the links and with addEventListener i got click in the links 
// and function that contain event (e) as a parameter i can get what was written in the linke 
// and catched it in variable category that httpRequest(); use it as a parameter 
// invoking  httpRequest(category) cause after every click you got a new topic
var posts ;
var row = document.getElementById("postsRow");
var category = 'general';

getPosts(category);


for(var i=0  ; i< links.length ; i++)
    {
        links[i].addEventListener("click" , function(e){

           category = e.target.innerHTML;
           getPosts(category);
        })
    }

// my main function 
// starts with if satament to check a browsers version if it allow new xmlhttprequest or the old one active x object 
// then i got api free link and open the connection between server with GET method 
// making if statement to check the status and the readystate of each request and get save response 
// transpile response formate to object from string and send request function  

function getPosts(cat)
{

var req  = new XMLHttpRequest();
req.open("GET" ,"https://newsapi.org/v2/top-headlines?country=us&category="+cat+"&apiKey=d34d49ce3a794aca80d1ae821239b0eb");
req.onreadystatechange = function()
{
    if(req.readyState == 4 && req.status == 200)
        {
            posts = JSON.parse(  req.response);
            posts = posts.articles;
            displayPosts();            
        }        
}
req.send();
}
// function that makeing for loob over JSON date to display it in grid system
function displayPosts()
{
    var temp =``;
    for(var i=0 ;i <posts.length ; i++)
        {
            if(posts[i].urlToImage == null){
                // this.posts[i].urlToImage == 
             }
             else
                temp +=`<div class="col-md-3"><div class="parent">
                <a href="`+posts[i].url+`">
                <div class="post">
                <img src="`+posts[i].urlToImage+`" class="img-fluid" alt="post-img"/> 
                <h5>`+posts[i].title+`</h5> 
                <p class="text-muted">`+posts[i].description.slice(0.150)+`</p> 
                 </div>
                </a>
                </div></div>`;
        }
        row.innerHTML = temp;
}
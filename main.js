let  Cheerio  = require("cheerio");
let request= require("request");
let fs=require("fs");
let path=require("path");
let url="https://github.com/topics";
let getrepohtml=require("./Repo");
request(url,match);

function match(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else if (response.statuscode==404)
    {
        console.log("page not found");
    }
    else
    {
        //console.log(html);
        dataExtracter(html);
      
    }
}
function dataExtracter(html)
{
    let $= Cheerio.load(html);
    let link=$("a.no-underline.d-flex.flex-column.flex-justify-center");
   
       for(let i=0;i<link.length;i++){

       let HREF=$(link[i]).attr("href");
       let topic=HREF.split("/").pop();

       let FullLink=`https://github.com/${HREF}`;
       
       getrepohtml(FullLink,topic);
     
       
    }
    
    
}


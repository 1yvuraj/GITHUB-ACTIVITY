let  Cheerio  = require("cheerio");
let request= require("request");
let  IssuesContent=require("./issues");
let fs=require("fs");
function getrepohtml(url,topic){
    request(url,cb);
function cb(error,response,html){
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
       
        dataExtracter(html,topic);
       
    }
}
function dataExtracter(html,topic)
{
    
    let $= Cheerio.load(html);
    let link=$(".f3.color-text-secondary.text-normal.lh-condensed");
    console.log(topic);
    for(let i=0;i<8;i++){
      let name=$(link[i]).find("a");
      let links1=$(name[0]).attr("href");
      let links2=$(name[1]).attr("href");
      let Reponame=links2.split("/").pop();
      let FullLink=`https://github.com${links2}/issues`;
      
       IssuesContent(FullLink,Reponame,topic);
    }

    
}
}

module.exports = getrepohtml;
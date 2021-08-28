let  Cheerio  = require("cheerio");
let request= require("request");
let pdfkit=require("pdfkit");
let fs=require("fs");
let path=require("path");
const { pipe } = require("pdfkit");
function  IssuesContent(url,Reponame,topic){
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
       
        dataExtracter(html);
      
    }
}

function dataExtracter(html)
{
    
    let $= Cheerio.load(html);
    let tag=$(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"); 
    let arr=[];

     for(let i=0;i<tag.length;i++)
     {
         let link =$(tag[i]).attr("href");

         arr.push(link);
     }
     let folderPath=path.join(__dirname,topic);
    dirCreator(folderPath);
    let repoPath=path.join(folderPath,Reponame+".pdf");
    let text=JSON.stringify(arr);
    let pdfDoc = new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(repoPath));
     pdfDoc.text(text);
     pdfDoc.end(); 
    //fs.writeFileSync(repoPath,);
}
}
function dirCreator(folderPath)
{
     
    if(fs.existsSync(folderPath)==false)
    {
        fs.mkdirSync(folderPath);
    }
    
    
}
    
module.exports = IssuesContent;

const express=require("express");
const axios=require("axios");
const path=require("path");
const app=express();
app.use(express.static(path.join(__dirname,"public")));
const API_URL="https://draw.ar-lottery01.com/TrxWinGo/TrxWinGo_1M/GetHistoryIssuePage.json";
app.get("/api/trx/results",async(req,res)=>{
 try{
  const response=await axios.get(API_URL+"?ts="+Date.now(),{
   headers:{Accept:"application/json, text/plain, */*", "User-Agent":"Mozilla/5.0",Referer:"https://ar-lottery01.com/",Origin:"https://ar-lottery01.com"},
   timeout:10000,responseType:"json"
  });
  const data=response.data;
  if(!data||data.code!==0||!Array.isArray(data.data?.list)) return res.status(502).json({error:"TRX result API returned an unexpected response"});
  const list=data.data.list.slice(0,30).map(x=>{
   const number=Number(x.number);
   const issue=String(x.issueNumber??"");
   return {issue,number,side:Number.isFinite(number)?(number%10>=5?"BIG":"SMALL"):"UNKNOWN"};
  }).filter(x=>x.issue && Number.isFinite(x.number));
  res.set("Cache-Control","no-store").json({ok:true,results:list,updatedAt:new Date().toISOString()});
 }catch(e){res.status(502).json({error:"TRX API မရရှိပါ။ ခဏနေရင် ပြန်စမ်းပါ။"});}
});
app.get("/health",(req,res)=>res.json({ok:true}));
const port=process.env.PORT||3000;app.listen(port,"0.0.0.0",()=>console.log("TRX API popup running on "+port));

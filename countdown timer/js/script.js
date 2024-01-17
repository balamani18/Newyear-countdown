const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector('#seconds');




function Updatetime()
{

const currentyear= new Date().getFullYear();
const newyear = new Date(`January 1 ${currentyear +1} 00:00:00`);
const currentdate=new Date();
const diff=newyear-currentdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor(diff/1000/60/60/24)%24;
const m=Math.floor(diff/1000/60)%60;
const s=Math.floor(diff/1000)%60;

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
}

setInterval(Updatetime,1000);
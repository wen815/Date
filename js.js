/*The section displaying the date*/
function fdate(){
    d=new Date();
    /*Year, month and date*/
     time=d.getYear()+1900+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
   /*change day to Chinese*/
      day=new Array("日","一","二","三","四","五","六");
   cday=day[d.getDay()];
   time+=" "+"星期"+cday;
  /*Hour,minute and second*/
  time+=" "+addzero(d.getHours())+":";
time+=addzero(d.getMinutes())+":";
  time+=addzero(d.getSeconds());
  /*add 0 to number when essential*/
function addzero(i){
    if(i<10){
 i="0"+i;
}
return i;
}
document.getElementById("sdate").innerHTML=time; 
setTimeout("fdate()",1000);
}
fdate();

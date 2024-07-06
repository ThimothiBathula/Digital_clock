var h=document.getElementById("hours");
var m=document.getElementById("min")
var s=document.getElementById("sec")


setInterval(()=>{
    var a=new Date()
    hour=a.getHours();
    minutes=a.getMinutes(); 
    seconds=a.getSeconds();
    if(hour<10 ||minutes<10 ||seconds<10)
    {
        if(hour<10){
        h.innerHTML="0"+hour;
        }
        if(minutes<10)
        {
        m.innerHTML="0"+minutes;
        }
        if(seconds<10){
        s.innerHTML="0"+seconds;
        }
    }
    else{
        h.innerHTML=hour;
        m.innerHTML=minutes;
        s.innerHTML=seconds;
    }
   
    
},1000)

console.log(new date().getSeconds())
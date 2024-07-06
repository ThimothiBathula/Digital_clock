var hour=document.getElementById("hours");
var minute=document.getElementById("min")
var second=document.getElementById("sec")
        function time()
        {
             var a=new Date()
             hours=a.getHours();
             minutes=a.getMinutes(); 
             seconds=a.getSeconds();
             if(hours<10 ||minutes<10 ||seconds<10)
                {
                  if(hours<10)
                  {
                     hour.innerHTML="0"+hours;
                  }
                  if(minutes<10)
                  {
                     minute.innerHTML="0"+minutes;
                  }
                  if(seconds<10)
                  {
                     second.innerHTML="0"+seconds;
                  }
                }
             else
                {
                    hour.innerHTML=hours;
                    minute.innerHTML=minutes;
                    second.innerHTML=seconds;
                }
        }
setInterval(time,1);
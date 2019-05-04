var date,hr,min,sec,time,v="AM";
function disp(){
    date=new Date();
    hr=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    if(hr==0){
        hr=12;
    }
    if(hr>12){
        hr=hr-12;
        v="PM"
    }
    hr=(hr<10)?"0"+hr:hr;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    time=hr+":"+min+":"+sec+" "+v;
    document.getElementById("c").innerHTML=time;
}
disp();
setInterval(disp,1000);
    
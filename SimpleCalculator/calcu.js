function disp(n){
    document.getElementById("textbox").value+=n;

}
function answer(){
    var a= document.getElementById("textbox").value;
    if(a){
            document.getElementById("textbox").value=eval(a);
    }
   
}
function sq()
{
    document.getElementById("textbox").value=Math.sqrt( document.getElementById("textbox").value);
}
function clean(){
    document.getElementById("textbox").value="";
}
function back1(){
    document.getElementById("textbox").value= (document.getElementById("textbox").value).substring(0,( document.getElementById("textbox").value).length-1);
}
function rec(){
    document.getElementById("textbox").value= 1/(document.getElementById("textbox").value);
}
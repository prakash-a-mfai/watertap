var isFlowing=false;
var time;
var tapw=document.getElementById("tapwater")
var water=document.getElementById("water");
function waterFlow(){
    
    var currentheight=water.clientHeight;
   var newheight = Math.max(currentheight - 1 ,0)
   water.style.height=newheight + 'px';
   water.style.marginTop=(400-newheight)+'px'
   if(currentheight===0){
    tapw.style.visibility="hidden"
   
}
else{
  
    tapw.style.visibility="visible"
}
}
function startFlow(){
    isFlowing=true
    time=setInterval(waterFlow,100)
    tapw.style.visibility="visible"
}
function stopFlow(){
    clearInterval(time)
    tapw.style.visibility="hidden"
    isFlowing=false
}
function res(){
   
   if(isFlowing){
    stopFlow()
    console.log("flow")
   }
   else if(!isFlowing){
    startFlow(); 
  console.log("notflow")
}
}



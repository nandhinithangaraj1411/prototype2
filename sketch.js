
var form,isAccident=false;
var database,allHospitals
var victim
function setup() {
  var canvas=createCanvas(displayWidth,displayHeight);
   database=firebase.database()
   form=new Form();
   form.display();
   victim=new Victim();
}

function draw() {
  background(255,255,255);   
  if(isAccident) 
  {
    clear();
    victim.getHospitalInfo();
  //  victim.displayInfo();
  
    isAccident=false;
  }
}
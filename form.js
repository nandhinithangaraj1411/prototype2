class Form{
constructor(){
this.name=createInput('name :');
this.contact=createInput('Contact :');
this.highwayno=createInput('Highway number :');
this.state=createInput('State :');
//this.severity=createSelect('Severity :');
this.submit=createButton('submit : ')
this.item=0;
}
display(){
this.name.position(100,30)
this.contact.position(100,60)
this.highwayno.position(100,90)
this.state.position(100,120)
//this.severity.position(100,150)
this.submit.position(150,180)
//this.severity.option('1')
//this.severity.option('2')
//this.severity.option('3')
//this.severity.option('4')
//this.severity.option('5')
//this.severity.changed(function(){this.severity});
this.submit.mousePressed(()=>{
    this.name.hide();
    this.contact.hide();
    this.highwayno.hide();
    this.state.hide();
   // this.severity.hide();
    this.submit.hide();
   
    victim.highwayno=this.highwayno.value();
    isAccident=true;
   
})
}
//mySelectEvent(){
  //var item = this.severity.value();
  //background(200);
  //text('It is a ' + item + '!', 50, 50);}
//
}
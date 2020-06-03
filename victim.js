class Victim{
constructor(){
//this.name=name;
//this.contact=contact;
this.highwayno=null;
//this.state=state;
//this.severity=severity
}
async getHospitalInfo(){
console.log("Getting info" + this.highwayno);
//isAccident=false;
var ref=await database.ref('highways')
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
//if(allHospitals!==undefined){
     allHospitals=data.val();
     console.log(allHospitals)
     for(var i in allHospitals){
          text("Hospital Name :"+ allHospitals[i].name,100,i+15)
          text("Contact :"+ allHospitals[i].contact,100,i+35)
          text("Address :"+ allHospitals[i].address,100,i+55)
          i=i+70
        }
//}
})
}
displayInfo(){
console.log("displayInfo")
for(var i in allHospitals){
  text("Hospital Name :"+ allHospitals[i].name,100,i+15)
  text("Contact :"+ allHospitals[i].contact,100,i+35)
  text("Address :"+ allHospitals[i].address,100,i+55)
  i=i+70
}

}
}
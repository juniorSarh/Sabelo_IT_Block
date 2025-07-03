//JavaScript for button request 


function RequestBtn() 
{
      alert('Your request has been submited successfully!!');
      
       const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("myForm").innerHTML = person.fullName();

      
    }
    console.log("testing 11");



    
    
    


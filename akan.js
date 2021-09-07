function generateName(){
   var date1 = document.getElementById("date").value;
   var month = document.getElementById("month").value;
   var yearOfBirth = document.getElementById("year").value;
   
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   
   var year = yearOfBirth.slice(2,4);
   var century = yearOfBirth.slice(0,2);
   
   var date = parseInt(date1);
   var yearOfBirth = parseInt(yearOfBirth);
   
   var year=parseInt(year);
   var century=parseInt(century);
   
   if (isNaN(date) || date <= 0 || date > 31 || isNaN(yearOfBirth)){
alert("YOU ENTERED AN INVALID DATE Or YEAR");
} else if (!months.includes(month)){
alert ("wrong month");
}
  else if (yearOfBirth<1600 || yearOfBirth>2099){
   alert ("Enter a year in range of 1600-2099")
  }
   else {

    if (month === "January" || month === "October") {
      monthCode = 0;
      }
         else if (month=== "February" || month === "March" || month === "November")
     {
      monthCode = 3;
         }
         else if (month=== "April" || month === "July"){
      monthCode = 6;
         }
         else if (month=== "September" || month === "December") {
      monthCode = 5;
         }
         else if (month==="May") {
      monthCode = 1;
         }
         else if (month==="August") {
      monthCode =2;
         }
         else if (month=== "June"){
      monthCode = 4;
         }
       
       if (century===20 || century=== 16){
       centuryCode =6;
       }
       else if (century===19) { 
      centuryCode = 0;
       }
       
       else if (century===18) {
      centuryCode = 2;
       }
       
       else if ( century===17) {
      centuryCode = 4;
       }
       
       var genders = document.getElementById("gender");
       var gender = genders.options[genders.selectedIndex].text;
       
       var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
       var femaleName = ["Akosua","Adwoa"," Abenaa","Akua","Yaa","Afua","Ama"];
       var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   }
   
      var remainder = ((date + monthCode + year + Math.floor (year/4 ) + centuryCode)%7);
     
   
       if ( gender == "Male") {
      document.getElementById("result").innerHTML = "Wow! You were born on " + dayOfWeek[remainder]+ " and your name is " +  maleName[remainder];
      }
   else if (gender == "Female") {
          document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[remainder]+ " and your name is " +  femaleName[remainder];   
      }
     
    }
     
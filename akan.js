// function generateName(){
//     var date = document.getElementById('date').value;
    
//     var month = document.getElementById('month').value;
   
//     var yearOfBirth = document.getElementById('year').value;
    
  
//     var century = yearOfBirth.slice(0,2);
//     var year = yearOfBirth.slice(2,4);
  
//     var genders = document.getElementById("gender");
//     var gender = genders.options[genders.selectedIndex].text;
  
//     var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
//     var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
  
//     var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
//     var dayOfBirth = Math.floor(dayOfBirth);
  
//     if (gender === "Male") {
//          document.getElementById("result").innerHTML = "Wow! You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
//          }
//          else if (gender === "Female") {
//              document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
//          }
      
//   }








 function generateName (){
     var date = document.getElementById("date").value;
     var month = document.getElementById("month").value;
     var yearOfBirth = document.getElementById("Year").value;

     if (month === January, October,) {
         mothCode=0
        }
     else if (month=== February, March, November){
         monthCode=3
     }
     else if (month===April,July){
         month=6
     }
     else if (month===September,December) {
         month=5
     }
     else if (month===May) {
         month=1
     }
     else {
         month=1
     }
     
         January:0
         February: 3
         March:3
         May: 1
         June: 4
         April: 6
         July: 6
         August: 2
         September: 5
         October: 0
         Nov: 3
         Dec: 5
     
     monthCode = [0,1,2,3,4,5,6]

     var year = yearOfBirth.slice(2,4);
     var century = yearOfBirth.slice(0,2);

     var genders = document.getElementById("gender");
     var gender = genders.options[genders.selectedIndex].text;

     var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
     var femaleName = ["Akosua","Adwoa"," Abenaa","Akua","Yaa","Afua","Ama"];
     var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     var monthCode = (date + monthCode + year +year/4 +centuryCode)%7
 }



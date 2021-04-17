// // chapter 9 to 11

// 1
// var city = prompt("Enter your city name")
// if(city === "karachi"){
//     alert("Welcome to The City of Lights " + city);
// }
// else{
//         alert("Welcome to " + city);
   
//     }    

 
// 2
// var gender = prompt("Your gender")
// if (gender === "male"){
//     alert("Good Morning Sir!")
// }
//      else if (gender === "female") {
//          alert("Good Morning Ma'am!")
//      }


// 3
// var color = prompt("Enter road traffic signal color")
// if (color === "red"){
   
//     alert("Must Stop");
// }
// else if (color ==="yellow"){
    
//     alert("Ready to move");


// }

// else if (color ==="green"){
   
//     alert("Move now");
// }



4
// var fuel= prompt("Your remaining fuel in car (in litres)")
// if (fuel < 0.25  ){
//     alert("Please refill fuel in your car")
// }

// else {
//     alert("You have enough fuel!")
// }
 



5
// a
// // var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// //Alert message would be displayed

// b
// // var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// //alert message would not be displayed

// c
// // var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// //Alert message would be displayed in condition 2 and 4

// d
// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// //Alet message would  be displayed

// e
// // if (true){
// //     alert("True");
// //     }
// //     if (false){
// //     alert("False");
// //     }
// //Alert message would be displayed 

// f
// //     if("car" < "cat"){
// //         alert("car is smaller than cat");
// //         }
// //Alert messsage would be displayed        



6
var sub1Marks =+prompt("Obtained marks of Subject 1")
var sub2Marks =+ prompt("Obtained marks of Subject 2")
var sub3Marks = +prompt("Obtained marks of Subject 3")

var totalObtMarks= sub1Marks + sub2Marks + sub3Marks

var totalMarks = prompt("Enter total Marks")

var percentage = Math.round( (totalObtMarks / totalMarks) * 100)

document.write("<h1> Marksheet <br><br></h1>".bold()+ "Total marks : "+ totalMarks + "<br> Marks obtained : " +totalObtMarks + "<br> Percentage : " + percentage + "%")

 if (percentage >= 80 ){
     document.write("<br> Grade : A-one" + "<br> Remarks : Excellent")

}
else if (percentage >= 70){
    document.write("<br> Grade : A" + "<br> Remarks : Good")
}
else if (percentage >= 60){
    document.write("<br> Grade : B" + "<br> Remarks : You need to improve")
}
else if (percentage < 60){
    document.write("<br> Grade : Fail" + "<br> Remarks : Sorry")
}


// 7 
// var no = 6;
// var Guess= +prompt("Guess the secret no: ");

// if (Guess ===no) {
//     alert("Bingo! Correct answer");
// }
//     else if (Guess ===no+1){
//     alert("Close enough to the correct answer!");
// }
//     else{
//     alert("Oops! Wrong answer");
// }




8
// var num = prompt("Enter a number to check is it divisible by 3?")
//  if(num % 3 == 0){
//      alert(num +" can divisible by 3")
//  }
// else{
//     alert(num + " can not divisible by 3")
// }



9
// var no = prompt("Enter a number to checks whether the given input is an even number or an odd number ")
// if (no % 2 ===0 ){
//     alert("Give number is Even")
// }
// else {
//     alert("Given number is odd")
// }


// 10
// var T = prompt("Enter todays temprature")
// if (T > 40) {
//     alert("It is too hot outside.")
// }
// else if (T > 30){
//     alert("The Weather today is Normal.")
// }
// else if (T > 20){
//     alert("Today’s Weather is cool.")
// }
// else if (T > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }


// 11
// var firstNum = +prompt("Enter first no:" )
// var secondNum = +prompt("Enter second no:" )
// var operation = prompt("Enter operater like +, - , / , * , %": )
// if (operation === "+"){
//     alert(firstNum + secondNum)
// }
// else if (operation === "-"){
//     alert(firstNum - secondNum)
// }
// else if (operation === "/"){
//     alert(firstNum / secondNum)
// }
// else if (operation === "*"){
//     alert(firstNum * secondNum)
// }
// else if (operation === "%"){
//     alert(firstNum % secondNum)
// }









// // chapter 6 to 9
1
// var num=10;
// document.write("Result : ");

// document.write("<br> The value of a is : "+num);
// document.write("<br><br> ------------------------------------------");

// var newNum=++num;
// document.write("<br> The value of ++a is : "+newNum);

// document.write("<br> Now the value of a is : "+num);

// newNum=num++;
// document.write("<br><br> The value of a++ is : "+newNum);

// document.write("<br> Now the value of a is : "+num);
 
// var newNum=--num;
// document.write("<br><br> The value of --a is : "+newNum);

// document.write("<br> Now the value of a is : "+num);

// newNum=num--;
// document.write("<br><br> The value of a-- is : "+newNum);

// document.write("<br> Now the value of a is : "+num);





2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//  --a;  //1
//  --a - --b;  //1-0=1
//  --a - --b + ++b; //1-0+1=2
//  --a - --b + ++b + b--; //1-0+1+1=3
// alert(result)



3
// var name=prompt("whats your name?")
// alert("Welcome here "+ name)






// 5

// var no= prompt("enter number to get table")
// if (no == " ", "!" , "@" ,"."){ 
//     for ( var a=1; a <= 10; a++) {
//         document.write("<p>"+no+" x "+a+" = "+no*a+"</p>");
//     }
// }
// else{
//     for (var a=1; a <= 10; a++) {
//         document.write("<p>"+no+" x "+a+" = "+no*a+"</p>");
//     }
// }



6
var a = prompt("Enter Subject 1")
var b = prompt("Enter Subject 2")
var c = prompt("Enter Subject 3")
var totalMarks1  = 100
var totalMarks2  = 100
var totalMarks3  = 100
var sub1Marks = +prompt("Obtained marks of Subject 1")
var sub2Marks = +prompt("Obtained marks of Subject 2")
var sub3Marks = +prompt("Obtained marks of Subject 3")
var totalObtMarks= sub1Marks + sub2Marks + sub3Marks
var grandTotalmarks= 300
var perSub1 =  (sub1Marks / totalMarks1)*100
var perSub2 =  (sub2Marks/totalMarks2)*100
var perSub3 =  (sub3Marks/totalMarks3)*100


var totalPer= (totalObtMarks/grandTotalmarks)*100;


document.write("Marksheet <br> <br>".bold().fontsize(9))
document.write("<table> <tr><td> Subjects </td> <td> Total Marks </td> <td> Obtained Marks </td> <td> Percentage %</td> </tr>".fontsize(5).bold()
 +"<tr><td>" + a + "</td>" + "<td>" + totalMarks1 + "</td>" + "<td>" + sub1Marks + "</td><td>"+ perSub1 +"% </td> </tr>"+ "<tr><td>" + b +
  "</td>" + "<td>" + totalMarks2 + "</td>" + "<td>" + sub2Marks + "</td> <td>"+ perSub2 +"% </td> </tr>"+"<tr><td>" + c + "</td>" + "<td>"
   + totalMarks3 + "</td>" + "<td>" + sub3Marks + "</td><td>"+ perSub3 +"% </td> </tr>" + "<tr> <td></td>" + "<td>"+ grandTotalmarks +
   "</td>"+ "<td>"+ totalObtMarks +"</td>"+"<td>"+ totalPer + "% </td></tr>" +"</table>" )







































































































































































                                                                                                                                                                   
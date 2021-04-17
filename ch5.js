// // chapter 5
1
var a = 3;
var b = 5;
var c = a + b ;
var d = "Sum of 3 and 5 is"
document.write ( d.bold() + " " +  c + "<br>");

2
var a = 3;
var b = 5;
var c = a - b ;
var d = "Subtarction of 3 and 5 is"
document.write ( d.bold() + " " +  c + "<br>" );

var a = 3;
var b = 5;
var c = a * b ;
var d = "Multiplication of 3 and 5 is"
document.write ( d.bold() + " " +  c + "<br>");

var a = 3;
var b = 5;
var c = a / b ;
var d = "Division of 3 and 5 is"
document.write ( d.bold() + " " +  c + "<br>");

var a = 3;
var b = 5;
var c = a % b ;
var d = "Modulus of 3 and 5 is"
document.write ( d.bold() + " " +  c + "<br>");



3.

var b = "Value after variable declaration is";
var a = 
document.write ( b + " " + a + "<br>")

var c = 5;
var d = "Initial value:";
document.write (d + " " + c + "<br>");

var e = 5
var f = ++e
document.write ("Value after increment is:" + " " + f +  "<br>");

var g = 6;
var h = 7 + g;
document.write ("Value after addition is:" + " " + h + "<br>");

var i = 13;
var j = --i;
document.write ("Value after decrement is:" + " " + j +  "<br>");

var k1 = 9;
var k2 = 3;
var l = k1 % k2 ;
document.write ("The remainder is :" + " " + l +  "<br>");



4.
var ticketPrice = 600;
var total = "Total cost to buy 5 tickets to a movie is" + " " + ticketPrice * 5;
document.write (total + "<br>")


5.
var table = "Table of 4" + "<br>";
var t1 = "4 x 1 =" + " " + 4 * 1 + "<br>";
var t2 = "4 x 2 =" + " " + 4 * 2 + "<br>";
var t3 = "4 x 3 =" + " " + 4 * 3 + "<br>";
var t4 = "4 x 4 =" + " " + 4 * 4 + "<br>";
var t5 = "4 x 5 =" + " " + 4 * 5 + "<br>";
var t6 = "4 x 6 =" + " " + 4 * 6 + "<br>";
var t7 = "4 x 7 =" + " " + 4 * 7 + "<br>";
var t8 = "4 x 8 =" + " " + 4 * 8 + "<br>";
var t9 = "4 x 9 =" + " " + 4 * 9 + "<br>";
var t10 = "4 x 10 =" + " " + 4 * 10 + "<br>";
var tableEnd = table.big() + t1 + t2 + t3 + t4 + t5 +t6 +t7 +t8 +t9 +t10;
document.write(tableEnd);


6.
var degree = "o";
var celsius = 40;
var convertInF = (celsius * 9 / 5) + 32 ;
var y = "40" + degree.sup() + "C" + " is" + " ";
document.write( y + convertInF + degree.sup() + "F" + "<br>");

var degree1 = "o";
var farenheit = 40;
var convertInC = (farenheit - 32) * 5/9 ;
var z = "40" + degree1.sup() + "F" + " is" + " ";
document.write( z + convertInC + degree1.sup() + "C" + "<br>");



7.
var ex7 = "Shopping Cart"
var a = ["Price of item 1 is 650 " , "Quantity of item 1 is 3" , "Price of item 2 is 100","Quantity of item 2 is 7" , "Shipping Charges 100" , "Total cost of your order is "]
var item1 =650;
var quantity1 =   3;
var costItem1 = item1 * quantity1 ;
var item2 = 100;
var quantity2 =  7;
var costItem2 = item2 * quantity2;
var shippingCharges = 100;
var totalCost= costItem1 + costItem2 + shippingCharges;
var ab = ex7.fontsize(7).bold() + " <br>" + " <br>" + " <br>" + a[0] + "<br>" +a[1] + " <br>" + a[2]+ "<br>" + a[3] + " <br>" + a[4] + " <br>"+ " <br>" +a[5]
document.write(ab + totalCost+ " <br>");


8.
var marksheet="Mark Sheet";
var totalMarks= 500;
var marksobt= 380;
var percentage= marksobt * 100 / totalMarks;
var complete = marksheet.fontsize(7).bold()+ " <br>"+ " <br>" + "Total Marks: 500" + " <br>"+ "Obtained Marks: 380" + " <br>"+ "Percentage: ";
document.write(complete + percentage + " %" + " <br>")


9.
var currency= "Currency in PKR"
var dollar=10 , $rate= 104.80 , riyal = 25 , riyalRate =28
var totalcurrency = dollar * $rate + riyal * riyalRate
document.write(currency.fontsize(7).bold()+ " <br>" + " <br>"+ "Total currency in PKR: " + totalcurrency + "<br>")


// 10.
// var a= 6 , b= 5 , c = 10 , d=2
// var ans = (a + b)*c / d
// alert (ans )


// 11.
var ex11 ="Age Calculator"
var currentYear= 2020 
var birthYear= 2002
var Age = currentYear - birthYear
document.write (ex11.bold().fontsize(7) + "<br>"+"Current year: 2020 " + "<br>"+ "Birth year: 2002 " + "<br>" + "Your age is "+ Age +"<br>")



12.
var ex12 = "The Geometrizer"
var radius = 20;
var circumference = 2 * 3.142 * radius;
document.write(ex12.fontsize(7)+ "<br>" + "Radius of a circle: 20"+ "<br>" + "The circumference is " + circumference +"<br>")
var area = 3.142 * radius * radius;
document.write( "The area is " + area + "<br>")


13
var ex13 = "The Lifetime supply  Calculator"
var snack = "Favourite Snack : Chocolate"
var currentAge = 20;
var maxAge = 65;
var snacksperDay= 4;
var totalforRest = (maxAge - currentAge) * 4
document.write(ex13.bold().fontsize(7) + "<br>" + snack + "<br> " + "Current Age: 20 " + "<br>" +"Estimated max age: 65" + 
"<br>" + "Snacks per day: 4" +"<br>"+ "You will need " +totalforRest + " chocolate to last you until the ripe old age of 65")



















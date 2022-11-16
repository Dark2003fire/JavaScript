 document.write("Hello World");
 document.write("<h1> Hello This is external Javascript</h1>");
 //In javascript to declare variable we will use var keyword
 // here we dont have to create a datatype 
 var num = 16;
 var name = "Hitesh Jha"; 
 var flag = True;


var a = 5;
var b = 10;
var c ;
c = a+b;
document.write(c);

var a = true;
var b = false;
var result ;
result = (a&&b);
document.write(result);


var age = 18
if(age>21){

    document.write("<b> He\she is qualifies for the driving </b>");
}
else{
    document.write("<b> He / she is not qualifies for the driving </b>");

}


var books = "Maths";
if(books=="Science"){
    document.write("Its a Science books");
}else if(books=="Maths") {
    document.write("It's Maths Book");

}
else if (books=="economics"){
    document.write("It's a  Economics book");
}
else{
    document.write("It's a Unknown Books");
}





document.write("Entering into switch case:<br/>");
var grade = 'A';
switch(grade){

    case 'A' : document.write("Good Grade<br/>");
        break;
    case 'B' : document.write("Pretty Good Grade <br/>");
        break;
    case 'C' : document.write("Fair Grade<br/>");
        break;
    case 'D' : document.write("Passes<br/>");
        break;
    case 'E' : document.write("Failed<br/>");
        break;
    default : document.write("unknown grade<br/>");

}
document.write("Exiting the Swtich cases<br/>");




var count = 0;
document.write("Loops started<br/>");
while(count<=10){
    document.write("Loop Counting :"+count+"<br/>");
    count++;

}
document.write("Loops Stopped");


document.write("Loops  started<br/>");
var Counts = 1;
do{
    document.write("Loop Counting : "+Counting+"<br/>");
    Counting++;

}while(Counting<=20);
document.write("Loops Stopped<br/>");



var i;
for(i = 0; i<=10;i++){
    document.write("Current count :"+i+"<br/>");

}


var aproperty;
document.write("Navigator Properties are <br/>");
for(aproperty in navigator){

    document.write(aproperty);
    document.write("<br/>");

}

document.write("OuterLoop <br/>");
outerLoop:
for(var i = 0; i<10;i++){

    document.write("outerloop <br/>");
    for(var j=0;j<5;J++){
        if(i ==5){
            break;


        }
        if(j = 7){
            break;
            document.write("Inner Loops <br/>");

        }
    }
}


function SayHello(){

    document.write("Say Hello Javascript");

}

function SayInfo(name , age){

    document.write(name+"is "+age+" years old ");


    
}

function Concatenate(first , last){

    var full;

    full = first+last;
    return full;

}
function SecondFunction(){


    var result;
    result = Concatenate('Hitesh' ,'Jha');
    document.write(result);
}


function hypotenuse(a , b){

    function square(x){
        return x*x;

    }
    return Math.sqrt(square(a)+square(b));

}
function Second_Function(){


    var Result;
    Result = hypotenuse(15, 20);
    document.write(Result);

}

function Validation(){

    //Here all validation logic goes here 
}

function over(){

    document.write("This is over function");

}
function out(){
    document.write("This is out function");
}

// Cookies :-->
// Writing Cookies
function WriteCookie(){


    if(document.myform.customer.value = ""){
        alert("Enter Some Values");
        return;

    }

    cookievalue = escape(document.myform.customer.value)+";";
    document.cookie= "name="+cookievalue;
    document.write("Setting Cookies :"+"name="+cookievalue);

}

//Reading cookies:-->
function ReadCookies(){


    var allcookies = document.cookie;
    document.write("All Cookies:"+allcookies);

    //Get all the cookies pairs in an array

    cookiesarray = allcookies.split(';');
    

    // Now take all the key value pairs from the array;

    for(var i =0; i<cookiesarray.length;i++){

        name = cookiesarray[i].split('=')[0];
        name = cookiesarray[i].split('=')[1];

        document.write("Key is :"+name+ "value is :" +value);
    }

}

//Expire Cookies:-->
function ExpireWriteCookies(){

    var now = new Date();
    now.setMonth = (now.getMonth()+1);// this line expire the cookies
    cookievalue = escape(document.myform.customer.value);
    document.cookie = "name="+cookievalue;
    document.cookie = "expires="+now.toUTCString()+";";
    document.write("Setting Cookie:" +"name="+ cookievalue);


}

//Deleting a cookie;->
function DeleteCookie(){

    var now = new Date();
    now.setMonth = (now.getMonth()-1);//This  line delete the cookies
    cookievalue = escape(document.myform.customer.value);
    document.cookie = "name="+cookievalue;
    document.cookie = "Delete="+now.toUTCString()+";";
    document.write("Setting Cookie:"+"name="+cookievalue);

}


function Redirect(){

    window.location="http://www.tutorialspoint.com";
    
}

var Car = new Object();
Car.name = "Range Rover";
Car.Mileage = "25";
Car.Features = " Durable Portable Effceint and Luxruious Styles";

document.write("Car Name is :"+Car.name);
document.write("Car Mileage is :"+Car.Mileage);
document.write("Car Features : "+Car.Features);




function Methods(title , Author ){

    this.title = title;
    this.Author = Author;

}
var Book = new Methods("Rich Dad and poor Dad" , "Robert T KiyoSaki")
document.write("Book name is:"+myBook.title);
document.write("Books AUthor is :"+myBook.Author);



function AddPrice(amount){

    with(this){
        price = amount;
    }
}

function Book(title , author){

    this.title = title;
    this.author = author;
    this.price = 0;
    this.AddPrice = AddPrice;


}

var myBook = new Book("Rich Dad Poor Dad"  , "Robert T Kiyosaki");
myBook.AddPrice(252);
document.write("Book name is :"+mybook.title+ "<br>");
document.write("Book Author is :"+myBook.author+"<br>");
document.write("Books Price is :"+mybook.AddPrice+"<br>");




function ShowMaxValue(){

    var value = new Number.MAX_VALUE;
    document.write("The macximum value of Numbers in JavaScipt is :"+value);

}


function ShowMinValue(){

    var value = new Number.MIN_VALUE;
    document.write("The Minimu value of the numbers in Javascript is :"+value);

}


function ShowNanValue(){

    var dayofMonth = 50;
    if(dayofMonth<1||dayofMonth>31)
    {
        dayofMonth = Number.NaN;
        alert("The day of month lies in between 1 and 31");

    }

    document.write("Value of dayo of Month is:"+dayofMonth);

}


function ShowNegativeInfinity(){

    var smallnumber =   (-Number.MAX_VALUE)*2;
    if(smallnumber==Number.NEGATIVE_INFINITY){
        alert("Value of Small numbers is :"+smallnumber);
    }
}

function ShowPositiveInfinity(){

    var _bignumber = (Number.MAX_VALUE)*2;
    if (_bignumber==Number.POSITIVE_INFINITY){
        alert("Value of big number is :"+_bignumber);

    }
}



function UsingPrototype_Books(title , Author){
    this.title = title;
    this.Author = Author;

}
var __myBooks = new UsingPrototype_Books("How to get rid fof worrying " , "Dale Karnigei");
UsingPrototype_Books.prototype.price = null;
__myBooks.price = 200;
document.write("Book name is :"+__myBooks.title+"<br>");
document.write("Books Author is :"+__myBooks.Author+"<br>");
document.write("Books Price  is :"+__myBooks.price+"<br>");





var num = 3.14894;
var val = num.toExponential();
document.write("num.toExponential() is "+val);
document,write("<br>");

var _val = num.toExponential(5);
document.write("num.tiExponential() is :"+_val);

function AllNumbers_Methods(){




document.write("num.toFixed() is :"+num.toFixed());

document.write("num.toLocaleString() is :"+num.toLocaleString());

document.write("num.toString() is :"+num.toString());

document.write("num.toPrecision() is :"+num.toPrecision());

document.write("num.Valueof()  is :"+num.valueOf());



}




var str = new String("This is a new String");
document.write("Constructor of the string is :"+str.constructor());

document.write("The lengtn of the string is :"+str.length());

document.write("The char code at :"+str.charCodeAt());

document.write("The char at is:"+str.charAt());

document.write("The concat of the string is:"+str.concat());





//tag elements :-->

var str = new string("Hello World");
alert(str.anchor("myanchor"));


var str = new string("Hello HTML");

alert(str.big());

alert(str.fontcolor());

alert(str.fontsize());

alert(str.blink());

alert(str.bold());

alert(str.fixed());

alert(str.small());

































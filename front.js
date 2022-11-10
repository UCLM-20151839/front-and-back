var number;
var sum = 0;
var nus = 0;

document.getElementById("mybutton").onclick = function(){
    number = document.getElementById("mytext").value;
    for (let i = 1; i <= number; i++)
    {
        if(i %2 == 0){
            console.log(i);
           sum = sum + i;
        }

    }
    console.log("sum of even numbers " + sum);

    for (let x = 1; x <= number; x++)
    {
        if( x %2 != 0){
            console.log(x);
           nus = nus + x;
        }

    }

    console.log("sum of odd numbers " + nus); 
}
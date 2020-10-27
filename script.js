//ipotesi = if (il numero è multiplo di 3) allora i = FizzBuzz. Bisogna usare lo stesso metodo utilizzato per l'esercizio pari e dispari: if(number % 2 ==0) in cui zero è il "resto"
var outputNumberList = document.getElementById("number-list");
var outputNumberList = document.getElementById("number-list");
for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        outputNumberList.innerHTML+= "<li>FizzBuzz</li>"
    else if (i % 3 == 0)
        outputNumberList.innerHTML+= "<li>Fizz</li>"
    else if (i % 5 == 0)
        outputNumberList.innerHTML+= "<li>Buzz</li>"
    else
        outputNumberList.innerHTML+= "<li>"+i+"</li>"
}

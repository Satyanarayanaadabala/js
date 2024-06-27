//<-- Write a Program to perform mathematical calculations addition, division and multiplication on two numbers using Switch statement.-->

a=parseInt(prompt("Enter the first number"));
b=parseInt(prompt("Enter the second number"));
operation=prompt("Enter the operation");
switch(operation)
{
    case "add":
        addition=a+b;
        alert("addition two numbers:"+addition);
        break;
    case "div":
        divide=a/b;
        alert("division two numbers:"+divide);
        break;
    case "multiple":
        multiple=a*b;
        alert("multiple of two numbers:"+multiple);
        break;
    default:
        alert("Invalid numbers");

}
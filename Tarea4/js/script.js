var n1 = Number(prompt("N1 : "));
var n2 = Number(prompt("N2 : "));
var Opcion = Number(prompt("Opcion : "));


console.log(n1);
console.log(n2);
console.log(Opcion);



switch(Opcion){
    case 1:
    document.write("Estas en el caso 1");
    document.write("La suma es = " + suma(n1,n2));
    break;
    case 2:

    console.log("Estas en el caso 2");
     document.write("La  resta es = " + resta(n1,n2));
    
    break;
    
    
    case 3:
        console.log("Estas en el caso 3");
        document.write("La  Multiplicacion es = " + Multi(n1,n2));


    break;
    case 4:
        console.log("Estas en el caso 4");
        document.write("La  Divisón  es = " + Divi(n1,n2));
    break;
    case 5:
        console.log("Estas en el caso 5");
        document.write("El factorial  es = " + Factorial(n1));
    break;
    case 6:
        console.log("Estas en el caso 6");
        document.write("La exponencial es = " + Exponencial(n1,n2));

    break;
    case 7:
        console.log("Estas en el caso 6");
        document.write("la raiz  es  = " + raiz(n1));
        break;
   
}



function suma(x,y){
return x+y;

}
function resta(x,y){
return x-y;

}
function Multi(x,y){

    return x*y;
}
function Divi(x,y){
if(y == 0){
    alert('No se puede dividir por 0');
}else{
    return x / y;
}
}
function Factorial(x){
var tot = 1;
for(i = 1; i<=x;i++){
tot = tot * i;

}
return tot;
}

function Exponencial(x,y){
return Math.pow(x,y);


}
function raiz(x){
return Math.sqrt(x);

}







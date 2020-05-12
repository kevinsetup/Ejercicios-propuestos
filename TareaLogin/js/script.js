class Usuario{
constructor(nombre,contraseña){ 

this.nombre = nombre;
this.contraseña = contraseña;
}
nombre(){
return this.nombre;


};
contraseña(){
return this.contraseña;
};
};

function validar(){
    var intentos = 3;

var user = new Usuario(document.getElementById('username').value, 
document.getElementById('password').value
);
var usernametext = "kevin"
var passwordtext = "123";
if(intentos == 3){
if(user.nombre == usernametext && user.contraseña == passwordtext){
    
alert("Bienvenido");
}else{
    alert("usuario o contraseña incorrecta");
   intentos--;
  alert(intentos);


}

   

};
}
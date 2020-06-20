var elementos= document.querySelectorAll('.nume');
var sumando = document.querySelector('.suma');  
var restando = document.querySelector('.resta');  
var igual = document.querySelector('.igual');  
var ac = document.querySelector('.borra'); 
var respuesta = document.querySelector('.respuesta'); 
var nume1 = ''; 
var nume2 = ''; 
var sumatoria = false; 
var cambio = false; 
var resta  = false; 
var  asies; 
for (let index = 0; index < elementos.length; index++) {
  elementos[index].addEventListener('click', ()=>{  
    if(!cambio){
      if(sumatoria){
        nume1 = ''; 
      }
      respuesta.innerHTML= nume1 + elementos[index].innerHTML;
      nume1= nume1 + elementos[index].innerHTML; 
      console.log(nume1);
    }else{
      if(!sumatoria){
        nume2 = ''; 
      } 
      respuesta.innerHTML= nume2 + elementos[index].innerHTML;
      nume2= nume2 + elementos[index].innerHTML; 
      console.log(nume2+'aloi');
    }
  }); 
}
//...........operaciones
sumando.addEventListener('click', ()=>{
  cambio= true; 
  sumatoria= true; 
}); 
restando.addEventListener('click', ()=>{
  alert('hola restando'); 
});
igual.addEventListener('click', ()=>{
  var primero = parseInt(nume1); 
  var segundo = parseInt(nume2); 
  if(sumatoria){
    asies= suma(primero, segundo);
    nume1 = ''; 
    nume2 = ''; 
  }
  respuesta.innerHTML= asies; 
  cambio = false; 
  sumatoria= false; 
});

ac.addEventListener('click',()=>{
  nume1 = ''; 
  nume2 = ''; 
  respuesta.innerHTML=''; 
}); 


respuesta.innerHTML= ''; 

function suma (a,b){

  return a+b; 
};

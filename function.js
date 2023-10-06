function openNav(){
  document.getElementById("mobile-menu").style.width = "40%";
  document.getElementById("mobile-menu").style.height = "50%";
}

function closeNav(){
   document.getElementById("mobile-menu").style.width = "0%";
}

window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var scrollY = window.scrollY;

  if (scrollY > 0) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

if(document.querySelector('#container-slider')){

  setInterval('fntExecuteSlide("next")',9000);
}



//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
      link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
      });
  });
}

function fntExecuteSlide(side){
  let parentTarget = document.getElementById('slider');
  let elements = parentTarget.getElementsByTagName('li');
  let curElement, nextElement;
  
  for(var i=0; i<elements.length;i++){
      if(elements[i].style.opacity==1){
          curElement = i;
          break;
      }
  }
  
  if(side == 'prev' || side == 'next'){
      
      if(side=="prev"){
          nextElement = (curElement == 0)?elements.length -10:curElement -1;
      }else{
          nextElement = (curElement == elements.length -1)?0:curElement +1;
      }
  }else{
      nextElement = side;
      side = (curElement > nextElement)?'prev':'next';
  }
  //RESALTA LOS PUNTOS
  let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
  elementSel[curElement].classList.remove("item-select-slid");
  elementSel[nextElement].classList.add("item-select-slid");
  elements[curElement].style.opacity=0;
  elements[curElement].style.zIndex =0;
  elements[nextElement].style.opacity=1;
  elements[nextElement].style.zIndex =1;
}

// script.js mostrador
// Ejemplo de funcionalidad adicional (puedes personalizar según tus necesidades)

const botonesComprar = document.querySelectorAll('.boton-comprar');

botonesComprar.forEach((boton) => {
    boton.addEventListener('click', () => { 
        alert('¡Producto agregado al carrito de compras!');
    });
});
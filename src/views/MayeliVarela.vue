<template> 

<div>
    <div class="container" style="margin-top:30px">
    
    
        <div class="col-sm-12 mt-5 ">
        <h1 class="pb-2"><strong>{{ name }}</strong></h1>
        <h2 class="pb-2">Estudiante de Diseño Digital</h2>
        </div> 
    

    <div class="row">
        <div class="col-sm-4">
        <div class="foto-"> <img src="../assets/mayelivarela.jpeg"> </div>
        

        <div class="clearfix"></div>
        </div>
        <div class="col-sm-7">
        <div class="fakeimg"> 
            <img class="logo" src="../assets/logoyeli.png">
              <p>Nacida en Cádiz, Mayeli Varela es una jóven gaditana que a la edad de 18 años decidió trasladarse a Lleida para comenzar una formación en Diseño Digital y Tecnologías Creativas en esta ciudad. Tras finalizar estos estudios, llevará a cabo unos estudios secundarios en filosofía y diversos cursos de sus aficiones actuales.</p>
        </div>
         </div>
      
    </div>
    
    </div>
    
     <h1 class="pb-2">
      <icons :icon="['fas', 'star']" /> 
        AAĀÁ
      <icons :icon="['fas', 'star']" /> 
      </h1>    
      <p> Trabajo de Edición Digital del <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link>.</p>
      <p class="strong1"> <strong > La idea principal del proyecto es mostrar de una forma no convencional, la historia de Cádiz, ciudad más antigua de occidente. Dado a este extenso pasado, existe una gran cantidad de la población que no conoce todos los sucesos que en ella han tenido lugar ni, incluso, los propios gaditanos.

Se pretende, por tanto, recoger la información más relevante de, sobre todo artistas, a través del gran número de estatuas que se encuentran en la ciudad. La población tiende a pasarlas por alto, sin darles importancia. El objetivo es recuperar parte de la historia mediante una exposición fotográfica  (personas o hechos más importantes) de los distintos siglos.

He recogido algunas que, en mi opinión, son claves para la historia de Cádiz, para el arte y su relación con el resto de España mediante una evolución desde los siglos I a.C hasta el siglo XX . Encontramos una línea del tiempo donde, por orden cronológico, se visualizan las fotografías. 
</strong></p>
<p> Pasa el cursor por las imágenes para verlas más grandes</p>
      <b-container fluid class=" pt-3" >
  <b-row>
    <b-col>
      <b-img class="mayefoto" src= "../assets/maye-1.jpg" alt="Image 1"></b-img>
      <h3>Moret </h3>
      <p>Su origen gaditano y sus relaciones familiares y de negocios con Gran Bretaña le predestinaban a ser, como fue, un activo defensor del librecambismo. Colaboró en la redacción de la Constitución española de 1869. Durante su gestión se abolió la esclavitud en Puerto Rico, que quedó limitada a la libertad de vientres, conocida como Ley Moret, de 4 de julio de 1870 y promovió un texto constitucional para Puerto Rico. Fundó el Partido Democrático-Monárquico, que en 1882 se fusionó en Izquierda Dinástica y acabó dentro del Partido Liberal de Sagasta.</p>

    </b-col>
    <b-col>
      <b-img class="mayefoto" src= "../assets/maye-2.jpg" alt="Image 2"></b-img>
      <h3>A la Constitución 1812 </h3>
      <p> El monumento a la Constitución de 1812 es un monumento conmemorativo de España que conmemora el centenario de la Constitución de 1812 ubicado en la Plaza de España de Cádiz. Contiene varias alegorías de la Guerra, la Paz, la Agricultura y la Industria, junto con relieves alusivos a la resistencia gaditana durante la Guerra de la Independencia. Los laterales del monumento muestran las figuras alegóricas de la Agricultura a la izquierda, y a la derecha de la Ciudadanía.</p>
    </b-col>
    <b-col>
      <b-img class="mayefoto" src="../assets/maye-3.jpg" alt="Image 3"></b-img>
       <h3>La Perla de Cádiz</h3>
       <p> Cantaora gitana gaditana de flamenco. Destacó por los estilos de: alegrías, bulerías, soleares, tientos, tangos y saetas. También por su excelente compás y maestría interpretativa. Actualmente en Cádiz una peña flamenca lleva su nombre.</p>
    </b-col>
  </b-row>
</b-container>

</div>
</template>

<script>
export default {
    props: {  
   name: {
      type: String,
      default: 'Mayeli Varela'
    }
  }
}
</script>

<style>
.logo {
    width: 30%;
    
  }
.mayefoto{
  width:75%;
  margin-bottom:1em;
  
}
.mayefoto:hover{
  transform: scale(1.1);
  transition-duration: 2s;
}
.mayefoto:not(:hover){
  transition-duration: 2s;
}
.strong1{
  margin-left:3em;
  margin-right: 3em;
}
</style>
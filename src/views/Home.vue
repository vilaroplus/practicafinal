<template>
<div id="home">
     <h1>Proyecto final de Web Dinámica</h1>  

      <p>Trabajos destacados de los creadores de la web. Pertenecen al    
      <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link> 
      de la 
      <b-link href="http://www.udl.cat/">Universitat de Lleida</b-link>.
    </p>

     <Diapos/>
 </div>
</template>

<script>
import Diapos from '../components/Diapos.vue' 

export default {
   name: 'Home',
   components: {
        Diapos
  }
}
</script>
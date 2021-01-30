<template> 

<div>
<div class="container" style="margin-top:30px">
  
   
    <div class="col-sm-12 mt-5 ">
      <h1 class="pb-2"><strong>{{ name }}</strong></h1>
      <h2 class="pb-2" >Estudiante de Diseño Digital</h2>
    </div> 
  

  <div class="row">
    <div class="col-sm-4">
      <div class="foto-"> <img src="../assets/fotoricard.png"> </div>
      

       <div class="clearfix"></div>
    </div>
    <div class="col-sm-8">
      <div class="fakeimg">
         <img class="logo" src="../assets/logoriki.png">
        <p>Nacido en La Pobla de Lillet, un pequeño pueblo al norte del Berguedá. Se mudó a Lleida con 18 años para empezar sus estudios en el grado de Diseño Digital y Tecnologias Creativas. 
          Aún no sabe concretamente a que se va a dedicar, pero sus aficiones principales siempre han sido la fotografia, el diseño gráfico y el ámbito musical.
        </p>
      </div>
    </div>
  </div>
  
</div>
 <div>
        <h1 class="pb-2">
                <icons :icon="['fas', 'star']" /> 
                <strong> Chromatic and Silver Tears </strong>
                 <icons :icon="['fas', 'star']" /> 
                </h1>
                <p> Trabajo de Edición Digital del <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link>.</p>

                <div>
                  <strong>Pasa el cursor por las imágenes para verlas más grandes</strong>
                  <p class="p1">Estos dos trabajos son para mi, de los más completos que hemos realizado durante el transcurso de toda la carrera. La primera fotografía, pertenece a un proyecto que hicimos para la asignatura de marketing y medios sociales, en este, tuvimos que crear desde cero una marca para más tarde hacer un análisis completo de ella, la nuestra se llamaba Chromatic y su destino era principalmente la venta de cajas de suscripción mensual de tintes para pelo.
                    Entre todas las cosas que analicemos, se encontraban el DAFO, el público objetivo, el plan de acciones...
                  </p>
                  <p class="p1">El segundo trabajo pertenece a una asignatura de primer año del grado, Contenidos Digitales. En esta nos pidieron realizar una portada y un concepto para un álbum imaginario. Yo usé este proyecto artístico para reflejar un poco mi vida en general, como me veo yo desde otros ojos. En la foto se puede ver la portada del vinilo, llamado Silver Tears (Lágrimas de plata), representando estas a todas las canciones que podemos escuchar.
                  </p>
                  <img class="trabajos1" src="../assets/CHRMATICMOCKUP.png">
                  <img class="trabajos2" src="../assets/RICARDFRONT.png">
                </div>
  </div>

 </div>

</template>

<script>
export default {
    props: {  
   name: {
      type: String,
      default: 'Ricard Martinez'
    }
  }}
</script>

<style>

.logo {
    width: 26%;
}

.trabajos1 {
    width: 44.3%;
    margin-bottom: 3em; 
    margin-right: 1em;
}

.trabajos2 {
    width: 50%;
    margin-bottom: 3em; 
    margin-left: 1em;
}

.trabajos1:hover {
  transform: scale(1.1);
  transition-duration: 2s;
}

.trabajos2:hover {
  transform: scale(1.1);
  transition-duration: 2s;
}

.trabajos1:not(:hover){
  transition-duration: 2s;
}

.trabajos2:not(:hover){
  transition-duration: 2s;
}

.p1{
  margin-right: 3em;
  margin-left: 3em;
}

</style>
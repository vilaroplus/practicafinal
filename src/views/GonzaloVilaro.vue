<template>

    <div>
      <div class="container" style="margin-top:30px">
        
        
          <div class="col-sm-12 mt-5 ">
            <h1 class="pb-2"><strong>{{ name }}</strong></h1>
            <h2 class="pb-2" >Estudiante de Diseño Digital</h2>
          </div> 
        

        <div class="row">
          <div class="col-sm-4">
            <div class="foto-"> <img src="../assets/Gonzalo.gif"> </div>
            

            <div class="clearfix"></div>
          </div>
          <div class="col-sm-8">
            <img class="logo" src="../assets/logogon.png"/> 
          
            <p>Nacido en Barcelona y criado en Lleida, Gonzalo Vilaró es un aficionado del diseño, la música y el teatro.
              Ha estudiado Desarrollo de Aplicaciones Multiplataforma y está cursando el Grado en Diseño Digital y Tecnologías Creativas en la Universidad de Lleida.
              Su ambición es la de juntar diversos ámbitos artísticos en proyectos multidisciplinares.
            </p>
          </div>
        
      </div>

    </div>



      <h1 class="pb-2">
      <icons :icon="['fas', 'star']" /> 
        Lonely With You
      <icons :icon="['fas', 'star']" /> 
      </h1>  
        <p> Trabajo de Edición Digital del <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link>.</p>

      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/FuoH-A1JBqQ"
          allowfullscreen
        ></b-embed>
      </div>

 </div>

</template>

<script>


export default {
  props: {  
   name: {
      type: String,
      default: 'Gonzalo Vilaró'
    }
  }
}
</script>
<template>
  <div>

    <h1 class="pb-2">
     <icons :icon="['fas', 'star']" /> 
      Nosotros
     <icons :icon="['fas', 'star']" /> 
     </h1>  
      <p> Somos estudiantes del grado en <strong><b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link></strong> de la Universitat de Lleida 
         
        </p>


      <div class="container-md">
          <b-card-group columns >
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card2 class="col-sm-12" :autor="proyecto.autor" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
            </div>
           </b-card-group>
       </div>

 </div>

</template>

<script>
import Card2 from '../components/Card2.vue' 
//(para utilizar en localhos)
//const lstProysJson = '/public/../proyectosWD2021.json';
//para utilizar en produccion
const lstProysJson = '../Nosotros.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'Nosotros'
    }
  },
  components: {
        Card2
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },

    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }

    }
  }
</script>

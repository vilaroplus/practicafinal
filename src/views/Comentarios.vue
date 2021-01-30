<template>
<div class="container">
    <h1 class="pb-2">
       Dinos que piensas
    </h1>
    <p> Tus comentarios son muy importantes para nosotros </p>

        
<!-- Formulario para añadir personas -->

        <section class="form">
            <form action="" class="text-center">
                <input v-model="nombre" @keyup.enter="crearPersona" type="text" class="form-control" placeholder="Nombre">

                <b-form-textarea
      v-model="comentario"
       @keyup.enter="crearPersona"
       type="text"
       name="comentario"
      placeholder="Escribe aquí..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
                <!-- Botón para añadir -->
                <input @click="crearPersona" type="button" value="Añadir" class="btn btn-success">
            </form>

        </section>
        
<!-- Tabla donde se muestran los datos -->
        <section class="data">
            <caption>Personas</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Comentario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, index) in personas" :key="persona.id">
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ persona.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato comentario -->
                                {{ persona.comentario }}
                            </span>
                        </td>
                        <td>
                            
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>

                                <!-- Botón para borrar -->
                                <button @click="borrarPersona(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>




    <script>
    export default {
        data() {
        return {
            // Input nombre
            nombre: '',
            // Input comentario
            comentario: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input comentario dentro del formulario de actualizar
            comentarioActualizar: '',
            // Lista de personas
            personas: [] 
         }
    },
        methods: {
            crearPersona: function () {
                
                // Anyadimos a nuestra lista
                this.personas.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    comentario: this.comentario
                });
                
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.comentario = '';
            },
            verFormActualizar: function (persona_id) {
                
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = persona_id;
                this.nombreActualizar = this.personas[persona_id].nombre;
                this.comentarioActualizar = this.personas[persona_id].comentario;
                
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarPersona: function (persona_id) {
                
                // Borramos de la lista
                this.personas.splice(persona_id, 1);
            },
            guardarActualizacion: function (persona_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;

                // Actualizamos los datos
                this.personas[persona_id].nombre = this.nombreActualizar;
                this.personas[persona_id].comentario = this.comentarioActualizar;
            }
        }

    }
</script>
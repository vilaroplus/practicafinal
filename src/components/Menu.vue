<template>
  
    
  <b-navbar toggleable="md" type="dark" variant="dark" >
    <b-navbar-brand>GDDITC</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!--
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'contacto'}">Contacto</b-nav-item>
           -->
            <b-nav-item class="nav-link" to="/home">Home</b-nav-item>
            <b-nav-item class="nav-link" to="/RicardMartinez">Ricard Martinez</b-nav-item>
            <b-nav-item class="nav-link" to="/MayeliVarela">Mayeli Varela</b-nav-item>
            <b-nav-item class="nav-link" to="/GonzaloVilaro">Gonzalo Vilaró</b-nav-item>
            <b-nav-item class="nav-link" to="/Nosotros">Nosotros</b-nav-item>
            <b-nav-item class="nav-link" to="/comentarios">Comentarios</b-nav-item>
            <b-nav-item class="nav-link" to="/recursos">Recursos</b-nav-item>
            <b-nav-item class="nav-link" to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>


<script>

</script>


<style scoped>

.router-link-exact-active, .router-link-active {
  background-color: rgb(0, 0, 0);
}
</style>
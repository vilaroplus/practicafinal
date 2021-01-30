<template>
  <div id="app">
    <div class="container-fluid">
      <Header />
      <Menu /> <!-- se añade el menú -->
      <b-breadcrumb :items="items"></b-breadcrumb>
      <router-view/>
    <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  },
  data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/home',
            to:"/home"
          },
          {
            text: 'Página actual',
            active: true
          }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.foto- img, .texto {
  max-width: 60%;
  padding-bottom: 2em;
  float:right;
}
.clearfix{
  float:none;
 
}
.texto{
   text-align: right;
   
}
.maye1{
  
text-align: right;
  
}
.pb-2{
  color:black;
}
</style>

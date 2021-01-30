import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/comentarios',
        name: 'Comentarios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddPersonas" */ '../views/Comentarios.vue')
    }, {
        path: '/recursos',
        name: 'Recursos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Tabla" */ '../views/Recursos.vue')
    }, {
        path: '/GonzaloVilaro',
        name: 'GonzaloVilaro',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/GonzaloVilaro.vue')
    }, 
    {
        path: '/MayeliVarela',
        name: 'Mayeli Varela',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/MayeliVarela.vue')
    },
    {
        path: '/RicardMartinez',
        name: 'Ricard Martinez',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/RicardMartinez.vue')
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/nosotros',
        name: 'Nosotros',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "ListaProyectos" */ '../views/Nosotros.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: '/practicawd/',
    routes
})

export default router
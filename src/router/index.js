import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SearchResault from '../views/SearchResault.vue'
import Details from '../views/Details.vue'
import Contact from '../views/Contact.vue'
import SignIn from '../views/SignIn.vue'
import Profil from '../views/Profil.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/search',
    name: 'SearchResault',
    component: SearchResault,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {

    return { x: 0, y: 0,behavior: 'smooth' }
    
}
})




export default router

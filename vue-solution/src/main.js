import Vue from 'vue'
// import App from './App.vue'
import Browse from './components/Browse.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';
import store from './store'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// In case of 404
const NotFound = { template: '<h1>Page not found</h1>' }
const routes = {
  '/': Login,
  '/browse': Browse,
  '/index' : Index
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  store,
  render (h) { return h(this.ViewComponent) }
})

// main.js

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Browse from './components/Browse.vue';
// import Login from './components/Login.vue';
// // import Index from './components/Index.vue';

// Vue.use(VueRouter);

// // const router = new VueRouter({
// //   mode: 'history',
// //   base: __dirname,
// //   routes: [
// //     { path: '/', component: Login },
// //     { path: '/about', component: Index },
// //     { path: '/contact', component: Browse }
// //   ]
// // });
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/browse',
//       name: 'Browse',
//       component: Browse
//     }
//   ]
// })

// new Vue({
//   router,
//   template: `
//     <div>
//       <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
//             <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
//             <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
//           </ul>
//         </div>
//       </nav>
//       <router-view class="view"></router-view>
//     </div>
//   `
// }).$mount('#app');
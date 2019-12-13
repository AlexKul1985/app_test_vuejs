import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store/store'

// import "font-awesome"
Vue.config.productionTip = false



const EventEmitter = Vue.extend();

export const eventEmitter = new EventEmitter(); 
async function loadApp(){
  
    
    
    
  //  return true;
    
  }
  
 

loadApp()
.then(() => {
//   new Vue({
//     render(h){ 
//      return h(App)
//     },
//    router,
//    store,
 
//  }).$mount('#app')
new Vue({
  render(h){ 
    return h('div',[
      h('button',{
        on:{
          click: function(){
            store.dispatch("content/setArticles")
            .then((d) => {
              console.log(d);
            })
            .catch((e) => {
              console.log('Message',e.message)
              // new Vue({
              //   render(h){ 
              //     return h('h1',
                    
              //     e.message)
              //    },
              // }).$mount('#app')
            })
          },
        
        }
      },
      "GET DATA"),
      h('button',{
        on:{
          click: function(){
            store.dispatch("content/setCategories")
            .then((d) => {
              console.log(d);
            })
            .catch((e) => {
              console.log('Message',e.message)
              // new Vue({
              //   render(h){ 
              //     return h('h1',
                    
              //     e.message)
              //    },
              // }).$mount('#app')
            })
          },
        
        }
      },
      "SET LOGIN")
    ])
   },
}).$mount('#app')
})




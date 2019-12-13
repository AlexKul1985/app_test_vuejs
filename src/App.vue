<template>

  <div id="app">
    <!-- <form-reg></form-reg>   -->
      <main-component></main-component>
      <!-- <div v-if="show">
      
      <letter  :show="show" v-for="(item,i) in word" :number="i" :left="item.left" :translate="item.translate" :rotate="item.rotate" :key="i">
        
         {{item.letter}}
        
      </letter>
      </div>
      <div class="buttons">
      <button @click="onShow">
        SHOW
      </button>
      <button @click="onHide">
        HIDE
      </button>

      </div> -->
<!-- <div id="list-complete-demo" class="demo">
  <button v-on:click="shuffle">Перемешать</button>
  <button v-on:click="add">Добавить</button>
  <button v-on:click="remove">Удалить</button>
  <div class="wrap">
     <transition-group name="move" tag="p">
        <span
          v-for="item in items"
          v-bind:key="item"
          class="complete"
        >
          {{ item }}
        </span>
    </transition-group>
  </div> -->
 
<!-- </div> -->

  </div>
 
</template>
    
  
    

<script>

 
import MainComponent from './components/MainComponent.vue';
import "font-awesome/css/font-awesome.css"
// import Letter from './components/test_components/Letter.vue'
// import _ from "lodash"
// import FormRegisterVue from './components/content/FormRegister.vue';



export default {
  name: 'app',
  components: {
   
   'main-component':MainComponent
  // 'letter':Letter
  // 'form-reg':FormRegisterVue
  },
  // methods:{
  //   onShow(){
  //     this.show = true;
      
  //   },
  //   onHide(){
  //     this.show = false;
  //     console.log('onHide')
  //   }
  // },
  // data(){
  //   return{
      
  //     word:[{
  //       letter:'H',
        
  //       translate:{
  //         x:'100px',
  //         y:'300px'
  //       },
  //       rotate:'30deg'
  //     },{
  //       letter:'i',
        
  //       translate:{
  //         x:'500px',
  //         y:'-50px'
  //       },
  //       rotate:'-180deg'
  //     },
  //     {
  //       letter:'m',
        
  //       translate:{
  //         x:'300px',
  //         y:'450px'
  //       },
  //       rotate:'280deg'
  //     }
  //    ],
  //     show:false
  //   }

  // }
  // data() {
  //   return {
  //   items: [1,2,3,4,5,6,7,8,9],
  //   nextNum: 10
  // }
  // },
  // methods: {
  //   randomIndex: function () {
  //     return Math.floor(Math.random() * this.items.length)
  //   },
  //   add: function () {
  //     this.items.splice(this.randomIndex(), 0, this.nextNum++)
  //   },
  //   remove: function () {
  //     this.items.splice(this.randomIndex(), 1)
  //   },
  //   shuffle: function () {
  //     this.items = _.shuffle(this.items)
  //   }
  // }
}
</script>

<style>
 button{
   float: right;
 }
html{
  
  height: 100%;
  width:100%;
}
body{
   height: 100%;
  width:100%;
  margin: 0;
  padding: 0;
 
}
ul,li,div,p{
  margin: 0;
  padding: 0;
}

#app{
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  position: relative;
  /* background: #000; */
}
.wrap{
  width: 300px;
  
}
.complete {
  display: inline-block;
  
  transition: all 1s;
  margin-right: 10px;
}
.move-enter-active{
  
}
.move-enter, .move-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translate(30px,30px);
}
.move-leave-active {
  position: absolute;
}
</style>

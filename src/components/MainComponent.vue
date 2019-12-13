<template>
  <div id="main">
        
        <menu-component :background="'rgb(37, 55, 67)'" :list="listMenu" @clickButton="onShowDrawer"></menu-component>
        <content-component></content-component>    
        
        <drawer-component @clickLink="selectLink"  :list="listMenu" :show="show"></drawer-component>    

  </div>
</template>


<script>

import MenuComponent from './menu/MenuComponent.vue'
import DrawerComponent from './drawer/DrawerComponent.vue'
import ContentComponent from './content/ContentComponent.vue'
import 'normalize.css';
import {mapGetters} from 'vuex'
import {eventEmitter} from '../main'


export default {
  name: 'MainComponent',
  components: {
   'menu-component': MenuComponent,
   'drawer-component': DrawerComponent,
   'content-component': ContentComponent,
  
  },
  data(){
    return {
      drawerShow:false,
      

    }
  },
  methods:{
    onShowDrawer(v){
      // console.log(v)
      // this.drawerShow = v; 
      this.$store.dispatch("drawer/setShow",v);
    },
    selectLink(){
      console.log('select')
      this.$store.dispatch('drawer/setShow',false)
     eventEmitter.$emit('changeEffectMenu'); 
    }

    
    
  },
  computed:{
    show(){
      return this.$store.getters["drawer/show"];
    },
    ...mapGetters('menu',{
      "listMenu":"list"
    })
  },
  created(){
    // this.$store.dispatch('content/setCategories')
    // this.$store.dispatch('content/setArticles')

    
  }
  
}
</script>

<style lang="scss">
img{
  width: 200px;
  height: 200px;
}
  #main{
      min-height: 100%;
      height: 100%;
      // background: rgb(68, 38, 18);
      // padding-left:25%;
  }
  // #main::after{
  //   content:"";
  //   display: block;
  //   clear: both;
  // }

</style>

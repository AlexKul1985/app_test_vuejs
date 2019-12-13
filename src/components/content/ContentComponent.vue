<template>
  <div class="content">
    <modal-window :background="'#fff'" :show="show" @close="onClose">
        <div >
          <h2>{{getItem}}</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, autem!</p>
           <h2>Название</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, autem!</p>
        </div>
      </modal-window>
<transition appear name="fade" mode="out-in">

     <router-view></router-view>
</transition>
  </div>
</template>

<script>
import ModalWindow from '../test_components/ModalWindow.vue'

export default {
  name: 'ContentComponent',
  components: {
     'modal-window': ModalWindow,
  },
  // data(){
  //   return {
  //    popupShow:false,
  //     item:0
  //   }
  // },
  methods:{
    onShowDrawer(v){
      // console.log(v)
      this.drawerShow = v; 
    },
    onClose(){
      // this.popupShow = false;
      this.$store.dispatch('content/setflagModalWindow',false)
    },
   
  },
  computed:{
     getItem(){
       
      //  return this.item != 0 ? this.item + "-й товар" : "";
     return this.$store.getters['content/modalTitle']
     },
     show(){
       return this.$store.getters["content/showModalWindow"]
     }

  },
  
  
}
</script>

<style lang="scss">
  .content{
    position: relative;
    float:right;
    width:100%;
    // padding-left: 25%;
    box-sizing: border-box;
    min-height: 100%;
    background:#2c3b52f5;
    margin: 0 auto;
    margin-top: 70px;
  }

   .fade-enter{
		opacity: 0;
	}

	.fade-enter-active{
		transition: opacity 0.5s;
	}

	.fade-enter-to{
		
	}

	.fade-leave{
		
	}

	.fade-leave-active{
		transition: opacity 0.3s;
	}

	.fade-leave-to{
		opacity: 0;
	}
    
    

</style>

<template>
    <transition name="translate" @after-enter="$emit('showDrawer')" @after-leave="$emit('fadeDrawer')">
        <div class="drawer" v-if="show">
            <ul class="list" @click="clickHandler">
              
                <router-link   class="list_item" v-for="item in list" :key="item.id" tag="li" :to="item.path" >
                      <a class="list_link" >
                        <span>{{item.title}}</span>
                        <i :class="'fa '+item.icon " aria-hidden="true"></i>
                    </a>
                </router-link>
            </ul>
        </div>
    </transition>
</template>
        
        
  
               
    


<script>


export default {
  name: 'DrawerComponent',
  props:['show','list'],
  components: {
  
  },
//   data(){
//       return{
//           list:[
//               {
//                   id:1,
//                   title:'CATEGORiES',
//                   icon:"fa-book",
//                   path:'/categories'
//               },
//               {
//                   id:2,
//                   title:'ARTICLES',
//                   icon:'fa-align-justify',
//                   path:'/articles'
//               },
//               {
//                   id:3,
//                   title:'LOGIN',
//                   icon:'fa-sign-in',
//                   path:'/categories'
//               },
//               {
//                   id:4,
//                   title:'LOGOUT',
//                   icon:'fa-sign-out',
//                   path:'/categories'
//               },
//               {
//                   id:5,
//                   title:'REGISTER',
//                   icon:'fa-lock',
//                   path:'/categories'
//               }
                  
//           ]
//       }
//   },
  methods:{
      clickHandler(){
          console.log('click')
          this.$emit('clickLink')
      }
  }
}
</script>

<style lang="scss" scoped>
.drawer{
    // float:left;
    position: fixed;
    top:70px;
    left:0%;
    min-width:280px;
    width: 25%;
    background: #2e2f35;
    min-height: 100%;
    // opacity: 0;
    // transform:translate3D(-100%,0,0);
    // transition: transform .5s ease-out, opacity .2s ease-out;

    
        .list{
            list-style: none;
            align-items: center;
       
       
    
           
        &_item{
            position: relative;
            padding-bottom: 10px;
            
           &:hover{
               background: #eee;
           }
           &:hover .fa{
               color:#777;
           }
           &:hover .list_link{
               color:#777;
           }
           &::after{
               content:"";
               display: block;
               position: absolute;
               bottom: 0;
               left: 50%;
               transform: translateX(-50%);
               width: 95%;
                border-radius: 5px;
               height: 4px;
               background: orange;
           }
       }
       
       &_link{
           display: block;
           color:#fff;
           text-decoration: none;
           outline:none;
           text-transform: uppercase;
           cursor: pointer;
           position: relative;
           padding: 10px;
           padding-right:20%;
            .fa{
               position: absolute;
               top:50%;
               right:10%;
               transform:translateY(-50%);
               color:#fff;
           }
       }
   }
    
}
.show{
    transform:translate3D(0%,0,0);
    opacity: 1;
}

 .translate-enter{
		opacity: 0;
        transform: translateX(-100%);
	}

	.translate-enter-active{
		transition: opacity 0.5s, transform 0.5s;
        
	}

	.translate-enter-to{
		transform: translateX(0%);
	}

	.translate-leave{
		
	}

	.translate-leave-active{
		transition: opacity 0.5s, transform 0.5s;
	}

	.translate-leave-to{
		opacity: 0;
        transform: translateX(-100%);
	}


</style>

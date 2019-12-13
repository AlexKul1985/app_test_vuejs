  
<template>
<div class="category">
<!-- <transition name="fade" mode="out-in"> -->
         <h1>{{infoCategory.name}}</h1>
         <ul>
             <router-link tag="li"  v-for="article in articles"  :to="'/' + infoCategory.alias +'/' + article.alias_art" :key="article.id_atricle">
                 <a>{{article.name}}</a>
             </router-link>
         </ul>
     
 <!-- </transition> -->
     <!-- <template v-else> -->
         
<!-- <transition name="fade" mode="out-in"> -->
       <!-- <router-view></router-view> -->
 <!-- </transition> -->
             
     <!-- </template> -->
     
</div>
     
</template>
<script>
export default {
//   name: 'Category',
//   props:['alias'],
  data(){
   return {
       alias: this.$route.params.alias,
    //    articles:null,
       
   }
  },
       
   
  watch:{
      $route :function(toR,fromR){
        
          this.alias = toR.params['alias']
      }
  },
  
  
  computed:{
      infoCategory(){
          
         
          return  this.$store.getters['content/getCategoryToAlias'](this.alias);
      },
      articles(){
        
          
          return   this.$store.getters['content/getArticlesToIdCategory'](this.infoCategory.id_category)
      }
    
  },
  
}
          
    
</script>
<style lang="scss">
.category{
    li{
        margin-top: 10px;
    }
    a{
        color:#fff;
        text-decoration: none;
    }
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
         

  
   
      



    

      
    
  
  



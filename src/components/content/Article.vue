  
<template>
     <div class="article">
         <h1>{{infoArticle.name}}</h1>
         <p>{{infoArticle.text}}</p>
     </div>
</template>
<script>
export default {
  name: 'Article',
  
  data(){
   return {
       alias_art: this.$route.params.alias_art
   }
  },
  watch:{
      $route :function(toR,fromR){
          this.alias_art = toR.params['alias_art']
      }
  },
  computed:{
      infoArticle(){
          console.log(this.alias_art)
          return this.$store.getters['content/getArticleToAlias'](this.alias_art)
      }
  },
  created(){
      console.log('created Article')
  }
}
</script>
<style lang="scss">
</style>
         

  
   
      



    

      
    
  
  



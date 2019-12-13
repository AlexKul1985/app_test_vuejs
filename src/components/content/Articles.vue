<template>
      <ul class="articles">
        <router-link tag="li" class="article" :to="'/'+ getCategoryById(item.id_category).alias+'/'+item.alias_art" v-for="item in list" @click="addCart(item.id_article)" :key="item.id_article">
          {{item.name}}
        </router-link>
      </ul>
</template>
  
  
   
      

<script>


export default {
  name: 'Articles',
  components: {
     
  },
  data(){
    return {
    //   list:[1,2,3,4,5,6,7,8,9,10,11,12],
    
    }
  },
  methods:{
   addCart(item){
       this.$store.dispatch('content/setflagModalWindow',true)
    //    this.$emit('addCart',item); 
      // this.item = item;
      // this.popupShow = true;
      this.$store.dispatch('content/setModalTitle',item)
    
   },
  
  },
  computed:{
    list(){
        return this.$store.getters["content/listArticles"]
    },
     getCategoryById(){
     console.log('ART getCAtByIdS',this.$store.getters["content/getCategoryById"]('1'));
      return this.$store.getters["content/getCategoryById"];
    }
    
    

  },
  beforeRouteEnter (to, from, next) {
    // this.$store.dispath('content/setArticles')
    
    next();
  }
  
  
}
</script>

<style lang="scss">
 .articles{
      
      display: flex;
      justify-content: content;
      flex-wrap: wrap;
      list-style: none;
      // margin: 0 auto;
      .article{
        height:200px;
        margin: 10px;
        width:calc(25% - 20px);
        font-size: 1.2rem;
        text-align: center;
        // line-height: 200px;
        box-sizing: border-box;
        padding: 20px;
        color:orange;
        background: #091e1dc2;
        transition: background .3s;
        cursor: pointer;
        &:hover{
          background: rgb(77, 81, 90);
        }
      }
    }
</style>

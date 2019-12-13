<template>
  
   
     
       
         <ul class="categories">
        <router-link class="category" v-for="item in list" @click="$store.dispatch('content/setCategory',item)" :to="{name:'category',params:{alias:item.alias}}"  tag="li" :key="item.id_category">
            {{item.name}}
        </router-link> 
      </ul>
      
       
</template>
   
      

<script>


export default {
  name: 'Category',
  
   
  methods:{
   addCart(item){
       this.$store.dispatch('content/setflagModalWindow',true)
    
      this.$store.dispatch('content/setModalTitle',item)
      // this.$store.dispatch('content/setThisIdCategory',item.id_category)
    
   },
   toPath(){}
   
  },
  computed:{
    list(){
        return this.$store.getters["content/listCategory"]
    },
    

  },
  
  
}
</script>

<style lang="scss">
 .categories{
      
      display: flex;
      justify-content: content;
      flex-wrap: wrap;
      list-style: none;
      // margin: 0 auto;
      .category{
        height:200px;
        margin: 10px;
        width:calc(25% - 20px);
        font-size: 1.2rem;
        text-align: center;
        line-height: 200px;
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

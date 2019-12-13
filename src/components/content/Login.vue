<template>
    <div class="form">
        <form action="">
            <text-field  :error="true"  name="test" :placeholder="'Name'">
            </text-field>
            <text-field  :error="false" name="test" :placeholder="'Password'" >
            </text-field>
           
            <custom-btn  :disabled="false"></custom-btn>
        </form>
        
           
        
       
    </div>
</template>
<script>

import TextFieldVue from '../test_components/TextField.vue';
import CustomButtomVue from '../test_components/CustomButtom.vue';


export default {
  name:'Login',
    components:{
        'text-field':TextFieldVue,
        'custom-btn':CustomButtomVue
    },
    data(){
        return {
          
            
        }
    },
    computed:{
        
    },
    methods:{
       
    }
}
</script>
<style lang="scss">
    .form{
       
        width:100%;
        
        
        
        form{
          position: fixed;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          max-width:400px;
          width:90%;
          background: #fff;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 10px;
        
        }
    }
</style>
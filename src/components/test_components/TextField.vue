<template>
    <div class="wrap_text">
        <div class="text_field" :data-placeholder="placeholder" >
        <input class="input-text" type="text" v-bind="$attrs" :value="value" v-on="getListeners" >
        <span class="icon">
            <transition name="fade" mode="out-in">
                <i class="fa fa-times-circle" aria-hidden="true" v-if="error" key="error"></i>
                <i class="fa fa-check-circle" aria-hidden="true" v-else key="not-error"></i>
            </transition>
            
        </span>
        <span class="bottom-line" :style="{'background':colorLine}"></span>
    </div>
    <p class="text-error">{{messageError}}</p>
    </div>
    
            
            
</template>


<script>

export default {
    name:'TextField',
    
    props:{
        value:{
            
        },
        
        messageError:{
            default:""
        },
        error:{
            type:Boolean,
            default:false
        },
        placeholder:{
            default:"Test text..."
        }
    },

    computed:{
        colorLine(){
            return this.error ? 'rgb(197, 15, 15)' : 'green';
        },
        getListeners(){
            return Object.assign({},this.$listeners,{
                input:(e) => {
                    this.$emit('input',e.target.value)
                }
            })
        }
    }
}
</script>

<style lang="scss" scope>
.wrap_text{
    

}
.text_field{
    position: relative;
   
    padding-right:50px;
    box-sizing: border-box;
    .bottom-line{
        
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        height: 1.5px;
        border-radius:22px;
        // background: rgb(61, 175, 109);
    }
    .input-text{
        display: block;
        outline: none;
        border:none;
        width:100%;
        padding: 20px 20px 10px 20px;
        box-sizing: border-box;
        color:#333;

        &::-webkit-input-placeholder {color:#777; opacity:1;}/* webkit */
        &::-moz-placeholder          {color:#777; opacity:1;}/* Firefox 19+ */
        &:-moz-placeholder           {color:#777; opacity:1;}/* Firefox 18- */
        &:-ms-input-placeholder      {color:#777; opacity:1;}/* IE */
    }

    &::before{
        content:attr(data-placeholder);
        display: block;
        position: absolute;
        top:0;
        left:0;
        width: 60%;
        font-size: .8rem;
        border-bottom:1px solid #777;
        color:#777;
        font-family: 'Tahoma',sans-serif;
    }

.icon{
    position: absolute;
    top:50%;
    right: 0%;
    transform: translateY(-50%);
    width:50px;
    line-height: 50px;
    text-align: center;
    height: 50px;
}
        
}
.fa-times-circle{
    color:rgb(197, 15, 15);
}
.fa-check-circle{
    color:rgb(27, 134, 27);
}
.text-error{
    color:rgb(221, 33, 33);
    font-size:0.75rem;
    padding: 5px;
    font-family: 'Tahoma',sans-serif;
    font-weight: 500;
}
    
</style>
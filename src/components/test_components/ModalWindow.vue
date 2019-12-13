<template>
    <transition mode="out-in" name="fade">
        <div key="fade"  class="background" @click="onClose()"  v-if="show">
            <transition mode="out-in" name="modalEffect">
                <div key="modalEffect" class="modal-window" :style="{'background':background}"   v-if="show" >
                    <span class="btn" @click="onClose()">
                        <i   class="fa fa-times" aria-hidden="true"></i>
                    </span>
                    <div class="image">
                        <img src="../../../src/assets/user.svg"  alt="">
                    </div>
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

                
                
                
               
            
    
       
        
<script>
    import "font-awesome/css/font-awesome.css"

    export default {
        name:"ModalWindow",
        props:['show','background'],
        methods:{
            onClose(){
                
                this.$emit('close')
            },
            onOpen(){
            
                }
                
        },
        computed:{
            
        },        

        data(){
            return {
                
                
                
               
            }
        },
       created(){
            // console.log(this.$slots.default)
        }
             

           
             
        
    }   
</script>
<style lang="scss" >
.image {
    // width: 100px;
    // height: 200px;
   
    img{
    display: block;
     margin: 0 auto;
    
    }
} 
    .background{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0,0,.6);
        z-index: 1000;

       .modal-window{
           position: fixed;
           z-index:inherit;
           top:50%;
           left:50%;
           transform: translate(-50%,-50%);
           padding: 10px;
           max-width:500px;
           min-width:280px;
           background: #fff;
           box-shadow: 1px 1px 2px rgba(0,0,0,.6);
           border-radius: 10px;
           .btn{
               position: absolute;
               top:2%;
               right:2%;
               cursor: pointer;
               .fa{
                    color: rgb(146, 136, 136);
               }

           }
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
////////////////////////////////////
    .modalEffect-enter{
		opacity: 0;
        transform:translateY(-100%);
	}

	.modalEffect-enter-active{
		transition: opacity 0.9s, transform 0.5s;
        transform:translateY(0%);
}

	.modalEffect-enter-to{
        // opacity: 1;
        //  transform:translateY(0%);
		
	}

	.modalEffect-leave{
		//  transform:translateY(0%);
	}

	.modalEffect-leave-active{
		transition: opacity 0.5s , transform 0.5s;
        
	}

	.modalEffect-leave-to{
		opacity: 0;
        transform:translateY(-100%);
	}
</style>    
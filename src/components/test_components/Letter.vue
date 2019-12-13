<template>
   
       <transition 
         appear
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="$emit('onShow')"
          
        @leave="leave"
        @before-leave="beforeLeave"
         >
           <div ref="letter" class="letter"  v-if="show" >
               <slot></slot>
           </div> 
        </transition>
         
         
        
         
         
  
       
   
</template>
        
<script>

    export default {
        name:"Letter",
        props:['show',"translate","number","rotate"],
        data(){
            return {
                left:0
            }
        },
        
        computed:{
            getTranslate(){
                return 'translate('+this.translate.x+','+this.translate.y+') rotate('+this.rotate+')';
            }
        },
        methods:{
            beforeEnter(el){
                this.$nextTick(() => {
                    
                    el.style.left = this.left+'px';
                    })
                el.style.transform = this.getTranslate;
            },
            enter(el, done){
                el.classList.add("transition");
                this.$nextTick(() => {
                    el.style.transform = 'translate(0px,0px) rotate(0)';
                    el.addEventListener('transitionend',() => {
                        
                        done();
                    })
                   
                })
            },
            beforeLeave(el){
               
                
            },
            leave(el,done){
               
                    

            },
                    
                

            setLeft(){
                 this.left = this.number * parseInt(getComputedStyle(this.$refs.letter)["font-size"].replace('px',''));
                
            }
        },
        mounted(){
           this.setLeft();
        }
        

    }
</script>
<style lang="scss">
    .letter{
    
    position: fixed;
    // padding: 5px;
    // background: rgb(129, 54, 54);
    // color:#fff;
}
   
    .transition{
        
       transition:  transform 1s;
    }
</style>

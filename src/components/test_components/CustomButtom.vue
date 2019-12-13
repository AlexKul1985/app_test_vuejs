<template>
    <span v-on = "getListeners" :style="{'background':getBackground,'color':color}" ref=btn class="button" @mousedown="animateClickBtn" >
        <slot>Отправить</slot>
    </span>

        
    
</template>
<script>

export default {
    name:'CustomButton',
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        background:{
            type: String,
            default:'rgba(44, 60, 146, 0.986)'
        },
        color:{
            type:String,
            default:'#fff'
        }
    },
    data(){
        return {
            btnDOM:null,
            widthBtn:null
        }
    },
    computed:{
        getBackground(){
            return this.disabled ? '#777' : this.background;
        },
        getListeners(){
            let listeners = {};
            
            if(!this.disabled)
                listeners = this.$listeners;
               

            return listeners;
        }
    },
    methods:{
        animateClickBtn(e){
             let el = document.createElement('span');

                        el.classList.add('anim');
                
                        let top = Math.abs(parseInt((this.btnDOM.getBoundingClientRect().top - e.clientY)));
                        let left = Math.abs(this.btnDOM.getBoundingClientRect().left - e.clientX);
                
                        el.style.left = left +'px';
                        el.style.top = top + 'px';
                        el.style.transform = 'translate(-50%,-50%)';
                    
                        

                        let widthC = left > 0 && left < this.widthBtn/3 ? 1.8*this.widthBtn : (left > 0.65*this.widthBtn) ? 1.8*this.widthBtn: this.widthBtn ;
            
                        window.requestAnimationFrame(() => {
                            el.style.width = widthC+'px';
                                el.style.height = widthC+'px';
                                el.style.opacity='0';
                                this.btnDOM.style.boxShadow = "2px 2px 7px rgba(0,0,0,.5)"
                                
                            });

                           let handler = () => {
                               this.btnDOM.removeChild(el)
                                
                                el.removeEventListener('transitionend',handler)
                            };
                            let handlerBtn = () => {
                                 this.btnDOM.style.boxShadow = "1px 1px 1px rgba(0,0,0,.5)"
                                
                                this.btnDOM.removeEventListener('transitionend',handlerBtn)
                            }
                                
                            el.addEventListener('transitionend',handler)
                            this.btnDOM.addEventListener('transitionend',handlerBtn)
                                
                            this.btnDOM.appendChild(el)
                                
                    }

    

           
            

        

    },
    mounted(){
        this.btnDOM = this.$refs.btn;  
        this.widthBtn = parseInt(getComputedStyle(this.btnDOM)['width'].replace('px',''));
        
      
    }
}
</script>
<style lang="scss">
.button{
     position: relative;
    display: inline-block;
    width:200px;
    height: 50px;
    // background:rgba(44, 60, 146, 0.986);
    cursor: pointer;
    // color:#fff;
    text-align: center;
    outline: none;
    border-radius: 4px;
    border: 0 none;
    line-height: 50px;
    overflow: hidden;
    // padding: 5px 10px;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    box-shadow:1px 1px 1px rgba(0,0,0,.5);
    transition: box-shadow .3s;
}
.anim{
   position: absolute;
    
    width: 0%;
    height: 0%;
    opacity: 1;
    background: rgb(163, 149, 149);
    
    border-radius: 100%;
    transition: width .3s, height .3s, opacity .3s;
}
    
</style>
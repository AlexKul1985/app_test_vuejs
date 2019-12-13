<template >

    <div id="menu" :style="{'background':background}">
      <transition name="fade" mode="out-in">
       <div class="menu">
        <div ref="animBtn" class="drawer_button" @click="animButton">
            <div class="line_top"></div>
            <div class="line_middle"></div>
            <div class="line_bottom"></div>  
        </div>
        <ul class="list" >
            <router-link tag="li" :to="item.path" class="list_item" v-for="item in list" :key="item.id">
                <a class="list_link" ref="linkMenu">
                     {{item.title}}
                </a>
            </router-link>
        </ul>
     </div>
    </transition>

       
    </div>   


    
</template>

<script>

import {eventEmitter} from '../../main'

export default {
  name: 'MenuComponent',
  components: {
    
  },
  props:['background','list'],
  
  data(){
      return{
          
          lineTop:null,
          lineBottom:null,
          lineMiddle:null,
      }
  },
  methods:{
      onClick(){
          console.log(111)
      },
      showEffectBtn(){
           
              this.lineTop.classList.remove('rotate_back')
              this.lineMiddle.classList.remove('back_line_middle')
              this.lineBottom.classList.remove('rotate_back')
              this.lineTop.classList.add('rotate_top')
              this.lineBottom.classList.add('rotate_bottom')
              this.lineMiddle.classList.add('move_line_middle')
      },
      hideEffectBtn(){
           

              this.lineTop.classList.remove('rotate_top')
              this.lineBottom.classList.remove('rotate_bottom')
              this.lineMiddle.classList.remove('move_line_middle')
              this.lineTop.classList.add('rotate_back')
              this.lineBottom.classList.add('rotate_back')
              this.lineBottom.classList.add('rotate_back')
              this.lineMiddle.classList.add('back_line_middle')
      },
      animButton(){
        //   console.log(111)
          if(this.lineTop.classList.contains ("rotate_top")){
              this.$emit('clickButton',false)
              this.hideEffectBtn();
          } 
          else{
              this.$emit('clickButton',true)
              this.showEffectBtn();
          }
        
      },
      animateClickBtn(e,linkEl,linkWidth){
             let el = document.createElement('span');
                
                        el.classList.add('anim');
                
                        let top = Math.abs(parseInt((linkEl.getBoundingClientRect().top - e.clientY)));
                        let left = Math.abs(linkEl.getBoundingClientRect().left - e.clientX);
                
                        el.style.left = left +'px';
                        el.style.top = top + 'px';
                        el.style.transform = 'translate(-50%,-50%)';
                    
                        

                        let widthC =  2*linkWidth;
            
                        window.requestAnimationFrame(() => {
                            el.style.width = widthC+'px';
                                el.style.height = widthC+'px';
                                el.style.opacity='0';
                                
                            });
                           let handler = () => {
                               linkEl.removeChild(el)
                                
                                el.removeEventListener('transitionend',handler)
                            };
                                
                            el.addEventListener('transitionend',handler)
                                
                            linkEl.appendChild(el)
                                
                    }
  },
  mounted(){
      
      let animBtn = this.$refs.animBtn;
      let linksMenu = this.$refs.linkMenu;
      
      linksMenu.forEach(element => {
          element.addEventListener('click',(e) => {
              let elementWidth =  parseInt(getComputedStyle(element)['width'].replace('px',''));
              
              this.animateClickBtn(e,element,elementWidth);
          })
      });  
      this.lineTop = animBtn.children[0];
      this.lineMiddle = animBtn.children[1];
      this.lineBottom = animBtn.children[2];
  },
  created(){
    eventEmitter.$on('changeEffectMenu',() => {
        this.hideEffectBtn();
    })
  }
}
</script>

<style lang="scss" >
#menu{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    // background: brown;
    margin: 0;
    z-index: 1000;
    .menu{
        width: 100%;
        height: 100%;
    }
    .list{
        // position: static;
       list-style: none;
    //    display: flex;
    //    justify-content: flex-end;
    //    flex-wrap: wrap;
        text-align: right;
       height: 70px;
    //    align-items:stretch;
       margin-right: 15px;
         &_link{
           position: relative;
           display: block;
           height: 100%;
           color:orange;
           padding: 0 .85rem;
        //    text-align: center;
           line-height: 70px;
           text-decoration: none;
           outline:none;
           text-transform: uppercase;
           overflow: hidden;
       }
       &_link:hover{
        //    background: rgba(9, 9, 82, 1);
       }
       .list_item{
           display: inline-block;
           
       }
    //    &_link::after{
    //     content: "";
    //     display: block;
    //     position:absolute;
    //     left: 0;
    //     right: 0;
        
        
    //     bottom: 0;
    //     height: 5px;
    //     background: transparent;
        
    //    }
      
    //    &_link:hover::after{
    //        background: rgb(4, 65, 80);
    //    }
    //    &_link:active::after{
    //        background: rgb(25, 87, 51);
    //    }
   
   }
   .drawer_button{
       position: absolute;
       width:60px;
       height: 60px;
       background: rgb(57, 68, 75); 
       top:50%;
       left:2%;
       transform: translateY(-50%);
       border-radius: 50%;
       cursor: pointer;
       .line_top{
           position: absolute;
           width:70%;
           height: 3px;
           background: orange;
           top:17px;
           left:50%;
           transform-origin: left center;
           transform:rotate(0deg) translateX(-50%);
           transition: transform .2s ease-out, width .2s ease-out;
       }
       .rotate_top{
          transform:rotate(-45deg) translateX(-90%);
          width: 30%;
       }
     
        
       .line_middle{
           position: absolute;
           width:70%;
           height: 3px;
           background: orange;
           top:29px;
           left:50%;
           transform: translateX(-50%);
           transition: transform .2s ease-out;
       }
       .move_line_middle{
            transform: translateX(-30%);
       }
       .back_line_middle{
           transform: translateX(-50%);
       }
       .line_bottom{
           position: absolute;
           width:70%;
           height: 3px;
           background: orange;
           top:41px;
           left:50%;
           transform-origin: left center;
           transform: translateX(-50%);
            transition: transform .2s ease-out,width .2s ease-out;
       }
         .rotate_bottom{
          transform:rotate(45deg) translateX(-90%);
          width: 30%;
       }
       .rotate_back{
          transform:rotate(0deg) translateX(-50%);
       }
   }
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

import Categories from './components/content/Categories.vue'
import Articles from './components/content/Articles.vue'
import Category from './components/content/Category.vue'
import Article from './components/content/Article.vue'
import Main from './components/content/Main.vue'
import Login from './components/content/Login.vue'
import Reg from './components/content/Reg.vue'
import { store } from './store/store';

export const routes = [
    {
        path:'',
        component:Main
    },
    {
        path:'/categories',
        component:Categories,
        // beforeEnter(to, from, next){
            
        //  store.dispatch('content/setCategories')
        //  .then((d) => next(d))
        //  .catch((e) => console.log(e.message))
  
            
        // }
        
    },
    {
        path:'/articles',
        component:Articles,
        // beforeEnter(to, from, next){
        // store.dispatch('content/setArticles').
        // then((d) => {

        //     next(d);
        // })
        // .catch((e) => console.log(e.message))
           
        // }
    },
    {
        path:':alias',
        component:Category,
        name:'category',
        // props:true
    },
       
    {
        
        path:'/:alias/:alias_art',
        component:Article,
        name:'cat_art',
    },
       
    
        
    // {
    //     path:'/:alias/:alias_art',
    //     component:Article,
    //     name:'article',
        
    // },
    {
        path:'/login',
        component:Login,
        name:'login'
    },
    {
        path:'/reg',
        component:Reg
    },

];
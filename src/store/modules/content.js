export const content = {
    namespaced: true,
    state:{
        listCategory: [],
        listArticles: [],
        showModalWindow:false,
        categoryInfo:{},
        modalTitle:0
    },
    getters:{
        listCategory(state){
            return state.listCategory;
        },
        showModalWindow(state){
            return state.showModalWindow;
        },
        modalTitle(state){
            return state.modalTitle != 0 ? state.modalTitle + "-й товар" : "";
        },
        listArticles(state){
            return state.listArticles
        },
        categoryInfo(state){
            return state.categoryInfo;
        },
        mapCategory(state){
            let map = new Map();
            for(let i = 0; i < state.listCategory.length; i++){
                let category = state.listCategory[i];
                map.set(category.alias,category);
            }
            // console.log(map);
            return map;
        },
        mapCategoryById(state){
            let map = new Map();
            for(let i = 0; i < state.listCategory.length; i++){
                let category = state.listCategory[i];
                map.set(category.id_category,category);
            }
            // console.log(map);
            return map;
        },
        getCategoryToAlias:(state,getters) => {
            return (alias) => {
                return getters.mapCategory.get(alias);
            }
        },
        getCategoryById:(state,getters) => {
            return (id) => {
                return getters.mapCategoryById.get(id);
               
            }
        },
        mapArticles(state){
            
                let map = new Map();
                for(let i = 0; i < state.listArticles.length; i++){
                    let article = state.listArticles[i];
                    map.set(article.alias_art,article);
                }
                // console.log(map);
                return map;
            
           
        },
        getArticleToAlias:(state,getters) => {
            return (alias) => {
                return getters.mapArticles.get(alias);
            }
        },
        mapArticlesFromCategory(state){
            
                let map = new Map();
            for(let i = 0; i < state.listArticles.length; i++){
                let id_category = state.listArticles[i].id_category;
                if(!(map.has(id_category))){
                    map.set(id_category,[]);
                
                }
                map.get(id_category).push(state.listArticles[i])
            }
                // console.log('map',map)
                return map; 
            
            
        },
        getArticlesToIdCategory:(state,getters) => {
            return (id) => {
                // console.log('ID', getters.mapArticlesFromCategory.get(id))
                return getters.mapArticlesFromCategory.get(id);
                
            }
        },        
        
    },
                
                
            // console.log(map);
                

    mutations:{
        setflagModalWindow(state,payload){
            state.showModalWindow = payload;
        },
        setModalTitle(state,payload){
            state.modalTitle = payload;
        },
        setCategory(state,payload){
            state.categoryInfo = payload;
        },
        setCategories(state,payload){
                state.listCategory = payload;
        },
        setArticles(state,payload){
            state.listArticles = payload;
        },

        // setThisIdCategory(state,payload){
        //     state.categoryInfo = payload;
        // }

    },
    actions:{
        setflagModalWindow(store, payload){
            store.commit('setflagModalWindow',payload);
        },
        setModalTitle(store,payload){
            store.commit('setModalTitle',payload);
        },
        setCategory(store,payload){
            store.commit('setCategory',payload);
        },
        async setCategories(store){
            try{
                var response = await fetch('http://test_nginx.local/api/categories', {
                method:'POST',
                body:JSON.stringify({
                    "name":"Alex",
                    "age":34
                }),
                headers:{
                    'Content-Type':'application/json'
                },
                mode:"cors"
            })
            
            if(response.status !== 200){
                
                throw new Error("Неизвестная ошибка! - "+ response.status);
            }
            else{
                let data = await response.json();
                // console.log(data);
                // if(!localStorage.getItem('x-access-token')){

                    localStorage.setItem('x-access-token',data['x-access-token'])
                    
                // }
                    
                // store.commit('setCategories',data)
                return true  
            }
            } catch(e){
                // e.message = "Неизвестная ошибка!"
                throw e;
            }
           
         
        },
                
           
        //http://test_nginx.local/main/products
        async setArticles(store){
            
            try{
                let response = await fetch('http://test_nginx.local/api/articles', {
                method:'GET',
                headers:{
                    "Authorized":localStorage.getItem('x-access-token')
                }
            })
            // if(response.status !== 200){
            //     throw new Error("Неизвестная ошибка!");
            // }
           if(response.status == 401){
                // console.log('Refresh token gen')
                let err = new Error('Refresh token gen');
                throw err;
            }
            else if(response.status !== 200){
                let err = new Error('Unknown Error!');
                throw err;

            }
            else{
                let data = await response.json();
                
                // store.commit('setArticles',data)
                return data  
            }
                
        
            } catch(e){
                // e.message = "Неизвестная ошибка!"
                throw e;
            }
        },
            
            
                
                
            

            
    }
}

function getListCategory(){
    return [
        {
            id_category:1,
            name:'JavaScript',
            alias:'javascript'
        },
        {
            id_category:2,
            name:'PHP',
            alias:'php'
        },
        {
            id_category:3,
            name:'HTML',
            alias:'html'
        },
        {
            id_category:4,
            name:'CSS',
            alias:'css'
        },
        {
            id_category:5,
            name:'Linux',
            alias:'linux'
        },
    ];
}

function getListArticle(){
    return [
        {
            id_article:1,
            name:'Полезность функции Map',
            alias_art:'map',
            id_category:1,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
        {
            id_article:2,
            name:'Реактивность? Что это? Пример!',
            alias_art:'reactive',
            id_category:1,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
        {
            id_article:3,
            name:'Полезность HTML5',
            alias_art:'html5',
            id_category:3,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
        {
            id_article:4,
            name:'Фон для сайта background и все его возможности!',
            alias_art:'background',
            id_category:4,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
        {
            id_article:5,
            name:'Linux это безопасность!',
            alias_art:'secure',
            id_category:5,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
        {
            id_article:6,
            name:'PHP внутри!',
            alias_art:'innerphp',
            id_category:2,
            text:'Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.'
        },
    ];
}
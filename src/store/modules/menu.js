export const menu = {
    namespaced: true,
    state:{
        list:[
            {
                id:1,
                title:'CATEGORiES',
                icon:"fa-book",
                path:'/categories'
            },
            {
                id:2,
                title:'ARTICLES',
                icon:'fa-align-justify',
                path:'/articles'
            },
            {
                id:3,
                title:'LOGIN',
                icon:'fa-sign-in',
                path:'/login'
            },
            {
                id:4,
                title:'LOGOUT',
                icon:'fa-sign-out',
                path:'/categories'
            },
            {
                id:5,
                title:'REGISTER',
                icon:'fa-lock',
                path:'/reg'
            }
                
        ]
    },
    getters:{
        list(state){
            return state.list
        }
    },
    mutations:{
        setList(state,payload){
            state.list = payload
        }
    },
    actions:{
        setList(store,payload){
            store.commmit('setList',payload)
        }
    }
}
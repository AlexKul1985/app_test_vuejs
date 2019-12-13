export const drawer = {
    namespaced: true,
    state:{
        show:false
    },
    getters:{
        show(state){
            return state.show;
        }

    },
    mutations:{
        setShow(state, payload){
            state.show = payload;
        }
    },
    actions:{
        setShow(store,payload){
            store.commit('setShow',payload)
        }
    }
}
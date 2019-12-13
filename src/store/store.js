import Vue from 'vue'
import Vuex from 'vuex'
import {drawer} from './modules/drawer'
import {menu} from './modules/menu'
import {content} from './modules/content'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        drawer,
        menu,
        content
    }
})


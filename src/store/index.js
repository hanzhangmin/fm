// import createPersistedState from 'vuex-persistedstate'
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        playId: 1,
        playstate: localStorage.getItem("playstate") || false,
        audioSrc: localStorage.getItem("audioSrc"),
        imgSrc: localStorage.getItem("imgSrc")
    },
    mutations: {
        changeAudioSrc(state, id, audiosrc, imgsrc) {
            // 变更状态
            state.playId = id
            state.audioSrc = audiosrc
            state.imgSrc = imgsrc
        },
        changPlay(state, value) {
            state.playstate = value
        },
    },

})

export default store
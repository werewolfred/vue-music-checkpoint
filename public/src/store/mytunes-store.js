import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

//var production = !window.location.host.includes('localhost');
//var baseUrl = production ? '//vue-music-werewolfred.herokuapp.com/api/playlist' : '//localhost:3000/api/playlist';


vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    songslist: []
  },
  mutations: {
    setResults(state, results) {
      state.songslist = results
      console.log(results)
    },
    setMyTunes(state, Mytunes) {
      state.myTunes = Mytunes

    },
     addSong(state, song) {
       state.myTunes.push(song);
       console.log(state.myTunes)
     },
    // removeTrack(state, song) {
    //   var index = state.myTunes.indexOf(song);
    //   state.myTunes.splice(index, 1);
    // },
    // promoteTrack(state, song) {
    //   var index = state.myTunes.indexOf(song)
    //   state.myTunes.splice((index - 1), 2, song, state.myTunes[index - 1])

    // },
    // demoteTrack(state, song) {
    //   var index = state.myTunes.indexOf(song);
    //   state.myTunes.splice((index), 2, state.myTunes[index + 1], song)
    // },
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {
        commit('setResults', data.results)
      })
    },
    getMyTunes({ commit, dispatch }) {
      commit('setMyTunes', data)
      //this should send a get request to your server to return the list of saved tunes
      $.getJSON(apiUrl).then(data =>{
        commit('setResults', data.results)
      })
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
       //$.post("//localhost:3000/api/music", song).then((res)=>{
       // $.post(baseUrl, song).then((res)=>{  
      //dispatch('getMyTunes')
      //})
      //.fail(data=>{
       // console.log(data)
      //})
      commit('addSong', song);
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete

    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store

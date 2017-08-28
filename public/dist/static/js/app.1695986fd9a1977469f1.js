webpackJsonp([0],[,function(t,s,e){"use strict";var n=e(2),i=e(22),o=e(14),a=e.n(o);n.a.use(i.a);var r=new i.a.Store({state:{myTunes:[],songslist:[]},mutations:{setResults:function(t,s){t.songslist=s,console.log(s)},setMyTunes:function(t,s){t.myTunes=s},addSong:function(t,s){t.myTunes.push(s),console.log(t.myTunes)}},actions:{getMusicByArtist:function(t,s){var e=t.commit,n=(t.dispatch,"https://itunes.apple.com/search?term="+s),i="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(n);a.a.getJSON(i).then(function(t){e("setResults",t.results)})},getMyTunes:function(t){var s=t.commit;t.dispatch;s("setMyTunes",data),a.a.getJSON(apiUrl).then(function(t){s("setResults",t.results)})},addToMyTunes:function(t,s){var e=t.commit;t.dispatch;e("addSong",song)},removeTrack:function(t,s){t.commit,t.dispatch},promoteTrack:function(t,s){t.commit,t.dispatch},demoteTrack:function(t,s){t.commit,t.dispatch}}});s.a=r},,function(t,s,e){e(13);var n=e(0)(e(8),e(20),null,null);t.exports=n.exports},function(t,s,e){e(10);var n=e(0)(e(5),e(17),null,null);t.exports=n.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(15),i=e.n(n),o=e(3),a=e.n(o);s.default={name:"app",components:{Home:i.a,Mytunes:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=(e(1),e(16)),i=e.n(n),o=e(3),a=e.n(o);s.default={name:"home",data:function(){return{}},components:{Itunes:i.a,Mytunes:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Itunes",data:function(){return{artist:""}},methods:{search:function(){this.$store.dispatch("getMusicByArtist",this.artist)},addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)}},computed:{songslist:function(){return this.$store.state.songslist},songs:function(){return this.$store.state.results.results}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"mytunes",data:function(){return{name:"artistName"}},mounted:function(){this.$store.dispatch("getMytunes")},methods:{},action:{},computed:{songslist:function(t){return this.$store.state.songslist}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(2),i=e(4),o=e.n(i),a=e(1);new n.a({el:"#app",template:"<App/>",store:a.a,components:{App:o.a}})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){e(12);var n=e(0)(e(6),e(19),null,null);t.exports=n.exports},function(t,s,e){e(11);var n=e(0)(e(7),e(18),null,null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("Home")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"itunes"},[e("h1",[t._v("Itunes")]),t._v(" "),e("div",{staticClass:"search"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.search()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])])]),t._v(" "),e("div",{staticClass:"row",attrs:{id:"song-list"}},t._l(t.songslist,function(s){return e("div",[e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Title: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.trackName))])]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h3",[t._v("Album Art: ")]),t._v(" "),e("img",{attrs:{src:s.artworkUrl100}})]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h3",[t._v("Artist: ")]),t._v(" "),e("p",[t._v(t._s(s.artistName))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Collection: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.collectionName))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Price: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.trackPrice))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Preview: ")]),t._v(" "),e("p",[t._v(t._s(s.preview))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("button",{on:{click:function(e){t.addToMyTunes(s)}}},[t._v("Add to Mytunes")])])])}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("mytunes"),t._v(" "),e("itunes")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",attrs:{id:"song-list"}},[e("h1",[t._v("Mytunes")]),t._v(" "),t._l(t.songslist,function(s){return e("div",[e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Title: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.trackName))])]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h3",[t._v("Album Art: ")]),t._v(" "),e("img",{attrs:{src:s.artworkUrl100}})]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h3",[t._v("Artist: ")]),t._v(" "),e("p",[t._v(t._s(s.artistName))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Collection: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.collectionName))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Price: ")]),t._v(" "),e("p",[t._v(" "+t._s(s.trackPrice))])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Preview: ")]),t._v(" "),e("p",[t._v(t._s(s.previewUrl))])]),t._v(" "),e("div",{staticClass:"col-xs-12"})])})],2)},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.1695986fd9a1977469f1.js.map
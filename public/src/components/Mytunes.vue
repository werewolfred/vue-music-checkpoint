<template>
    <div id="song-list" class="row">
            <h1>Mytunes</h1>
        <div v-for="song in songslist">

            <div class="col-xs-12">
                <h3>Title: </h3>
                <p> {{song.trackName}}</p>
                <!--TODO: LOOK AT VUE CONSOLE AND MATCH NAMES OF PROPERTIES TO OBKECTS EX.SONG.TRACKNAME AND SONG.ARTISTNAME-->
            </div>
            <div class="col-xs-6">
                <h3>Album Art: </h3>

                <img :src="song.artworkUrl100">
            </div>
            <div class="col-xs-6">
                <h3>Artist: </h3>
                <p>{{song.artistName}}</p>
            </div>
            <div class="col-xs-12">
                <h3>Collection: </h3>
                <p> {{song.collectionName}}</p>
            </div>
            <div class="col-xs-12">
                <h3>Price: </h3>
                <p> {{song.trackPrice}}</p>
            </div>
            <div class="col-xs-12">
                <h3>Preview: </h3>
                <p>{{song.preview}}</p>
            </div>
            <div class="col-xs-12">
                <button @:click="addToMyTunes(song)">Add to Mytunes</button>
            </div>
        </div>
    </div>


</template>
<script>
    export default {
        name: 'mytunes',
        data() {
            return {
                name: 'artistName'
            }
        },
        mounted(){
            this.$store.dispatch('getMytunes')
        },
        methods: {
            
        },
        action: {

        },
        computed: {
            songslist(song) {
                return this.$store.state.songslist
            },
        }
    }

</script>
<style>

</style>
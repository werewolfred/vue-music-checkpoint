<template>
    <div class="itunes">
        <h1>Itunes</h1>
        <div class="search">
            <form class="form-inline" @submit.prevent="search()">
                <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Artist Name" v-model="artist" />
                    <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
                </div>
            </form>
        </div>
        <div id="song-list" class="row">
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
                    <button @click="addToMyTunes(song)">Add to Mytunes</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'Itunes',
        data() {
            return {
                artist: ''

            }
        },
        methods: {
            search() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            // getMyTunes() {
            //     this.$store.dispatch('getMyTunes')
            // },
            addToMyTunes(song) {
                // var newSong = {
                //     artistName: song.artistName,
                //     trackName: song.trackName,
                //     trackPrice: song.trackPrice,
                //     artworkUrl100: song.artworkUrl100,
                //     collectionName: song.collectionName,
                //     previewUrl: song.previewUrl
                // }
                this.$store.dispatch("addToMyTunes", song)
            }
        },

        computed: {
            songslist() {
                return this.$store.state.songslist
            },
            songs() {
                return this.$store.state.results.results
            }
        }

    }

</script>
<style>

</style>
<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
  <mytunes></mytunes>
  <itunes></itunes>
  </div>
  </div>
</template>

<script>
import { store } from '../store/mytunes-store' 
import Itunes from './Itunes'
import Mytunes from './Mytunes'

export default {
  name: 'home',
  
  data () {
    return {
                      
    }
  },
  components:{
    Itunes,
    Mytunes

  }

}
</script>


<style>
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: green;
}

.itunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 45%;
}

</style>

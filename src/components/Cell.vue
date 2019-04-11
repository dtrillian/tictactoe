<template>
  <div class="grid__cell" @click="placePawn">{{pawn}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cell',
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      busy: false,
      pawn: '',
    }
  },
  computed: {
    ...mapGetters(['currentPlayer', 'grid']),
  },
  methods: {
    placePawn () {
      if (!this.busy) {
        this.pawn = this.currentPlayer;
        this.busy = true;
        this.$store.dispatch('PLACE_PAWN', this.number)
      }
    }
  },
  mounted() {
    this.pawn = this.grid[this.number]
  }
}
</script>

<style lang="scss">
  @import '../styles/global';

  .grid__cell {
    display: grid;
    align-content: center;
    justify-content: center;

    font-family: 'Fredoka One', cursive;
    font-weight: bold;
    font-size: 5em;
    color: white;
    background-color: $board-color;
    cursor: $cursor;
  }
</style>

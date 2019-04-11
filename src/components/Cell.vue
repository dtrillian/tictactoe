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
    }
  },
  computed: {
    ...mapGetters(['currentPlayer', 'grid']),
    pawn: {
      get() {
        return this.grid[this.number]
      },
      set(value) {
        this.$set(this.grid, this.number, this.currentPlayer)
        this.$store.dispatch('PLACE_PAWN', this.number, value)
      }
    }
  },
  methods: {
    placePawn () {
      if (this.grid[this.number] === '') {
        this.pawn = this.currentPlayer;
      }
    }
  },
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

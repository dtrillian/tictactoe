<template>
  <div class="grid__cell" @click="placePawn">
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  methods: {
    placePawn () {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
  @import '../styles/global';

  .grid__cell {
    color: white;
    background-color: $board-color;
    cursor: $cursor;
  }
</style>

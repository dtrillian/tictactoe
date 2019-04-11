<template>
  <div class="grid">
    <Cell v-for="n in 9" v-bind:key="n" :number="n - 1"></Cell>
  </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
  name: 'Grid',
  components: {
    Cell
  },
  data () {
    return {
      n: 1,
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/global';

  .grid {
    display: grid;

    width: 500px;
    height: 500px;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;

    overflow: hidden;

    margin: 40px auto;
    border-radius: 15px;
  }
</style>

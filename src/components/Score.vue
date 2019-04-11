<template>
  <div class="score">
    <div class="score__player">
      <span>Player X </span>
      <span>{{wins.X}}</span>
    </div>
    <div class="score__player">
      <span>Player O </span>
      <span>{{wins.O}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Score',
  computed: {
    ...mapGetters(['wins']),
  },
  data() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../styles/global';

  .score {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 100%;
    background-color: $color2;
    padding: .5em;
    border-radius: 5px;
    font-size: 1.5em;
    color: white;

    .score__player > span {
      display: inline-block;

      &:nth-of-type(2) {
        font-weight: 600;
        font-size: 1.8em;
      }
    }

    .score__player {
      display: inline-block;
      font-weight: 400;
      line-height: 1.8em;
      display: grid;
      grid-template-columns: auto minmax(1.8em, 1fr);
      grid-gap: 10px;
      align-items: center;
    }
  }

</style>

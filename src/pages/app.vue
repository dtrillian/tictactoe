<template>
  <div class="global-container">
    <Menu></Menu>
    <div class="tictactoe-wrapper">
      <Score></Score>
      <Grid></Grid>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '../components/Menu'
import Grid from '../components/Grid'
import Score from '../components/Score'
// import Warning from '../components/Warning'

export default Vue.extend({
  name: 'App',
  components: {
    Menu,
    Grid,
    Score,
    // Warning,
  },
  data() {
    return {
      winsConditions: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
})
</script>

<style lang="scss">
.global-container {
  margin: 0;
  padding: 0;
}

.tictactoe-wrapper {
  box-sizing: border-box;
  width: 668px;
  margin: 50px auto 0;

  @media screen and (max-width: 668px) {
    max-width: 100%;
  }
}
</style>

<template>
  <div class="global-container">
    <Menu></Menu>
    <div class="tictactoe-wrapper">
      test
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '../components/Menu'

export default Vue.extend({
  name: 'App',
  components: {
    Menu,
  },
  data() {
    return {
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

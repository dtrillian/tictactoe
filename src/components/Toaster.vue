import { mapGetters } from 'Vuex';
<template>
  <div class="toaster" v-bind:class="{ 'visible': toaster }">
    <div class="toaster__message">
      {{message}}
    </div>
    <div class="toaster__action" v-if="action">
      <a @click="nextTurn()" class="toaster__action-btn">Next Turn!</a>
      <a @click="resetTurns()" class="toaster__action-btn">Reset Turns</a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Toaster',
    props: {
      toaster: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      nextTurn() {
        this.$store.dispatch('NEXT_GAME');
      },
      resetTurns() {
        this.$store.dispatch('RESET_GAME');
      }
    },
    computed: {
      ...mapGetters(['currentPlayer', 'gameDraw', 'gameWon', 'busyCell']),
      message() {
        if (this.gameDraw) {
          return 'Égalité !'
        }

        if (this.gameWon) {
          return `Player ${this.currentPlayer} won!`
        }
      },
      action() {
        if (this.gameDraw || this.gameWon) {
          return true
        }
        return false
      }
    },
    mounted() {
    }

  }
</script>

<style lang="scss" scoped>
  @import '../styles/global';

  .toaster {
    display: block;
    position: absolute;
    min-width: 400px;
    text-align: center;
    max-width: 80%;
    padding: 2em 1em;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #46ACC2;
    color: white;
    font-size: 1.5em;

    border-radius: 5px;

    visibility: hidden;
    opacity: 0;
    transition: transform 250ms ease-in, opacity 250ms ease-in;
    transform-origin: center center;

    &.visible {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      transform: translate(-50%, -50%) scale(1.02);
    }
  }

  .toaster__message {
    width: 100%;
    margin-bottom: 40px;
    font-size: 1.5em;
  }

  .toaster__action {
    .toaster__action-btn {
      font-weight: 600;
      border: 2px solid white;
      border-radius: 10px;
      padding: .5em;
      margin: 0 5px;
      cursor: $cursor;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>

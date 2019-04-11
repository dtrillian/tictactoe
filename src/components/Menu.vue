<template>
  <div v-if="!animCompleted" @click="fadeOut" class="menu">
    <div class="logo">
      <span class="logo__word">Tic</span>
      <span class="logo__word">Tac</span>
      <span class="logo__word">Toe</span>
    </div>
    <div class="choices">
      <a @click="fadeOut" class="choices__btn"> &rsaquo; Play</a>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Menu',
  data: () => ({
    animCompleted: false,
  }),
  mounted() {
    // Defining animation of the logo once the component is mounted
    anime({
      targets: '.logo__word',
      translateX: ['-50%', 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      delay: anime.stagger(100, {start: 500})
    })

    anime({
      targets: '.choices__btn',
      translateX: ['-50%', 0],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      delay: anime.stagger(100, {start: 1500})
    })
  },
  methods: {
    fadeOut() {
      // Undo other animations first
      ['.logo-word'].forEach(elem => {
        anime.remove(elem)
      })

      // Fading out the menu screen
      anime({
        targets: '.menu',
        opacity: [1, 0],
        visibility: 'hidden',
        duration: 500,
        complete: anim => {
          if (anim.completed) {
            this.animCompleted = true
          }
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import '../styles/global';

.menu {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: $main-bg-color;
}

.logo {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 100px;

  text-align: center;

  font-size: 3em;
  font-weight: 600;
  color: black;
}

.logo, .choices__btn {
  cursor: $cursor;
}

.logo__word {
  display: inline-block;
  margin-right: 5px;
}

.choices {
  position: absolute;
  top: calc(50% + 20px);
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2em;
}

.choices__btn {
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 0.5s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
}

</style>

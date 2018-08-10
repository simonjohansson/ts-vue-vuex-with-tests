<template>
  <div class="home">
    <div class="left">
      <Todos />
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todos from '@/components/Todos.vue';
import Stats from '@/components/Stats.vue';

@Component({
  components: {
    Todos,
    Stats,
  },
})
export default class Home extends Vue {}
</script>

<style>
  html, #app, .home {
    height: 100%;
  }

  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  .home {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas: "left right";
    height: 100%;

  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }



</style>


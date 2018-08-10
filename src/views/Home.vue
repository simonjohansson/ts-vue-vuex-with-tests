<template>
  <div class="home">
    <Links />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Links from '@/components/Links.vue'; // @ is an alias to /src

@Component({
  components: {
    Links,
  },
})
export default class Home extends Vue {}
</script>

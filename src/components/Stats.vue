<template>
  <div>
    <h1>A different component</h1>
    <p>There are currently {{ countLinks }} links</p>

    <button v-on:click="removeAllLinks" class="rmAll" >Remove all links</button>
    <p>{{msg}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Action } from '@/store';

@Component({
    computed: mapGetters(['countLinks']),
})
export default class Stats extends Vue {
    private msg: string = '';

    private removeAllLinks = () => this.$store.dispatch<Action>({type: 'removeAll'});
}
</script>

<style>
    .rmAll {
        padding: 10px;
        margin-top: 30px;
        width: 100%;
        background: none;
        border: 1px solid lightgray;
        outline: 0;
        cursor: pointer;
    }
</style>

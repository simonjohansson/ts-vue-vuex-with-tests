<template>
  <div>
    <p>There are currently {{ countTodos }}. Out of these {{ countDone }} are done</p>

    <button v-on:click="removeAllTodos" class="rmAll" >Remove all todos</button>

    <button v-if="countDone > 0" v-on:click="removeAllDone" class="rmAll"> Remove all done todos </button>

    <p>{{msg}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Action } from '@/store';

@Component({
    computed: mapGetters(['countTodos', 'countDone']),
})
export default class Stats extends Vue {
    private msg: string = '';

    private removeAllTodos = () => this.$store.dispatch<Action>({type: 'removeAll'});

    private removeAllDone = () => this.$store.dispatch<Action>({type: 'removeAllDone'});
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

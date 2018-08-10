<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ countLinks }} links</p>

    <button v-on:click="removeAllLinks" class="rmAll" >Remove all links</button>
    <p>{{msg}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapMutations, mapActions } from 'vuex';

@Component({
    computed: mapGetters(['countLinks']),
    methods: {
        ...mapMutations(['REMOVE_ALL']),
        ...mapActions(['removeAll']),
    },
})
export default class Stats extends Vue {
    private msg: string = '';

    private removeAllLinks() {
        this.removeAll().then(() => {
            this.msg = 'All links have been removed';
        });
    }

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

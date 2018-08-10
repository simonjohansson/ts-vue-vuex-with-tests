<template>
  <div>
    <h1>{{ title }}</h1>

    <form @submit.prevent="saveLink">
      <input class="link input" type="text" placeholder="Add a link" v-model="newLink" />
    </form>

    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">
        {{link}}
        <button v-on:click="rmLink(index)" class="rm">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from '@/store';

@Component({
  computed: mapState(['links', 'title']),
})
export default class Links extends Vue {
  private newLink: string = '';

  private saveLink() {
    this.$store.dispatch<Action>({type: 'addLink', link: this.newLink});
    this.newLink = '';
  }

  private rmLink = (index: number) => this.$store.dispatch<Action>({type: 'removeLink', index});
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

   input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>

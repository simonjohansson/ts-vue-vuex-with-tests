<template>
  <div>
    <h1>{{ title }}</h1>

    <form @submit.prevent="saveTodo">
      <input class="todo input" type="text" placeholder="Add a todo" v-model="newTodo" />
    </form>

    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index" v-on:click="toggleDone(index)">
        <span :class="{ 'done' : todo.done }">{{todo.todo}}</span>
        <button v-on:click="rmTodo(index)" class="rm">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from '@/store';

@Component({
  computed: mapState(['todos', 'title']),
})
export default class Todos extends Vue {
  private newTodo: string = '';

  private saveTodo() {
    this.$store.dispatch<Action>({type: 'addTodo', todo: this.newTodo});
    this.newTodo = '';
  }

  private rmTodo = (index: number) => this.$store.dispatch<Action>({type: 'removeTodo', index});
  private toggleDone = (index: number) => this.$store.dispatch<Action>({type: 'toggleTodo', index});

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

  .done {
    text-decoration: line-through;
  }

</style>

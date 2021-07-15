<template>
  <div class="todo-container">
    <h2>Todo List</h2>
    <!-- document.querySelector 이용 방법 -->
<!--    <form class="input-todo-form">-->
<!--      <input type="text" class="input-todo" placeholder="enter to add1"/>-->
<!--      <button type="submit" @click="directAddTodo">직접저장</button>-->
<!--    </form>-->

    <!-- local storage 이용 방법 -->
    <input type="text" class="input-todo" v-model="newTodoItem" placeholder="enter to add2"/>
    <button v-on:click="addTodo">저장</button>

    <ul>
      <li class="todo-item" v-for="(todo, index) in todos" v-bind:key="index">
        <p class="text">{{todo.text}}</p>
        <button v-if="todo.completed" @click="compeleteTodo(index)" class="complete completed">Complete</button>
        <button v-else @click="compeleteTodo(index)" class="complete">Complete</button>
        <button @click="deleteTodo(index)" class="delete">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // local storage를 이용해 add 하기
    addTodo() {
      //inputbox 빈값인지 체크, 빈값이 아니면 로직 수행
      if(this.newTodoItem !== ''){
        //inputbox에 입력된 텍스트의 앞, 뒤 공백문자열 제거
        let value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value, value);
        //inputbox 초기화
        this.clearInputbox();
      }
    },
    clearInputbox(){
      this.newTodoItem = '';
    },

    // document.querySelector 를 이용해 직접 add 하기
    // directAddTodo(e) {
    //   e.preventDefault();
    //   const todo = {
    //     text: document.querySelector('input.input-todo').value,
    //     completed: false
    //   };
    //   this.todos.push(todo);
    //   document.querySelector('input.input-todo').value = '';
    // },

    compeleteTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  },
  data() {
    return {
      newTodoItem : '',
      todos: [
        // {
        //   text: 'test-todo1',
        //   completed: false
        // },
        // {
        //   text: 'test-todo2',
        //   completed: true
        // },
        // {
        //   text: 'test-todo3',
        //   completed: false
        // }
      ]
    }
  }
}
</script>
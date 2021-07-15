<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoAdd v-on:addTodo="addTodo"></TodoAdd>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeTodo="removeTodo"
              v-on:addTodo="addTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"
                v-on:removeComp="clearComp"
                v-on:showTodoItems="showTodoItems"></TodoFooter>
  </div>
</template>

<script>
/** 컴포넌트 IMPORT **/
import TodoHeader from './components/TodoHeader';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data(){
    return {
      todoItems: [],
      showFnc: false
    }
  },
  /** create()는 라이프 사이클 단계 중 data 속성과 methods 속성이 정의된 후 실행 **/
  created(){
    this.showFnc = false;
    const todoList = localStorage.getItem('todos');
    if(todoList != null)
      this.todoItems = JSON.parse(todoList);
  },
  watch: {
    todoItems: function(){
      if(!this.showFnc){
        this.showFnc = false;
        localStorage.setItem("todos", JSON.stringify(this.todoItems));            // 로컬스토리지에 todos key에 array를 직렬화해서 value로 넣음
      }
    }
  },
  methods: {
    /** 메서드1 : 할일 추가 **/
    addTodo(id, value, completed){
      this.showFnc = false;
      this.todoItems.push({id : id, value : value, completed : completed});
      this.todoItems.sort( (a, b) => parseInt(b.id) - parseInt(a.id) );     // 완료/미완료 상태 변경 (remove -> push -> sort), 등록시간이 최신일 수록 위로
    },

    /** 메서드2 : 건별삭제 **/
    removeTodo(todoItem) {
      this.showFnc = false;
      this.todoItems.splice(this.todoItems.findIndex((item) => {return item.id === todoItem.id}), 1);
    },

    /** 메서드3 : 전체삭제 **/
    clearAll(){
        this.showFnc = false;
        this.todoItems = [];
    },

    /** 메서드4 : 완료항목 삭제 **/
    clearComp(){
      this.showFnc = false;
      this.todoItems = this.todoItems.filter( (item) => !item.completed);
    },

    /** 메서드5 : 전체/완료/미완료 항목보기 **/
    showTodoItems(type){
      this.showFnc = true;    // '보기' 기능은 localStorage 값 바꾸지 않음, 단순히 필터되서 보여지게만 함

      const todoList = localStorage.getItem('todos');
      if(todoList != null)
        this.todoItems = JSON.parse(todoList);

      if(type !== "ALL")
        this.todoItems = this.todoItems.filter( (item) => (type === "DONE" ? item.completed : !item.completed) );
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoAdd': TodoAdd,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

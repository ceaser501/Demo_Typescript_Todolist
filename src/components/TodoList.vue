<template>
  <div class="container">
    <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="input-group" v-for="todoItem in propsdata" v-bind:key="todoItem.id">
              <div class="form-control">
                <span v-bind:class="{done: todoItem.completed, yet: !todoItem.completed}">
                  <i class="checkBtn fas fa-check" v-on:click="toggleComplete(todoItem, 'state')"></i>&nbsp;
                </span>

                <input type="text" v-model="todoItem.value" v-on:keyup.enter="toggleComplete(todoItem, '')">
                <span v-show="todoItem.completed">(완료)</span>

                <span class="icoGrpRight">
                  <i class="fas fa-edit" v-on:click="toggleComplete(todoItem, '')"></i>&nbsp;
                  <i class="del fas fa-trash" v-on:click="removeTodo(todoItem)"></i>
                </span>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem){ this.$emit('removeTodo', todoItem); },
    toggleComplete(todoItem, type){
      // 완료/미완료 변경처리는 해당 todoItem remove -> push -> sort
      this.$emit('removeTodo', todoItem);
      // 상태값 변경일때만 바꿔서 넣음
      if(type == "state") todoItem.completed = !todoItem.completed;
      this.$emit('addTodo', todoItem.id, todoItem.value, todoItem.completed);
    }
  }
}

</script>

<style scoped>
.done { color: green;}
.yet {color: red;}
.icoGrpRight {float:right;}
</style>

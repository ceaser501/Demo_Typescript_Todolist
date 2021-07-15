<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="input-group mb-2">
            <input type="text" class="form-control" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="할일을 입력하세요"/>
            <span class="input-group-btn">
              <button type="button" class="form-control" v-on:click="addTodo">추가</button>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
  data(){
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== ''){
        let value = this.newTodoItem && this.newTodoItem.trim();
        let timestamp = new Date().getTime();                   // key(id) == timestamp
        this.$emit('addTodo', timestamp, value, false);

        this.clearInputbox();
      }
    },
    clearInputbox(){
      this.newTodoItem = '';
    },
  }
}
</script>

<style scoped>
</style>
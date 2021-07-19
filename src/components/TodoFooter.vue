<template>
  <v-row>
    <div class="col-6">
      <v-btn elevation="2" small rounded @click="clearTodo">전체삭제</v-btn>
      <v-btn elevation="2" small rounded @click="clearComp">완료항목 삭제</v-btn>
    </div>
    <div class="col-6">
      <v-btn elevation="2" small rounded @click="showTodoItems(0)">전체 항목보기</v-btn>
      <v-btn elevation="2" small rounded @click="showTodoItems(1)">완료 항목보기</v-btn>
      <v-btn elevation="2" small rounded @click="showTodoItems(2)">미완료 항목보기</v-btn>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearTodo(){this.$emit('removeAll');},
    clearComp(){this.$emit('removeComp');},
    showTodoItems(type){this.$emit('showTodoItems', type);}
  }
}
</script>

<style scoped>
</style>
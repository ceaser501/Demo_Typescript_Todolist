<template>
  <v-row>
    <v-col cols="6">
      <v-btn elevation="2" small rounded @click="clearTodo">전체삭제</v-btn>
      <v-btn elevation="2" small rounded @click="clearComp"
        >완료항목 삭제</v-btn
      >
    </v-col>
    <v-col cols="6">
      <v-btn elevation="2" small rounded @click="showTodoItems(0)"
        >전체 항목보기</v-btn
      >
      <v-btn elevation="2" small rounded @click="showTodoItems(1)"
        >완료 항목보기</v-btn
      >
      <v-btn elevation="2" small rounded @click="showTodoItems(2)"
        >미완료 항목보기</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearTodo() {
      this.$emit("remove-all");
    },
    clearComp() {
      this.$emit("remove-comp");
    },
    showTodoItems(type) {
      this.$emit("show-todo-items", type);
    }
  }
};
</script>

<style scoped></style>

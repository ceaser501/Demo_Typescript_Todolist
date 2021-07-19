<template>
  <v-row class="text-center">
    <v-text-field
      label="할 일을 입력하세요."
      v-model.trim="newTodoText"
      @keyup.enter="addTodo"
      hide-details="auto"
    >
      <template v-slot:append>
        <v-btn elevation="2" @click="addTodo" depressed tile class="ma-0"
          >추가</v-btn
        >
      </template>
    </v-text-field>
  </v-row>
</template>

<script>
export default {
  name: "TodoAdd",
  data() {
    return {
      newTodoText: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText) {
        if (confirm("저장하시겠습니까?")) {
          this.$emit("add-text", this.newTodoText);
          this.$nextTick(() => (this.newTodoText = ""));
        }
      } else {
        alert("[필수] 할일을 입력 해 주세요.");
      }
    }
  }
};
</script>

<style scoped></style>

<template>
  <v-row class="text-center">
    <v-text-field
      label="할 일을 입력하세요."
      v-model.trim="newTodoText"
      @keyup.enter="addTodo"
    >
      <template v-slot:append>
        <v-btn elevation="2" @click="addTodo" depressed tile class="ma-0"
          >추가</v-btn
        >
      </template>
    </v-text-field>
  </v-row>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class TodoAdd extends Vue {
  /**  변수 선언 **/
  newTodoText = "";

  /** 할일 추가 기능 **/
  @Emit("add-text")
  addTodo(): string {
    if (this.newTodoText && confirm("저장하시겠습니까?")) {
      this.$nextTick(() => (this.newTodoText = ""));
      return this.newTodoText;
    } else {
      alert("[필수] 할일을 입력 해 주세요.");
      return "";
    }
  }
}
</script>

<style scoped></style>

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

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class TodoFooter extends Vue {
  /** 전체삭제 기능 **/
  @Emit("remove-all")
  clearTodo(): void {}

  /** 완료삭제 기능 **/
  @Emit("remove-comp")
  clearComp(): void {}

  /** 전체, 완료, 미완료 보기 기능 **/
  @Emit("show-todo-items")
  showTodoItems(type: number): number {
    return type;
  }
}
</script>

<style scoped></style>

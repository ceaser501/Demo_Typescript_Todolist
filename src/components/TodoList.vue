<template>
  <v-list-item>
    <v-col class="col-1 listStyle">
      <v-list-item-icon
        :class="{ done: todoItem.completed, yet: !todoItem.completed }"
      >
        <font-awesome-icon icon="check" @click="toggleComplete()" />
      </v-list-item-icon>
    </v-col>
    <v-col class="col-8 listStyle">
      <v-text-field
        v-model.trim="todoItem.value"
        @keyup.enter="editTodo()"
        class="ma-0 pa-0"
      ></v-text-field>
    </v-col>
    <v-col class="col-2 pl-2 listStyle">
      <v-list-item-content v-show="todoItem.completed"
        >(완료)</v-list-item-content
      >
    </v-col>
    <v-col class="col-1 listStyle">
      <font-awesome-icon icon="edit" class="fas" @click="editTodo()" />&nbsp;
      <font-awesome-icon icon="trash" class="del" @click="removeTodo()" />
    </v-col>
  </v-list-item>
</template>

<script lang="ts">
import { Component, PropSync, Emit, Vue } from "vue-property-decorator";
import { TodoItem } from "@/types/types";

@Component
export default class TodoList extends Vue {
  @PropSync("todo") todoItem!: TodoItem;

  /** 완료처리 기능 **/
  toggleComplete(): void {
    this.todoItem = { ...this.todoItem, completed: !this.todoItem.completed };
  }

  /** 수정기능 **/
  editTodo(): void {
    if (this.todoItem.value) {
      this.todoItem = { ...this.todoItem };
    } else {
      alert("[필수] 수정할 일을 입력 해 주세요.");
    }
  }

  /** 삭제기능 **/
  @Emit("remove-todo")
  removeTodo(): string {
    return this.todoItem.id;
  }
}
</script>

<style scoped>
.done {
  color: green;
}
.yet {
  color: red;
}
.listStyle {
  margin: 0;
  padding: 0;
}
</style>

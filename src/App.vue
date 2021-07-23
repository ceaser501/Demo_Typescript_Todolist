<template>
  <v-app>
    <v-main>
      <v-container class="col-6">
        <!-- HEADER -->
        <v-row class="text-center">
          <v-col>
            <h1 class="font-weight-bold font-italic">TODO LIST!</h1>
          </v-col>
        </v-row>

        <!-- ADD -->
        <v-row>
          <v-col>
            <todo-add @add-text="addText"></todo-add>
          </v-col>
        </v-row>

        <!-- LIST -->
        <v-row>
          <v-col>
            <v-card>
              <v-list>
                <div v-if="todoItems.length === 0">
                  <v-list-item>
                    <v-list-item-content
                      >데이터가 없습니다.</v-list-item-content
                    >
                  </v-list-item>
                </div>
                <div v-else>
                  <todo-list
                    v-for="(item, index) in filteredTodoItems"
                    :todo.sync="
                      filteredTodoItems[filteredTodoItems.length - 1 - index]
                    "
                    :key="filteredTodoItems[index].id"
                    @remove-todo="removeTodo"
                  ></todo-list>
                </div>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <!-- FOOTER -->
        <v-row>
          <v-col>
            <todo-footer
              @remove-all="clearAll"
              @remove-comp="clearComp"
              @show-todo-items="showTodoItems"
            >
            </todo-footer>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
/** 컴포넌트 IMPORT **/
import { Component, Watch, Vue } from "vue-property-decorator";
import { TodoItem } from "@/types/types";

import TodoAdd from "@/components/TodoAdd.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

/** 컴포넌트 등록 **/
@Component({
  components: {
    TodoAdd,
    TodoList,
    TodoFooter
  }
})
export default class App extends Vue {
  /** 상수변수 선언 **/
  LOC_STRG_KEY = "todos";

  /** 변수선언 **/
  todoItems: TodoItem[] = [];
  filteredType = 0;

  /** created **/
  created(): void {
    this.todoItems = JSON.parse(
      localStorage.getItem(this.LOC_STRG_KEY) || "[]"
    );
  }

  /** Watch **/
  @Watch("todoItems")
  watchTodoItems(): void {
    this.filteredType = 0; //todoItems 변경점이 발생하는 경우 무조건 초기 전체보기 상태로 list 호출
    localStorage.setItem("todos", JSON.stringify(this.todoItems));
  }

  /** Computed **/
  get filteredTodoItems(): TodoItem[] {
    switch (this.filteredType) {
      case 0:
      default:
        return this.todoItems;
      case 1:
        return this.todoItems.filter(item => item.completed);
      case 2:
        return this.todoItems.filter(item => !item.completed);
    }
  }

  /** 메서드1 : 할일추가 **/
  addText(value: string): void {
    if (value) {
      this.todoItems = [
        ...this.todoItems,
        { id: new Date().getTime().toString(), value: value, completed: false }
      ];
    }
  }

  /** 메서드2 : 건별삭제 **/
  removeTodo(todoItemId: string): void {
    this.todoItems = this.todoItems.filter(item => item.id !== todoItemId);
  }

  /** 메서드3 : 전체삭제 **/
  clearAll(): void {
    this.todoItems = [];
  }

  /** 메서드4 : 완료항목 삭제 **/
  clearComp(): void {
    this.todoItems = this.todoItems.filter(item => !item.completed);
  }

  /** 메서드5 : 전체/완료/미완료 항목보기 **/
  showTodoItems(type: number): void {
    this.filteredType = type;
  }
}
</script>

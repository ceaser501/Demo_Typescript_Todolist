<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btnComm col-md-5">
          <v-btn elevation="2" small rounded v-on:click="clearTodo">전체삭제</v-btn>
          <v-btn elevation="2" small rounded v-on:click="clearComp">완료항목 삭제</v-btn>
        </div>
        <div class="btnComm btnGrpRight col-md-7">
          <v-btn elevation="2" small rounded v-on:click="showTodoItems('ALL')">전체 항목보기</v-btn>
          <v-btn elevation="2" small rounded v-on:click="showTodoItems('DONE')">완료 항목보기</v-btn>
          <v-btn elevation="2" small rounded v-on:click="showTodoItems('YET')">미완료 항목보기</v-btn>
        </div>
      </div>
    </div>
  </div>
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
.btnComm{float:left;}
.btnGrpRight{text-align:right;}
</style>
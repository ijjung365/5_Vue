<template lang="">
  <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputCom></InputCom>
        <!-- 
        <div class="row mb-3">
          <div class="col">
            <div class="input-group">
              <input
                id="msg"
                type="text"
                class="form-control"
                name="msg"
                placeholder="할일을 여기에 입력!"
                v-model.trim="todo"
                @keyup.enter="addTodo" />
              <span class="btn btn-primary input-group-addon" @click="addTodo"
                >추가</span
              >
            </div>
          </div>
        </div>
        -->
        <TodoList :todoList="todoList"></TodoList>
        <!-- 
        <div class="row">
          <div class="col">
            <ul class="list-group">
              <li
                v-for="item in todoList"
                :key="item.id"
                class="list-group-item"
                :class="{ 'list-group-item-success': item.completed }">
                <span
                  class="pointer"
                  :class="item.completed ? 'todo-done' : ''"
                  @click="toggleCompleted(item.id)"
                  >{{ item.plan }} {{ item.completed ? "(완료)" : "" }}</span
                >
                <span
                  class="float-end badge bg-secondary pointer"
                  @click="deleteTodo(item.id)"
                  >삭제</span
                >
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";
import InputCom from "./components/InputCom.vue";
let i = 4;

export default {
  name: "App",
  components: {
    TodoList,
    InputCom,
  },
  created() {
    this.emitter.on("add", this.addTodo);
    this.emitter.on("delete", this.deleteTodo);
    this.emitter.on("completed", this.toggleCompleted);
  },
  data() {
    return {
      todoList: [
        { id: 1, plan: "복습", completed: true },
        { id: 2, plan: "소화제 먹기 (다제스)", completed: false },
        { id: 3, plan: "커피는 디카페인", completed: false },
      ],
    };
  },
  methods: {
    // 1. 할 일 추가
    addTodo(todo) {
      this.todoList.push({ id: i++, plan: todo, completed: false });
    },
    // 2. 할 일 삭제
    // filter, 해당 아이디가 아닌 친구들만 남기기
    // 매개변수는 삭제를 클릭한 객체의 id 가 넘어와야함.
    deleteTodo(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
    },
    // 3. 완료
    // 해당 객체의 completed 를 반전
    // findIndex(콜백함수);
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
};
</script>
<style lang=""></style>

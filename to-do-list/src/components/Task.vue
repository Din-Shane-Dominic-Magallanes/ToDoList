<template>
  <div class="container">
    <div class="task">
      <!-- Header -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- Search -->
      <div class="search">
        <input type="text" placeholder="Search Task" @input="searchTodo" />
        <button><font-awesome-icon :icon="['fas', 'search']" /></button>
      </div>
      <!-- Task lists -->
      <div class="taskItems">
        <ul>
          <li v-for="task in filteredTasks" :key="task.id" :class="{'toggle-completed': task.completed}">
            <button @click="toggle(task)"><font-awesome-icon :icon="task.completed ? ['fas', 'check-circle'] : ['far', 'circle']" /></button>
            <button @click="toggle(task)">{{ task.title }}</button>
            <button @click="deleteTodo(task.id)"><font-awesome-icon :icon="['far', 'trash-alt']" /></button>
          </li>
        </ul>
      </div>
      <!-- Form -->
      <div class="form">
        <input v-model="newTask" type="text" placeholder="New Task" @keyup.enter="addTodo" />
        <button @click="addTodo"><font-awesome-icon :icon="['fas', 'plus']" /></button>
      </div>
      <!-- Filters -->
      <div class="filterBtns">
        <button @click="filterTasks('all')">All</button>
        <button @click="filterTasks('not-completed')">Not Completed</button>
        <button @click="filterTasks('completed')">Completed</button>
      </div>
      <!-- Left task -->
      <div class="leftTasks">
        <span>Left Tasks: {{ leftTasks }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localTasks: [...this.tasks],
      newTask: '',
      searchTerm: '',
      filter: 'all',
    };
  },
  computed: {
    filteredTasks() {
      let tasks = this.localTasks;

      if (this.filter === 'completed') {
        tasks = tasks.filter(task => task.completed);
      } else if (this.filter === 'not-completed') {
        tasks = tasks.filter(task => !task.completed);
      }

      if (this.searchTerm) {
        tasks = tasks.filter(task =>
          task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      return tasks;
    },
    leftTasks() {
      return this.localTasks.filter(task => !task.completed).length;
    }
  },
  methods: {
    searchTodo(event) {
      this.searchTerm = event.target.value;
    },
    addTodo() {
      if (this.newTask.trim()) {
        this.localTasks.push({
          id: this.localTasks.length + 1,
          title: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    deleteTodo(taskId) {
      const index = this.localTasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.localTasks.splice(index, 1);
      }
    },
    toggle(task) {
      task.completed = !task.completed;
    },
    filterTasks(filter) {
      this.filter = filter;
    }
  },
};
</script>

<style scoped>
.taskItems .toggle i {  
  margin: 0 10px 0 0;
  font-size: 14px;
}

.taskItems .toggle-completed {
  text-decoration: line-through;
}
</style>
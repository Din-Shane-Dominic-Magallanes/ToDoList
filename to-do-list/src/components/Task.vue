<template>
    <div class="container">
      <div class="task">
        <!-- Header -->
        <div class="title">
          <h1>To Do List</h1>
        </div>
        <!-- Search -->
        <div class="search">
          <input type="text" placeholder="Search Task" @input="tasks = searchTodo" />
          <button><font-awesome-icon :icon="['fas', 'search']" /></button>
        </div>
        <!-- Task lists -->
        <div class="taskItems">
          <ul>
            <li v-for="task in tasks" :key="task.id" :class="{'toggle-completed': task.completed}">
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
          <button>Not Completed</button>
          <button>Completed</button>
        </div>
        <!-- Left task -->
        <div class="leftTasks">
          <span>Left Tasks: </span>
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

  methods: {

    searchTodo(event) {
      const searchTerm = event.target.value.toLowerCase();
      return this.tasks.filter(task => task.title.toLowerCase().includes(searchTerm));
    }

    ,addTodo(){
      if (this.newTask.trim()) {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: this.newTask,
          completed: false,
        })
        this.newTask = "";
      }
    }

    ,deleteTodo(taskId) {
      const index = this.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }

    ,toggle(task){
      task.completed = !task.completed;
    }

    }
  };
</script>
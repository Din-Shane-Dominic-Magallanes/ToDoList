<template>
    <div class="container">
      <div class="task">
        <!-- Header -->
        <div class="title">
          <h1>To Do List</h1>
        </div>
        <!-- Search -->
        <div class="search">
          <input type="text" placeholder="Search Task" />
          <button><font-awesome-icon :icon="['fas', 'search']" /></button>
        </div>
        <!-- Task lists -->
        <div class="taskItems">
          <ul>
            <li v-for="task in tasks" :key="task.id" :class="{'toggle-completed': task.completed}">
              <button @click="toggle(task)"><font-awesome-icon :icon="task.completed ? ['fas', 'check-circle'] : ['far', 'circle']" /></button>
              <button @click="toggle(task)">{{ task.title }}</button>
              <button><font-awesome-icon :icon="['far', 'trash-alt']" /></button>
            </li>
          </ul>
        </div>
        <!-- Form -->
         <div class="form">
          <input type="text" placeholder="New Task" />
          <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
        </div>
        <!-- Filters -->
        <div class="clearBtns">
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
    addTodo(){
    
    }

    ,toggle(task){
      task.completed = !task.completed;
    }

    }
  };
</script>
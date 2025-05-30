<template>
  <div class="container">
    <div class="task">
      <TaskHeader />
      <TaskSearch @search="searchTodo" />
      <TaskList
        :tasks="filteredTasks"
        @toggle="toggle"
        @delete="deleteTodo"
      />
      <TaskForm @add="addTodo" />
      <TaskFilters @filter="filterTasks" />
      <TaskSummary :count="leftTasks" />
    </div>
  </div>
</template>

<script>
import TaskHeader from './TaskHeader.vue';
import TaskSearch from './TaskSearch.vue';
import TaskList from './TaskList.vue';
import TaskForm from './TaskForm.vue';
import TaskFilters from './TaskFilters.vue';
import TaskSummary from './TaskSummary.vue';

export default {
  name: "Task",
  props: {
    tasks: Array
  },
  components: {
    TaskHeader,
    TaskSearch,
    TaskList,
    TaskForm,
    TaskFilters,
    TaskSummary,
  },
  data() {
    return {
      localTasks: [...this.tasks],
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
    addTodo(title) {
      this.localTasks.push({
        id: this.localTasks.length + 1,
        title,
        completed: false
      });
    },
    deleteTodo(taskId) {
      this.localTasks = this.localTasks.filter(task => task.id !== taskId);
    },
    toggle(task) {
      task.completed = !task.completed;
    },
    filterTasks(filter) {
      this.filter = filter;
    }
  }
};
</script>

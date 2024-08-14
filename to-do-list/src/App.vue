<template>
  <div id="app">
    <task :tasks="tasks"></task>
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Francis Aguila",
          completed: true,
        },
        {
          id: 2,
          title: "Troy Demafeliz",
          completed: true,
        },
        {
          id: 3,
          title: "Troy Adriane",
          completed: false,
        },
        {
          id: 4,
          title: "Clint Gamolo",
          completed: false,
        },
        {
          id: 5,
          title: "Stephen Ang",
          completed: false,
        },
      ],
    };
  },
};
</script>
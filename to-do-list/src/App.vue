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
          title: "First Date",
          completed: true,
        },
        {
          id: 2,
          title: "Car Show",
          completed: true,
        },
        {
          id: 3,
          title: "Dear Joe",
          completed: false,
        },
        {
          id: 4,
          title: "Basketball",
          completed: false,
        },
        {
          id: 5,
          title: "Graduation",
          completed: false,
        },
      ],
    };
  },
};
</script>
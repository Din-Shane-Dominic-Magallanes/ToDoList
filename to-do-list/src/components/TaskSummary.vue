<template>
  <div class="leftTasks">
    <span>Dates completed: {{ completedCount }} and more to come!</span>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    completedCount() {
      return this.tasks.filter(task => task.completed).length;
    }
  }
};
</script>

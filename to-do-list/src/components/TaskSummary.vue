<template>
  <div class="leftTasks">
    <span>Dates completed: {{ count }} and more to come!</span>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  }
};
</script>

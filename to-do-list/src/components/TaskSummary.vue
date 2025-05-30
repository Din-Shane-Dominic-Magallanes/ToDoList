<template>
  <div class="leftTasks">
    <span>Left Tasks: {{ count }}</span>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  }
};
</script>

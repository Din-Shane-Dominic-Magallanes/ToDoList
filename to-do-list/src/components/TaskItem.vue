<template>
  <li :class="{'toggle-completed': task.completed}">
    <button @click="$emit('toggle', task)" class="heart-btn">
      <font-awesome-icon
        :icon="task.completed ? ['fas', 'heart'] : ['far', 'heart']"
        :class="{ animated: task.completed }"
      />
    </button>
    <button @click="$emit('toggle', task)">
      {{ task.title }}
    </button>
    <div class="date-container">
      <font-awesome-icon :icon="['far', 'calendar-alt']" />
      <span class="date-text">
        {{ new Date(task.date).toLocaleDateString() }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>

<style scoped>

.date-container {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #888;
  margin-left: 10px;
}

.date-text {
  font-style: italic;
}

.heart-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #d63447;
  font-size: 20px;
  outline: none;
  transition: transform 0.3s ease;
  padding: 5px;
}

.heart-btn:hover {
  transform: scale(1.2);
}

.animated {
  animation: beat 0.6s ease forwards;
}

@keyframes beat {
  0%, 100% {
    transform: scale(1);
    color: #d63447;
  }
  50% {
    transform: scale(1.3);
    color: #ff6b81;
  }
}
</style>
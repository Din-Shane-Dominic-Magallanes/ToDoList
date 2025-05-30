<template>
  <li :class="{'toggle-completed': task.completed}">
    <button @click="$emit('toggle', task)">
      <font-awesome-icon :icon="task.completed ? ['fas', 'check-circle'] : ['far', 'circle']" />
    </button>
    <button @click="$emit('toggle', task)">
      {{ task.title }}
    </button>
    <button @click="$emit('delete', task.id)">
      <font-awesome-icon :icon="['far', 'trash-alt']" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>

<template>
  <div class="taskItems">
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="$emit('toggle', task)"
        @delete="$emit('delete', task.id)"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  props: {
    tasks: Array
  }
}
</script>

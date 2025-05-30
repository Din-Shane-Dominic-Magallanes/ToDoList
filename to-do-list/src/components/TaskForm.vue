<template>
  <div class="form">
    <input v-model="localTask" type="text" placeholder="New Task" @keyup.enter="submitTask" />
    <button @click="submitTask"><font-awesome-icon :icon="['fas', 'plus']" /></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTask: ''
    };
  },
  methods: {
    submitTask() {
      if (this.localTask.trim()) {
        this.$emit('add', this.localTask);
        this.localTask = '';
      }
    }
  }
};
</script>

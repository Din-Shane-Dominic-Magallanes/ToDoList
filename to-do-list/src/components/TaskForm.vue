<template>
  <div class="form">
    <input v-model="localDate" type="text" placeholder="New Date" @keyup.enter="submitDate" />
    <button @click="submitDate"><font-awesome-icon :icon="['fas', 'plus']" /></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localDate: ''
    };
  },
  methods: {
    submitDate() {
      if (this.localDate.trim()) {
        this.$emit('add', this.localDate);
        this.localDate = '';
      }
    }
  }
};
</script>

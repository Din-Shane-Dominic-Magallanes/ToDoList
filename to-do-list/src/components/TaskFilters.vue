<template>
  <div class="filterBtns">
    <button @click="$emit('filter', 'all')">All</button>
    <button @click="$emit('filter', 'not-completed')">Not Completed</button>
    <button @click="$emit('filter', 'completed')">Completed</button>
  </div>
</template>

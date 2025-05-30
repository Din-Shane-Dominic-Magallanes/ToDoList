<template>
  <div class="search">
    <input type="text" placeholder="Search Task" @input="$emit('search', $event)" />
    <button><font-awesome-icon :icon="['fas', 'search']" /></button>
  </div>
</template>

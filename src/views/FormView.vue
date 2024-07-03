<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue'
</script>

<template>
  <div class="form">
    <TodoForm />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

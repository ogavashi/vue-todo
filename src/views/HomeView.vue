<script setup lang="ts">
import Button from 'primevue/button'
import TodoItem from '../components/TodoItem.vue'
import { store } from '@/store'
import Panel from 'primevue/panel'
</script>

<template>
  <main class="flex flex-col gap-5">
    <nav>
      <RouterLink to="/new">
        <Button class="w-full">New</Button>
      </RouterLink>
    </nav>
    <div class="todos" v-if="store.todos.length">
      <TodoItem v-for="(todo, index) in store.todos" :key="index" :todo="todo" />
    </div>
    <div v-else>
      <Panel header="No todos yet">
        <p class="m-0">You can create new todos by pressing "New" button.</p>
      </Panel>
    </div>
  </main>
</template>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

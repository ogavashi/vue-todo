<script setup lang="ts">
import { store, type Todo } from '@/store'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const todoId = Number(route.params.id)

const todo = computed(() => store.todos.find((t) => t.id === todoId) || null)
const todoTitle = ref('')
const todoDescription = ref('')

onMounted(() => {
  if (todo.value) {
    todoTitle.value = todo.value.title
    todoDescription.value = todo.value.description
  }
})

const saveTodo = () => {
  if (!todoTitle.value.trim()) {
    alert('Title is required.')
    return
  }

  const newTodo: Todo = {
    id: todo.value ? todo.value.id : Date.now(),
    title: todoTitle.value.trim(),
    description: todoDescription.value.trim()
  }

  if (todo.value) {
    store.updateTodo(newTodo)
  } else {
    store.addTodo(newTodo)
  }

  router.push('/')
}
</script>

<template>
  <div class="todo-detail">
    <div v-if="todo || !todoId" class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label for="title" class="font-bold">Title</label>
        <InputText id="title" v-model="todoTitle" aria-describedby="title-help" />
        <small id="title-help" class="font-light">Enter the title of the todo.</small>
      </div>
      <div class="flex flex-col gap-2">
        <label for="description" class="font-bold">Description</label>
        <Textarea
          id="description"
          v-model="todoDescription"
          aria-describedby="description-help"
          rows="5"
          cols="30"
        />
        <small id="description-help" class="font-light">Enter the description of the todo.</small>
      </div>
      <Button @click="saveTodo">{{ todo ? 'Update' : 'Save' }}</Button>
    </div>
    <div v-else>
      <p>Todo not found</p>
      <Button @click="router.back">Go back</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/store'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { useRouter } from 'vue-router'

interface Todo {
  id: number
  title: string
  description: string
}

const props = defineProps<{ todo: Todo }>()

const router = useRouter()

const handleEdit = () => {
  router.push(`/${props.todo.id}`)
}

const handleDelete = () => {
  store.removeTodo(props.todo.id)
}
</script>

<template>
  <Card>
    <template #title>{{ props.todo.title }}</template>
    <template #content>
      <p class="m-0">
        {{ props.todo.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Delete" severity="danger" class="w-full" @click="handleDelete" />
        <Button label="Edit" outlined class="w-full" @click="handleEdit" />
      </div>
    </template>
  </Card>
</template>

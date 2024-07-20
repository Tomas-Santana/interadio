<script setup lang="ts" >
import {ref} from 'vue'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { currentUserStore } from '@/stores/currentUserStore';

interface Comment {
  username: string
  comment: string
}

const commentSection = ref<HTMLDivElement | null>(null)

const comments = ref<Comment[]>([
  { username: 'tomas', comment: 'Que bueno' },
  { username: 'andres', comment: 'Super' },
  { username: 'rafa', comment: 'Excelente' },
])

const comment = ref<Comment>({
  username: currentUserStore.name.toLowerCase(),
  comment: ''
})

const handleSendComment = () => {
  if (!comment.value.comment) return
  comments.value.push(comment.value)
  comment.value = { username: currentUserStore.name.toLowerCase(), comment: '' }
  if (commentSection.value) {
    commentSection.value.scroll({
      top: commentSection.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

</script>

<template>
  <div class="rounded-lg bg-slate-50 flex flex-col gap-4 items-center justify-start p-4 w-full max-w-xl h-[560px]">
    <h2 class="text-lg font-bold">Chat en
      <span class="text-red-600">vivo</span>
    </h2>
    <ul class="flex flex-col gap-2 w-full h-[500px] overflow-y-scroll" ref="commentSection">
      <li v-for="comment in comments" :key="comment.username" class="bg-white p-2 rounded-lg w-full border">
        <div class="text-sm">

          @{{ comment.username }}
        </div>
        {{ comment.comment }}
      </li>
    </ul>
    <div class="w-full mt-auto flex gap-2">
      <Input placeholder="Escribe tu comentario" class="flex-1" v-model="comment.comment" />
      <Button @click="handleSendComment">Enviar</Button>
    </div>
  </div>
</template>
<script setup lang="ts" >
import {ref, watch} from 'vue'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { currentUserStore } from '@/stores/currentUserStore';

interface Comment {
  username: string
  comment: string
}

const commentSection = ref<HTMLDivElement | null>(null)

const comments = ref<Comment[]>([
  { username: 'tomas', comment: 'Me encanta interadio' },
  { username: 'andres', comment: 'Es muy conveniente escuchar la radio desde cualquier lugar' },
  { username: 'rafa', comment: 'La URU es la mejor universidad del mundo' },
])

const optionalComments = [
  { username: 'juan', comment: 'Hoy almorce pollo a la plancha' },
  { username: 'miguel', comment: 'Me gusta el futbol' },
  { username: 'admin1010', comment: 'El beisbol es lo mejor' },
  { username: 'pedro', comment: 'Arriba las aguilas del zulia' },
  { username: 'maria', comment: 'Me gusta el helado de chocolate con vainilla' },
  { username: 'luis', comment: 'Me gusta el helado de chocolate con vainilla' },
  { username: 'francisco', comment: 'soy el papa francisco dios los bendiga'}
]

const comment = ref<Comment>({
  username: currentUserStore.username,
  comment: ''
})

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * optionalComments.length)
  comments.value.push(optionalComments[randomIndex])
}, 2000)

const bottom = ref<HTMLDivElement | null>(null)

const handleSendComment = () => {
  if (!comment.value.comment) return
  comments.value.push(comment.value)
  comment.value = { username: currentUserStore.name.toLowerCase(), comment: '' }
  
  if (bottom.value) {
    bottom.value.scrollIntoView({ behavior: 'smooth' })
  }
}

watch(comments, () => {
  if (bottom.value) {
    bottom.value.scrollIntoView({ behavior: 'smooth' })
  }
})



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
      <div ref="bottom"></div>
    </ul>
    <div class="w-full mt-auto flex gap-2">
      <Input placeholder="Escribe tu comentario" class="flex-1" v-model="comment.comment" />
      <Button @click="handleSendComment">Enviar</Button>
    </div>
  </div>
</template>
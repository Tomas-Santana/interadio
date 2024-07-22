<script setup lang="ts">
import {AvatarFallback, Avatar, AvatarImage} from "@/components/ui/avatar"

const props = defineProps<{
  initials: string;
  name: string;
}>();

const colors = ["bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-orange-400", "bg-purple-400", "bg-lime-400", "bg-cyan-400", "bg-pink-400"]
const bg = colors[Math.floor(Math.random() * colors.length)]


</script>

<template>
  <div class="flex gap-2 items-center hover:bg-secondary p-2 rounded-md">
    <div :class="`w-10 h-10 border rounded-full grid place-content-center ${bg} bg-`">
      {{ props.initials }}
    </div>
    <span>
      {{ props.name }}
    </span>
  </div>
</template>
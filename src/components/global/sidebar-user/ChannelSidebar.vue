<script setup lang="ts">
import {AvatarFallback, Avatar, AvatarImage} from "@/components/ui/avatar"

const props = defineProps<{
  initials: string;
  name: string;
}>();

const colors = ["red", "blue", "yellow", "amber", "orange"]
const randomColor = colors[Math.floor(Math.random() * colors.length)]

</script>

<template>
  <div class="flex gap-2 items-center hover:bg-secondary p-2 rounded-md">
    <div :class="`w-10 h-10 border rounded-full grid place-content-center bg-${randomColor}-400 `">
      {{ props.initials }}
    </div>
    <span>
      {{ props.name }}
    </span>
  </div>
</template>
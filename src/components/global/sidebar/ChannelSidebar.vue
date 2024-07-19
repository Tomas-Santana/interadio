<script setup lang="ts">
import {AvatarFallback, Avatar} from "@/components/ui/avatar"

const props = defineProps<{
  initials: string;
  name: string;
}>();

// random hex color
const colors = ["red", "orange", "amber", "yellow", "lime" ]

const randomColor = colors[Math.floor(Math.random() * colors.length)]
console.log(randomColor)
</script>

<template>
  <div class="flex gap-2 items-center hover:bg-secondary p-2 rounded-md">
    <Avatar>
      <AvatarFallback class=" bg-" >
        {{ props.initials }}
      </AvatarFallback>
    </Avatar>
    <span>
      {{ props.name }}
    </span>
  </div>
</template>
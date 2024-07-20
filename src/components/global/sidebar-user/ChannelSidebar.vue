<script setup lang="ts">
import {AvatarFallback, Avatar} from "@/components/ui/avatar"

const props = defineProps<{
  initials: string;
  name: string;
}>();

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
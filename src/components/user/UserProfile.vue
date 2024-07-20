<script setup lang="ts" >
import { currentUserStore } from '@/stores/currentUserStore'
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
</script>

<template>
  <div class="flex gap-4 items-center"  >
    <Avatar class="w-64 h-64 border">
      <AvatarImage :src="currentUserStore.profilePic" />
    </Avatar>
    <div>
      <p class="text-3xl font-bold">{{ currentUserStore.name }} {{ currentUserStore.lastName }}</p>
      <p class="text-lg">
        @{{ currentUserStore.name.toLowerCase() }}
      </p>

    </div>

  </div>
</template>
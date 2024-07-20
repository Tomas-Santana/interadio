<script setup lang="ts">
import {
  LogOut,
  User,
  Smile
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUserStore } from '@/stores/currentUserStore';


import { computed } from 'vue';



const initials = computed(() => {
  return currentUserStore.name?.charAt(0) + currentUserStore.lastName?.charAt(0)
})

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Avatar class="cursor-pointer border" >
        <AvatarFallback>{{ initials }}</AvatarFallback>
        <AvatarImage :src="currentUserStore.profilePic"/>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>
        {{ currentUserStore.name }} {{ currentUserStore.lastName }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <RouterLink to="/profile">
          <DropdownMenuItem>
            <User class="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>
        </RouterLink>
        <DropdownMenuItem>
          <Smile class="mr-2 h-4 w-4" />
          <span>Soporte</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
  
      </DropdownMenuGroup>
      
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
Installa
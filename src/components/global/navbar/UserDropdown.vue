<script setup lang="ts">
import {
  LogOut,
  User,
  Smile
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { currentUserStore } from '@/stores/currentUserStore';

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { computed } from 'vue';



const initials = computed(() => {
  return currentUserStore.name?.charAt(0) + currentUserStore.lastName?.charAt(0)
})


</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="aspect-square rounded-full">
        <Avatar size="sm">
          <AvatarFallback>
            {{ initials ?? "CU" }}
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-64">
      <DropdownMenuLabel class="flex justify-between items-center">
        <span>
          {{ currentUserStore.name }} {{ currentUserStore.lastName }}
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <RouterLink to="select-profile">
          <DropdownMenuItem>
            <User class="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>
        </RouterLink>
        <RouterLink to="select-profile">
          <DropdownMenuItem>
            <Smile class="mr-2 h-4 w-4" />
            <span>Soporte</span>
          </DropdownMenuItem>
        </RouterLink>


      </DropdownMenuGroup>

      <DropdownMenuSeparator />
      <DropdownMenuItem ">
        <LogOut class=" mr-2 h-4 w-4" />
      <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
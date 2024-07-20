<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import SidebarMd from '../sidebar-user/SidebarMd.vue';
import UserDropdown from './UserDropdown.vue';
import Input from '@/components/ui/input/Input.vue';
</script>

<template>
  <div class="flex items-center gap-4 p-2 px-4 border-b">
    <SidebarMd />
    <div class="relative w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Buscar por emisora o tópico..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="w-4 h-4 text-muted-foreground" />
      </span>
    </div>
    <div class="ml-auto">
      <UserDropdown />
    </div>
  </div>
</template>

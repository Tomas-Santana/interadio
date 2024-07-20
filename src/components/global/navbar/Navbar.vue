<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import SidebarMd from '../sidebar-user/SidebarMd.vue';
import UserDropdown from './UserDropdown.vue';
import { RouterLink } from 'vue-router';
import Input from '@/components/ui/input/Input.vue';
</script>

<template>
  <div class="flex items-center gap-4 p-2 px-4 border-b">
    <SidebarMd />
    <RouterLink to="/" class="flex items-center justify-center">

      <h2 class="text-2xl font-bold">
        <span class="text-blue-600">Inte</span>Radio
      </h2>
    </RouterLink>
    <div class="ml-auto">
      <UserDropdown />
    </div>
  </div>
</template>

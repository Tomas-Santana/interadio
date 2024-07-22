<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarLg from './components/global/sidebar-user/SidebarLg.vue';
import Navbar from './components/global/navbar/Navbar.vue';
import { Toaster } from './components/ui/sonner';
</script>

<template>
    <div class="flex w-full">
      <SidebarLg />
      <div class="flex-1">
        <Navbar />
        <RouterView />
      </div>
    </div>
    <Toaster />
</template>

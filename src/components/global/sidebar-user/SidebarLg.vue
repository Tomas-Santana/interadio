<script setup lang="ts">
import { ref } from 'vue';
import SidebarContent from './SidebarContent.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="hidden lg:flex h-dvh border w-96 p-4">
    <SidebarContent />
  </div>
</template>
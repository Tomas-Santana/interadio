<script setup lang="ts">
import { ref } from 'vue';
import SidebarContent from './SidebarContent.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
</script>

<template>
  <Sheet>
    <SheetTrigger as-child class="lg:hidden">
      <Button variant="ghost" class="aspect-square">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SidebarContent />
    </SheetContent>
  </Sheet>
</template>
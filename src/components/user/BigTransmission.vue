<script setup lang="ts" >
import type { Transmission } from '@/stores/transmissionStore';
import { computed } from 'vue';
import { Heart, Bell } from 'lucide-vue-next';
import Controls from './Controls.vue';

const props = defineProps<{
  transmission: Transmission;
}>();

const computedViews = computed(() => {
  return props.transmission.views >= 1000 ? `${(props.transmission.views / 1000).toFixed(1)}k` : props.transmission.views;
});

</script>

<template>
  <div class="flex flex-col gap-4 items-center w-full">
    <!-- image -->
    <div class="flex justify-center rounded-lg border w-full relative aspect-video">
      <img :src="transmission.img" alt="transmission" class=" object-fill rounded-lg" />
      <div class="absolute bottom-2  mx-auto">
        <Controls :id="transmission.id" />
      </div>
    </div>
    <div class="flex justify-between items-center w-full max-w-xl gap-4">
      <div>
        <h2 class="text-xl font-bold">{{ transmission.title }}</h2>
        <p class="">{{ transmission.description }}</p>
        <p class="font-bold">{{ transmission.channel }}</p>
      </div>
      <div class="flex flex-col gap-2 items-end">
        <div class="p-2 rounded-md bg-secondary/80 text-blue-600 font-semibold">
          <p class="">{{ computedViews }} oyentes</p>
        </div>
        <div class="flex gap-2">
          <div class="p-2 rounded-md bg-secondary/80 text-blue-600">
            <Heart />
          </div>
          <div class="p-2 rounded-md bg-secondary/80 text-blue-600">
            <Bell />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
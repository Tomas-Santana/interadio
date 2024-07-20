<script setup lang="ts" >
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Tag from '@/components/global/Tag.vue';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
  tags: string[];
  img: string;  
  views: number;
  channel: string;
  id: number;
}>();

const computedViews = computed(() => {
  return props.views >= 1000 ? `${(props.views / 1000).toFixed(1)}k` : props.views;
});
</script>

<template>
  <RouterLink :to="`transmission/${props.id}`"  >
  <Card class=" max-w-full hover:scale-105 transition-transform hover:shadow-md">
    <div class="relative">
      <div class="absolute top-1 bg-secondary/80 rounded-md p-2 w-24 grid place-content-center mx-auto left-0 right-0">
        <p class="text-xs">
          {{ computedViews }} oyentes
        </p>
      </div>
      <div class="aspect-video">
        <img :src="img" alt=""
        class="rounded-t-md  border transition-transform aspect-video object-fill">

      </div>
    </div>
    <CardContent class="flex  gap-8 items-center justify-center p-4 ">
      <div class="flex flex-col gap-2 items-center">
        <CardTitle>
          {{ title }}
        </CardTitle>
        <CardDescription>
          {{ channel }}
        </CardDescription>
        <CardDescription>
          {{ description }}
        </CardDescription>
        <div class="flex gap-2">
          <Tag v-for="tag in tags" :key="tag">
            {{ tag }}
          </Tag>
        </div>
      </div>
    </CardContent>
  </Card>
  </RouterLink>
</template>

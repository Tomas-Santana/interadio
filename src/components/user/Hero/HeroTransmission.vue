<script setup lang="ts" >
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Tag from '@/components/global/Tag.vue';

defineProps<{
  title: string;
  description: string;
  tags: string[];
  img: string;  
}>();
</script>

<template>
  <Card class="w-[600px] max-w-full hover:scale-105 transition-transform hover:shadow-md">
    <CardContent class="flex group gap-8 items-center justify-center p-4 ">
      <div class="">
        <img :src="img" alt=""
          class="rounded-md group-hover:scale-110 shadow-md group-hover:shadow-lg transition-transform">
      </div>
      <div class="flex flex-col gap-2">
        <CardTitle>
          {{ title }}
        </CardTitle>
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
</template>

<script setup lang="ts"  >
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import HeroTransmission from './HeroTransmission.vue';

const transmissions = [
  {
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
]

</script>
<template>
  <Carousel class="w-full max-w-xl relative flex flex-col"
    :opts="{
      loop: true,
    }"
  >
    <CarouselContent>
      <CarouselItem v-for="transmission in transmissions" :key="transmission.title" class="p-8">
        <HeroTransmission :title="transmission.title" :description="transmission.description" :tags="transmission.tags" :img="transmission.img" />
      </CarouselItem>
    </CarouselContent>
    <div>
      <CarouselPrevious />
      <CarouselNext />
    </div>

  </Carousel>
</template>
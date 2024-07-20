<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Transmission from '../Transmission.vue'
import { transmissionStore } from '@/stores/transmissionStore';
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
  <div
    className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    <div
      className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
    </div>
    <Carousel class="w-full max-w-xl relative flex  overflow-visible" :opts="{
      loop: true,
    }">
      <CarouselContent>
        <CarouselItem v-for="transmission in transmissionStore.recommended" :key="transmission.title" class="p-8 ">
          <Transmission :title="transmission.title" :description="transmission.description"
            :tags="transmission.tags" :img="transmission.img" :views="transmission.views" :channel="transmission.channel" :id="transmission.id"/>
        </CarouselItem>
      </CarouselContent>
      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>

    </Carousel>
  </div>
</template>
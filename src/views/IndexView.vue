<script setup lang="ts">
import { Button } from "@/components/ui/button"
import Transmission from "@/components/user/Transmission.vue";
import Hero from "@/components/user/Hero/Hero.vue";
import { transmissionStore } from "@/stores/transmissionStore";

const transmissions = [
  {
    id: 1,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    id: 2,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    id: 3,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    id: 4,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    id: 5,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  },
  {
    id: 6,
    title: 'Transmission',
    description: 'Transmission is a BitTorrent client which features a variety of user interfaces on top',
    tags: ['Linux', 'Windows', 'macOS'],
    img: 'https://i.ytimg.com/vi/yGvrSfsAeqM/hq720.jpg'
  }
]

</script>

<template>

  <div class="w-full grid place-content-center">
    <Hero />
  </div>
  <div class="flex flex-col gap-4 p-4">
    <h2 class="text-4xl font-bold">
      <span class="text-blue-600">
        Emisoras en vivo
      </span>
      que sigues
    </h2>
    <div class="flex gap-4 flex-wrap justify-center">
      <div class="w-full max-w-sm" v-for="transmission in transmissionStore.following">
        <Transmission :title="transmission.title" :description="transmission.description" :tags="transmission.tags"
          :img="transmission.img"
          :views="transmission.views" :channel="transmission.channel"
          :id="transmission.id" />
      </div>
    </div>

  </div>
</template>
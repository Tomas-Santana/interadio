<script setup lang="ts"  >
import UserProfile from '@/components/user/UserProfile.vue';
import { transmissionStore, allTransmissions } from '@/stores/transmissionStore';
import Transmission from '@/components/user/Transmission.vue';
</script>
<template>
  <div
    className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/10 relative flex items-center justify-center">
    <div
      className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
    </div>
    <div class="w-full p-4 grid place-content-center">

      <UserProfile />
    </div>
  </div>
  <div class="mt-10 p-4 flex flex-col gap-4">
    <h2 class="text-4xl font-bold">Transmisiones Guardadas</h2>
    <div class="flex gap-4 flex-wrap justify-center">
      <div class="w-full max-w-sm" v-for="transmission in transmissionStore.saved">
        <Transmission :title="transmission.title" :description="transmission.description" :tags="transmission.tags"
          :img="transmission.img" :views="transmission.views" :channel="transmission.channel" :id="transmission.id" />
      </div>
    </div>

  </div>
</template>
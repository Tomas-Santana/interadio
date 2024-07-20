<script setup lang="ts">
import ChannelSidebar from './ChannelSidebar.vue';

const myChannels = [
  {
    name: "La Mega",
    initials: "LM"
  },
  {
    name: "Exitos Mexicanos",
    initials: "EM"
  },
  {
    name: "Capital",
    initials: "CR"
  },
]
const recommendedChannels = [
  {
    name: "Liga Venezolana de Beisbol Profesional",
    initials: "LV"
  },
  {
    name: "Luis Miguel",
    initials: "LM"
  },
  {
    name: "La Liga",
    initials: "LL"
  }
]
</script>
<template>
  <div class="flex flex-col gap-8">
    <h2 class="text-4xl font-bold">
      Para ti
    </h2>
    <div class="flex flex-col gap-4">
      <h3 class="text-xl font-bold uppercase">
        MIS EMISORAS FAVORITAS
      </h3>
      <ChannelSidebar v-for="channel in myChannels" :key="channel.name" :name="channel.name"
        :initials="channel.initials" />
    </div>
    <div class="flex flex-col gap-4">
      <h3 class="text-xl font-bold uppercase">
        EMISORAS RECOMENDADAS
      </h3>
      <ChannelSidebar v-for="channel in recommendedChannels" :key="channel.name" :name="channel.name"
        :initials="channel.initials" />
    </div>
  </div>
</template>
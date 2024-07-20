<script setup lang="ts">
import { Play, Pause, RedoDot, UndoDot } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue';
import { onMounted, ref } from 'vue';


const isPlaying = ref(true);

const props = defineProps<{
  id: number;
}>();
const audio = ref<HTMLAudioElement | null>(null);

const audios = [
  {
    id: 1,
    src: '/audio/transmission_1.mp3'
  },
  {
    id: 7,
    src: '/audio/transmission_7.mp3'
  },
  {
    id: 8,
    src: '/audio/transmission_8.mp3'
  }]

const audioSrc = audios.find(audio => audio.id === props.id)?.src ?? audios[2].src;


onMounted(() => {
  if (audio.value) {
    audio.value.currentTime = 100;
    audio.value.play();
  }
})

const handlePause = () => {
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause();
    } else {
      audio.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
}


</script>

<template>
  <div class="flex gap-4">

    <Button variant="outline" class="aspect-square rounded-full p-2 w-12 h-12 text-blue-600" @click="handlePause()">
      <Play class="w-10 h-10" v-if="!isPlaying" />
      <Pause class="w-10 h-10" v-else />
    </Button>

    <audio :src="audioSrc" autoplay loop ref="audio"></audio>
    <AvLine />
  </div>
</template>
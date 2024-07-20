<script setup lang="ts">
import { allTransmissions } from '@/stores/transmissionStore';
import { useRoute } from 'vue-router';
import BigTransmission from '@/components/user/BigTransmission.vue';
import Comments from '@/components/user/Comments.vue';

const route = useRoute();
const transmissionId = Number(route.params.id);
const transmission = allTransmissions.value.find((transmission) => transmission.id === transmissionId);


</script>
<template>
  <div v-if="!transmission" >
    <h1>Transmission not found</h1>
  </div>

  <div v-if="transmission">
    <div class="flex flex-col p-4 gap-4 justify-center items-center">
      <BigTransmission :transmission="transmission" />
      <Comments />
    </div>
  </div>
</template>
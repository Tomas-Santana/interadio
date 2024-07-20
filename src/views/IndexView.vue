<script setup lang="ts">
import {Button} from "@/components/ui/button"
import HeroTransmission from "@/components/user/Hero/HeroTransmission.vue";
import Hero from "@/components/user/Hero/Hero.vue";
</script>

<template>
  <h1>Index View</h1>
  <Button>Click me</Button>
  <div class="w-full grid place-content-center">
    <Hero />
  </div>
</template>
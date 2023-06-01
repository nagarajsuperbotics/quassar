<template>
  <div class="user-item">
    <q-avatar>
      <img :src="avatar">
    </q-avatar>
    <p>{{ first_name }} {{ last_name }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

withDefaults(defineProps<Props>(), {});
</script>

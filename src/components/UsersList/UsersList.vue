<template>
  <q-page-sticky expand position="top">
    <q-toolbar class="bg-accent text-white">
      <q-toolbar-title>
        Users list
      </q-toolbar-title>
    </q-toolbar>
  </q-page-sticky>
  <UserItem v-for="user, index in users" :key="'user-' + index" :id="user.id" :first_name="user.first_name"
    :last_name="user.last_name" :email="user.email" :avatar="user.avatar" />
  <q-ajax-bar ref="bar" position="bottom" color="accent" size="10px" skip-hijack />
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref, onMounted, onUpdated } from 'vue';
import UserItem from '../usersItem/UserItem.vue';

const users = ref();
const bar = ref();

onMounted(async () => {
  onLoad(true);
  const { data: { data } } = await api.get('/users');
  users.value = data;
  onLoad(false);
});

onUpdated(() => {
  // console.log(users.value);
});

const onLoad = (isLoad: boolean) => {
  const barRef = bar.value
  if (barRef && isLoad) barRef?.start();
  if (barRef && !isLoad) barRef?.stop();

}
</script>

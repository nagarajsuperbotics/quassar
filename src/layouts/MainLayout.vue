<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-toolbar-title>
          POC Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">

</script>

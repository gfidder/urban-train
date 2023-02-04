<script setup lang="ts">
const { $client } = useNuxtApp();

const hello = await $client.example.hello.useQuery({ text: "client" });

useHead({
  title: "My App",
});
</script>

<template>
  <div>
    <NuxtWelcome />
    <p>Hello all...</p>
    <div class="felx-col flex items-center gap-2">
      <p class="text-2xl text-white">
        {{
          hello.data.value
            ? hello.data.value?.greeting
            : "Loading tRPC query..."
        }}
      </p>
    </div>
    <AuthShowcase />
  </div>
</template>

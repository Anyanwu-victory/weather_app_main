<template>
  <div
    class="baseCard  w-full max-w-[230px] bg-neutral-800
     p-3 md:py-5 md:px-0 rounded-xl shadow-xl flex flex-col gap-3"
  >
    <slot>
      <p class="text-neutral-300">{{ message }}</p>
    </slot>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String, default: "" },
});
</script>

<template>
  <div
    class="baseCard w-full max-w-[230px] p-4 md:p-6 rounded-3xl shadow-md flex flex-col gap-3"
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

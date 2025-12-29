

 <template>
  <div class="bg-neutral-800 border-neutral-500 max-h-screen h-full rounded-2xl flex items-center justify-center w-full">
    <div class="flex flex-col items-center gap-4">
      <div class="loader">
        <span class="ball"></span>
        <span class="ball"></span>
        <span class="ball"></span>
      </div>
      <h1 class="font-bold text-lg text-white">Loading...</h1>
    </div>
  </div>
</template>




<script setup>

</script>

<style scoped>
/* From Uiverse.io by ashish-yadv */

.loader {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;   /* important */
  align-items: center;       /* important */
  gap: 6px;
}

.ball {
    list-style: none;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: white;
}

.ball:nth-child(1) {
  animation: bounce-1 2.1s ease-in-out infinite;
}

@keyframes bounce-1 {
  50% {
    transform: translateY(-18px);
  }
}

.ball:nth-child(2) {
  animation: bounce-3 2.1s ease-in-out 0.3s infinite;
}

@keyframes bounce-2 {
  50% {
    transform: translateY(-18px);
    /* background-color: aqua; */
  }
}

.ball:nth-child(3) {
  animation: bounce-3 2.1s ease-in-out 0.6s infinite;
}

@keyframes bounce-3 {
  50% {
    transform: translateY(-18px);
    /* background-color: aqua; */
  }
}
</style>
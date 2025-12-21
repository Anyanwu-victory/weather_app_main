<script setup>

</script>

<template>
  <!-- Welcome text -->
  <div class="justify-center flex items-center">
    <span>
      <h1 class="text-[30px] font-bold py-9 md:text-[40px]">How's the sky looking today?</h1>
    </span>
  </div>
  <!-- Welcome text -->

  <!-- Search input -->
  <div class="flex justify-center items-center space-x-6">
    <!-- <div class="bg-neutral-800 p-4.5 rounded-xl flex text-[18px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21"><path fill="#D4D3D9" d="M19.844 18.82c.195.196.195.508 0 .664l-.899.899c-.156.195-.468.195-.664 0l-4.726-4.727a.63.63 0 0 1-.117-.351v-.508c-1.446 1.21-3.282 1.953-5.313 1.953A8.119 8.119 0 0 1 0 8.625C0 4.172 3.633.5 8.125.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.781 3.906-1.992 5.313h.508c.117 0 .234.078.351.156l4.727 4.726ZM8.125 14.875a6.243 6.243 0 0 0 6.25-6.25c0-3.438-2.813-6.25-6.25-6.25a6.243 6.243 0 0 0-6.25 6.25 6.219 6.219 0 0 0 6.25 6.25Z"/>
      </svg>
      <input type="search" placeholder="Search for a place..." 
      class="text-neutral-100 pl-3 text-[18px] w-[20rem] border-0 "/>
    </div> -->
    <!-- From Uiverse.io by LightAndy1 -->
    <div class="group bg-neutral-800">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
          </path>
        </g>
      </svg>
      <input class="input" type="search" placeholder="Search for a place..." />
    </div>


    <button class=" px-6 rounded-xl bg-blue-500 
     font-semibold hover:text-blue-500 hover:bg-white btn">Search</button>
  </div>


</template>

<style scoped>
/* From Uiverse.io by LightAndy1 */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 420px;
  width: 100%;
  border-radius: 12px;
}

.input {
  width: 100%;
  height: 50px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  outline: none;
  background-color: rgb(39, 37, 65);
  color: #ffffff;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #807c7c;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 226, 183, 0.4);
  box-shadow: 0 0 0 4px rgb(234 226 183 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 21px;
  height: 21px;
}
.btn {
  cursor: pointer;
  height: 50px;
  text-align: center;
}
</style>

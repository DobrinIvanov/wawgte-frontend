<!-- HomeContentPage.vue -->

<template>
    <div class='flex flex-col h-full py-14 justify-center items-center'>
      <div class="border border-white-1 w-full text-center ">
        Some content here? What should it be?
      </div>
      <WawgteButton />
    </div>
</template>
  
<script>
import WawgteButton from '@/components/WawgteButton.vue';

  export default {

    data() {
      return {};
    },
    components: {
      WawgteButton
    }
  };
  </script>
<style>
</style>
  
<template>
  <div class="pb-24 lg:grid grid-cols-2 gap-8 max-w-3xl mt-24 mx-auto">
    
    <router-link class="block col-span-2" to="/read"
      ><div class="learnCard">
        <p>Read</p>
        <img src="/icons/read.svg" class="" alt="" /></div
    ></router-link>
    <p class="text-center text-3xl col-span-2 mt-12">Coming Soon</p>
    <div class="learnCard mr-auto opacity-40">
      <p>Play</p>
      <img src="/icons/play.svg" class="" alt="" />
    </div>
    <div class="learnCard ml-auto opacity-40">
      <p>Watch</p>
      <img src="/icons/watch.svg" class="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style scoped>
.learnCard {
  @apply bg-offwhite rounded-xl mx-auto my-4 p-6 flex flex-col items-center justify-center;
  height: 200px;
  width: 300px;
  background-image: url('/images/bg.png');
  box-shadow: 0px 12px 20px rgba(143, 182, 233, 0.3);
}

.learnCard > p {
  @apply font-display font-bold text-center text-3xl cursor-pointer;
}
</style>

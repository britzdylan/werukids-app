<template>
  <div
    class="
      absolute
      top-0
      left-0
      right-0
      bottom-0
      flex flex-row
      items-center
      justify-center
      z-60
    "
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <main class="level-up-card bg-white p-12 rounded-xl">
      <header class="text-center w-full font-bold">
        <p>Congratulations! You reached a new level</p>
      </header>
      <div class="text-center py-8">
        <div class="flex flex-row items-center justify-center mb-8">
          <img src="/icons/star.svg" class="mx-1 h-12 w-12" alt="" /><img
            src="/icons/star.svg"
            class="mx-1 h-16 w-16"
            alt=""
          /><img src="/icons/star.svg" class="mx-1 h-12 w-12" alt="" />
        </div>
        <h1 class="font-bold text-6xl leading-3 py-4 m-0">
          Level {{ this.level }}
        </h1>
      </div>
      <footer>
        <button @click="this.hideLevelUpEmit" class="mx-auto btn primary">
          Close
        </button>
      </footer>
    </main>
  </div>
</template>
<script>
export default {
  name: 'levelup',
  props: ['level'],
  methods: {
    hideLevelUpEmit() {
      this.$emit('hideLevelUpFromChild')
    },
  },
}
</script>

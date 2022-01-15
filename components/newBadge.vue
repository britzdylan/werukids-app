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
        <p>Congratulations! You earned a new badge</p>
      </header>
      <div class="text-center py-8">
        <template v-for="item in items">
          <div :key="item.title + 'badge'">
            <img
              :key="item.title + 'badge'"
              :src="`/badges/${item.file}.svg`"
              class="mx-auto h-32 w-32"
              alt=""
            />
            <small :key="item.title + 'badge_name'">{{ item.title }}</small>
          </div>
        </template>
      </div>
      <footer>
        <button @click="this.hidebadgeEmit" class="mx-auto btn primary">
          Close
        </button>
      </footer>
    </main>
  </div>
</template>
<script>
export default {
  name: 'newbadge',
  props: ['items'],
  methods: {
    hidebadgeEmit() {
      this.$emit('hidebadgeEmitFromChild')
    },
  },
}
</script>

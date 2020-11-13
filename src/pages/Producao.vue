<template>
  <q-page class="flex row">
    <div class="filter-container bordered">
      Header
    </div>
    <div class="content-container q-pa-sm flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/icon-167x167.png"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProducao',
  data: () => ({
    tab: 'fontePagadora'
  }),
  methods: {}
}
</script>
<style lang="sass" scoped>
  .filter-container
    flex: 0 1 280px
    height: 100vh
    overflow-y: auto
    background: #fffffe
    border-right: 1px solid #ddd

  .content-container
    flex: 0 1 calc(100% - 250px)
    height: 100vh
    overflow-y: auto
</style>

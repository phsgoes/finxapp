<template>
  <q-layout view="lHr LpR lFr">
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      show-if-above
      content-class="bg-grey-1"
      :mini="miniState"
      :mini-width="48"
      :width="220"
      :breakpoint="1023"
    >
      <q-scroll-area class="fit">
        <q-list padding class="mini-list">
          <EssentialLink
            v-for="link in routes"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { buildRoutes } from '../utils'

export default {
  name: 'Layout',
  components: { EssentialLink },
  data () {
    return {
      routes: [],
      leftDrawerOpen: false,
      miniState: true
    }
  },

  mounted () {
    this.routes = buildRoutes(this.$router.options.routes)
  }
}
</script>
<style lang="sass">
  .mini-list
    max-width: 48px
</style>

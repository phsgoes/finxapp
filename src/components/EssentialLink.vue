<template>
  <q-item
    clickable
    :to="path"
    v-ripple
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :size="`sm`">
        <q-tooltip
          :offset="[10, 10]"
          anchor="center right"
          self="center left"
          transition-show="scale"
          transition-hide="scale"
          :content-style="{ background: '#333', padding: '.8rem', 'font-size': '.9rem' }"
        >
          <strong>{{ title }}</strong>
        </q-tooltip>
      </q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    path: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

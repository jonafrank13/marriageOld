<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    exact
    active-class="highlight"
    class="q-py-md"
    @click="vibrate"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :color="$q.dark.isActive ? 'white' : 'warning'" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-accent text-bold text-h6">{{ title }}</q-item-label>
      <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-dark'" class="text-subtitle2">
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { utils } from 'src/mixins/utils'

export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  mixins: [utils]
}
</script>
<style lang="scss" scoped>
.highlight {
  background: rgba($primary, 0.2);
  pointer-events: none;
}
</style>

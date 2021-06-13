<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl" :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'">
    <div class="content text-center bg-secondary">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">Our Story</h4>
      <div class="abt-content">
      Not long ago in 2020, in the midst of a pandemic, the two of us met serendipitously at work.
      <br>As the popular phrase goes, THE REST IS HISTORY…
      <br>With the blessings of our families and the love of our friends, we have decided to remain best friends for life.
      <br>The past 6 months has been a wonderful journey and life has taught us so many beautiful lessons. We vow to ensure we keep learning and growing together.
      <br>Come bless us on 14th June as we enter holy matrimony and solemnise the relationship. 
      <br>For those of you who are unable to attend, kindly uphold us in your prayers and we hope to meet you all soon.
      <br>Love,
      <br>Arvind and Dianna</div>
    </div>
  </q-page>
</template>

<script>
import { utils } from 'src/mixins/utils'

export default {
  name: 'About',
  mixins: [utils]
}
</script>
<style lang="scss" scoped>
.content {
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  i {
    color: $secondary;
    font-size: 15px;
  }
}
.abt-content {
    font-family: 'Handlee', cursive;
    color: white;
}
</style>

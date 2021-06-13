<template>
  <q-page
    class="flex content-center flex-center venye-page q-py-md q-px-xl"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'"
  >
    <h4 class="full-width text-secondary text-center text-bold q-mb-sm">
      Live Stream
    </h4>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3Q6G7S25aPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </q-page>
</template>

<script>
export default {
  name: "Venue"
};
</script>

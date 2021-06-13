<template>
  <q-page class="flex projects-page" :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'">
    <div class="q-pa-xl row items-start justify-md-between justify-between q-gutter-md">
      <iframe width="290" height="200" src="https://www.youtube.com/embed/3rbtIwMKuDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <q-card class="project-card" :class="$q.dark.isActive ? 'bg-primary' : ''" :dark="false" v-for="pic in pics" :key="pic.name" flat bordered>
        <q-img
          width="298px"
          height="100%"
          :src="pic.img"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      pics: [
        {
          name: '1',
          img: '1.jpeg'
        },
        {
          name: '2',
          img: '2.jpeg'
        },
        {
          name: '3',
          img: '3.jpeg'
        },
        {
          name: '4',
          img: '4.jpeg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.project-card {
  max-width: 300px;
  position: relative;
}
</style>

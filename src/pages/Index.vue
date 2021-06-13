<template>
  <q-page class="flex flex-center" :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'">
    <div id="scene">
      <div data-depth="0.3">
        <img
          alt="logo"
          src="/icons/logo.svg"
          style="width: 200px; height: 200px; margin: auto; display: block"
        >
      </div>
      <div data-depth="0.5">
        <div id="layer2">
          <h2 class="text-accent text-bold text-center">Arvind weds Dianna</h2>
          <h3 class="text-positive text-bold text-center">14.06.2021</h3>
          <h4 class="text-warning text-bold text-center">
            <vue-countdown :time="countdownTime" v-slot="{ days, hours, minutes, seconds }">
              Countdown <span v-if="days > 0">{{ days }} day,</span> {{ hours }} hour(s), {{ minutes }} minute(s), {{ seconds }} second(s).
            </vue-countdown>
          </h4>
        </div>
      </div>  
      <div data-depth="0.9" class="desktop-only">
        <img
          alt="logo"
          src="/flower.png"
          style="width: 15vh; height: 15vh; margin: auto; display: block; position: absolute; top: 10px; right: 10px"
        >
      </div>
       <div data-depth="0.9">
        <img
          alt="logo"
          src="/flower1.png"
          style="width: 30vh; height: 15vh; margin: auto; display: block; position: absolute; bottom: 0; left: calc(50vw - 15vh)"
        >
      </div>
      <div data-depth="0.9" class="desktop-only">
        <img
          alt="logo"
          src="/flower2.png"
          style="width: 25vh; height: 25vh; margin: auto; display: block; position: absolute; bottom: 0; left: 0; transform: rotate(45deg)"
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: 'PageIndex',
  data () {
    return {
      countdownTime: (new Date('06/14/2021 12:00') - Date.now())
    }
  },
  components: {
    VueCountdown
  },
  mounted: function () {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene,  {
      relativeInput: true
    });
  }
}
</script>
<style lang="scss" scoped>
#scene {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url('../../public/bg1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  > div {
    height: 100%;
    width: 100%;
  }
}
#layer2 {
  position: absolute;
  width: 100%;
  top: 35vh;
}

@media (max-width: $breakpoint-xs-max) {
  #scene {
    background-position-y: 50%;
  }
}
</style>

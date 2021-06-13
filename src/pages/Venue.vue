<template>
  <q-page
    class="flex content-center flex-center venye-page q-py-md q-px-xl"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'"
  >
    <h4 class="full-width text-secondary text-center text-bold q-mb-sm">
      Venue
    </h4>
    <div class="full-width flex justify-center items-end">
      venue details
    </div>
    <h4 class="full-width text-warning text-center text-bold q-ma-lg">
      Location
    </h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6113780631786!2d80.22270671550915!3d12.803718822002372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525082143f7b2f%3A0xa260284c0ac52c7!2sDays%20Hotel%20by%20Wyndham%20Chennai%20OMR!5e0!3m2!1sen!2sin!4v1623472815134!5m2!1sen!2sin"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </q-page>
</template>

<script>
export default {
  name: "Venue"
};
</script>

<template>
  <q-page
    class="flex content-center flex-center venye-page q-py-md q-px-xl"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'"
  >
    <h4 class="full-width text-accent text-center text-bold q-mb-sm">
      Contact Bride
    </h4>
    <div class="full-width flex justify-center">
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="tel:+91-9344292693"
        target="_blank"
        flat
        icon="img:./icons/call.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          Mobile
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="mailto:drdianna@live.com?subject=Hello&body=Congratulations Guys"
        target="_blank"
        flat
        icon="img:./icons/mail.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          E-Mail
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="https://api.whatsapp.com/send?phone=919344292693&text=Congratulations%20Guys!"
        target="_blank"
        flat
        icon="img:./icons/whatsapp.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          Whatsapp
        </q-tooltip>
      </q-btn>
    </div>
    <h4 class="full-width text-secondary text-center text-bold q-mb-sm">
      Contact Groom
    </h4>
    <div class="full-width flex justify-center">
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="tel:+91-7604892916"
        target="_blank"
        flat
        icon="img:./icons/call.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          Mobile
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="mailto:arvindanuram@gmail.com?subject=Hello&body=Congratulations Guys"
        target="_blank"
        flat
        icon="img:./icons/mail.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          E-Mail
        </q-tooltip>
      </q-btn>
      <q-btn
        round
        class="transparent q-mx-md"
        type="a"
        href="https://api.whatsapp.com/send?phone=917604892916&text=Congratulations%20Guys!"
        target="_blank"
        flat
        icon="img:./icons/whatsapp.png"
      >
        <q-tooltip anchor="top middle" self="bottom middle">
          Whatsapp
        </q-tooltip>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Contact"
};
</script>

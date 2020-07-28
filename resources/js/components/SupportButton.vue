<template>

  <div>

    <button class="tw-text-transparent-50 hover:tw-text-white" @click="$modal.show('contact-support-modal')">
      Support
    </button>

    <modal name="contact-support-modal">
      <div>

        contents

      </div>
    </modal>
  </div>

</template>

<script>

export default {};

</script>

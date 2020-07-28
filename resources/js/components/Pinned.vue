<template>

  <div>

    <slot>

      <!-- data in blade will be default here -->

    </slot>

  </div>

</template>

<script>

import {throttle} from 'lodash';

export default {

  mounted() {
    let el = this.$el;
    let originalOffsetTop = this.$el.offestTop;

    window.addEventListener('scroll', throttle(function() {

      el.classlist[
        window.scrollY >=originalOffsetTop ? 'add' : 'remove'
      ]('is-fixed-top');

    }, 300)
  );

  }

};

</script>

//imports
import {throttle} from 'lodash';

export default {

  components: {

    //import vues e.g AboutDropdown,

  },

  mounted() {
    let bar = this.$refs['ref.name in blade'];
    let originalOffsetTop = this.$refs['ref.name in blade'].offsetTop;

    window.addEventListener('scroll', throttle(function() => {

      if (window.scrollY >= originalOffsetTop) {
        bar.classList.add('tw-fixed-to-top');

      } else {
        bar.classList.remove('tw-fixed-to-top');
      }

    }, 300)
  );

  }

};

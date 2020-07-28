<template>

<div @mouseover="active = true" class="inline" @mouseout="active = false">

<a href="/about" class="tw-px-8 md:tw-flex-1 tw-uppercase tw-text-transparent-50 tw-font-blod hover:tw-text-black tw-pb-8">About</a>


<portal to="nav-after">

  <div v-show="active" class="tw-absolute tw-w-full tw-z-10" @mouseover="active = true" @mouseout="active = false" style="height: 300px">
    <div class="tw-container tw-mx-auto tw-py-8">
      hello
    </div>
  </div>

</portal>


</div>
</template>

<script>

export default{

data() {

  return { active:false };

  }

};

</script>

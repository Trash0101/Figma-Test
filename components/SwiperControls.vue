<script setup lang="ts">
const viewedStore = useViewedStore();
const swiper = useSwiper();

</script>

<template>
  <div class="buttons">
    <PHCaretLeft
      @click="
        swiper.slidePrev();
      "
      class="buttons__direction"
    ></PHCaretLeft>
    <div class="buttons__text">
      <span class="buttons__text--big">{{ viewedStore.currentPage }}</span
      >/{{ viewedStore.pagesCount }}
    </div>
    <PHCaretRight
      @click="
        swiper.slideNext();
      "
      class="buttons__direction"
    ></PHCaretRight>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  &__direction {
    color: white;
    padding: 1rem;
    width: 5rem;
    height: 5rem;
    clip-path: circle(2rem);
    background-color: $buttons__slider;
    cursor: pointer;
  }
  &__text {
    font-size: 1.8rem;
    color: $font__secondary;
    &--big {
      color: $font__main;
      font-size: 2.4rem;
    }
  }
}
</style>

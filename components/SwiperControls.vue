<script setup lang="ts">
const viewedStore = useViewedStore();
const swiper = useSwiper();
const slidesPerPage = ref(4);
const currentPage = ref(1);
const totalPages = computed(() => {
  return Math.ceil(viewedStore.viewedItems.length / slidesPerPage.value);
});
const nextSlide = () => {
  if (currentPage.value <= totalPages.value - 1) {
    currentPage.value++;
  }
};
const prevSlide = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="buttons">
    <PHCaretLeft
      @click="
        swiper.slidePrev();
        prevSlide();
      "
      class="buttons__direction"
    ></PHCaretLeft>
    <div class="buttons__text">
      <span class="buttons__text--big">{{ currentPage }}</span
      >/{{ totalPages }}
    </div>
    <PHCaretRight
      @click="
        swiper.slideNext();
        nextSlide();
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
    font-size: 0.8rem;
    color: $font__secondary;
    &--big {
      color: $font__main;
      font-size: 1.6rem;
    }
  }
}
</style>

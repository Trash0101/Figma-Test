<script setup lang="ts">
import type Swiper from "swiper";

const viewedStore = useViewedStore();
const changeSlide = (e:Swiper)=> {
  console.log(e.snapIndex)
  viewedStore.currentPage = e.snapIndex+1
}
</script>

<template>
  <swiper
    class="carousel"
    :slides-per-view="4"
    :slides-per-group="4"
    :space-between="10"
    @slideChange="changeSlide"
  >
    <template v-slot:container-start><div class="carousel__head">
      <div class="carousel__head--text">Просмотренные товары</div>
      <swiper-controls></swiper-controls>
    </div></template>
    <swiper-slide
      class="carousel__slide"
      :loop="true"
      v-for="item in viewedStore.viewedItems"
      :key="item.id"
    >
      <cart-carousell-item :item="item"></cart-carousell-item>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  grid-row: 5;
  grid-column: 1/3;
  width: 100%;
  display: flex;
  flex-direction: column;
  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  &__slide {
    margin-bottom: 2rem;
  }
}
</style>

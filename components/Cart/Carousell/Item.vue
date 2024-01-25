<script setup lang="ts">
import type { CatalogueItem } from "~/types/types";
const props = defineProps<{
  item: CatalogueItem;
}>();
</script>

<template>
  <div class="container">
    <img class="container__img" :src="item.img" alt="item_img" />
    <div class="container__head">{{ item.name }}</div>
    <div class="container__des">{{ item.description }}</div>
    <div class="container__price--rub">
      {{ item.price }} ₽ — {{ item.priceMax }} ₽
    </div>
    <div class="container__price--eur">
      {{ item.priceEUR }} € — {{ item.priceEURMax }} €
    </div>
    <button class="container__but">Подробнее</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: $background__grey;
  border-radius: 1rem;
  &__img {
    max-height: 60%;
  }
  &__head {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: start;
    margin-bottom: 0.5rem;
  }
  &__des {
    margin-bottom: 3rem;
  }
  &__price--rub {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  &__price--eur {
    font-size: 1.2rem;
    color: $font__secondary;
    margin-bottom: 1rem;
  }
  &__but {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
    color: white;
    background-color: $buttons;
    border: none;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

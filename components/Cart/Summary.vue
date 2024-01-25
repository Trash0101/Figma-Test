<script setup lang="ts">
import { useCartStore } from "#imports";
import { $fetch } from "ofetch";
import type { ItemAPI } from "~/types/types";
const cartStore = useCartStore();
const installStatus = computed(() => {
  if (cartStore.installationStatus) {
    return "Да";
  } else {
    return "Нет";
  }
});
const sendRequest = async () => {
  try {
    const cartAPI:ItemAPI[] = [];
    cartStore.cartItems.forEach((el) => {
      cartAPI.push({
        id: el.id,
        quantity: el.quantity,
      });
    });
    const res = await $fetch("example.com/api", {
      method: "POST",
      body: {
        userId: "example",
        cartAPI,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <section class="summary">
    <div class="summary__head">Итого</div>
    <div class="summary__block">
      <div class="summary__block--left">Сумма заказа</div>
      <div class="summary__block--right">{{ cartStore.totalPrice }} ₽</div>
    </div>
    <div class="summary__block">
      <div class="summary__block--left">Количество</div>
      <div class="summary__block--right">{{ cartStore.totalQuantity }}</div>
    </div>
    <div class="summary__block summary__block--line">
      <div class="summary__block--left">Установка</div>
      <div class="summary__block--right">{{ installStatus }}</div>
    </div>
    <div class="summary__block summary__big">
      <span class="summary__big--left">Стоимость товаров</span>
      <span class="summary__big--right">{{ cartStore.totalPrice }} ₽</span>
    </div>
    <button class="summary__button" @click="sendRequest">Оформить заказ</button>
    <button class="summary__button summary__button--hollow">
      Купить в 1 клик
    </button>
  </section>
</template>

<style scoped lang="scss">
.summary {
  padding: 1.5rem 2rem;
  height: 80%;
  width: 100%;
  grid-column: 2;
  grid-row: 3;
  background-color: $background__grey;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  justify-content: center;
  &__head {
    padding: 0.5rem 1rem;
    font-size: 2.4rem;
    font-weight: 600;
  }
  &__block {
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    &--line {
      border-bottom: solid 0.1rem $font__secondary;
    }
  }
  &__big {
    align-items: flex-end;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    &--left {
      font-weight: 500;
      font-size: 1.2rem;
    }
    &--right {
      padding: 0;
      font-weight: 600;
      font-size: 2.4rem;
    }
  }
  &__button {
    font-size: 1.8rem;
    padding: 1.4rem 4rem;
    color: white;
    background-color: $buttons;
    border: none;
    border-radius: 0.4rem;
    margin-bottom: 1rem;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
    &--hollow {
      color: $buttons;
      background-color: white;
      border: solid 0.1rem $buttons;
    }
  }
}
</style>

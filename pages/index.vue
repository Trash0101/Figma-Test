<script setup lang="ts">
import { useCartStore } from "#imports";
import namingChoice from "~/composables/namingChoice";

const cartStore = useCartStore();
const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore);
const cartItemsNaming = computed(() => {
  const quantity = totalItems.value;
  const text = namingChoice(quantity);
  return `${quantity} ${text}`;
});
</script>

<template>
  <div class="grid">
    <div class="cart">
      <PHShoppingCart class="cart__icon"></PHShoppingCart>
      <div class="cart__info">
        <div class="cart__info--highlight">Ваша корзина</div>
        <div class="cart__info--quantity">{{ cartItemsNaming }}</div>
        <div class="cart__info--price">{{ totalPrice }} ₽</div>
      </div>
    </div>
    <div class="link">
      <NuxtLink class="link__main" to="/">Главная</NuxtLink
      ><span class="link__arrow">⊳</span><span class="link__cart">Корзина</span>
    </div>
    <lazy-cart-items v-if="cartStore.cartItems.length"></lazy-cart-items>
    <cart-summary v-if="cartStore.cartItems.length"></cart-summary>
    <div class="cart__empty" v-if="!cartStore.cartItems.length">
      Ваша корзина пуста
    </div>
    <cart-carousell></cart-carousell>
  </div>
</template>

<style scoped lang="scss">
.grid {
  padding: 5rem 20vw;
  height: 120vh;
  display: grid;
  grid-template-rows: 5% 5% 50% 10% 30%;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;
  column-gap: 4rem;
}
.link {
  padding: 1.5rem 2rem;
  grid-column: 1;
  grid-row: 2;
  justify-self: start;
  display: flex;
  gap: 0.5rem;
  &__main {
    text-decoration: none;
    &:hover {
      color: $buttons;
    }
    &:active {
      color: $buttons;
    }
    &:visited {
      color: $buttons;
    }
  }
}
.cart {
  grid-row: 1;
  grid-column: -2;
  align-self: center;
  justify-self: end;
  display: flex;
  align-items: center;
  &__icon {
    color: $buttons;
    font-size: 3.6rem;
  }
  &__info {
    display: flex;
    flex-direction: column;
    &--highlight {
      padding: 0.1rem 0.2rem;
      font-size: 1.2rem;
    }
    &--quantity {
      padding: 0.1rem 0.2rem;
      font-size: 0.8rem;
      color: $font__secondary;
    }
    &--price {
      padding: 0.1rem 0.2rem;
      font-size: 1.2rem;
    }
  }
  &__empty {
    grid-row: 3/5;
    grid-column: 1/5;
    text-align: center;
    align-self: center;
    justify-self: center;
    font-size: 3.6rem;
    color: $buttons;
  }
}
</style>

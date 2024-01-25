<script setup lang="ts">
import { useCartStore } from "#imports";
import namingChoice from "~/composables/namingChoice";

const cartStore = useCartStore();
const { cartItems, totalQuantity, totalPrice, installationStatus } =
  storeToRefs(cartStore);
const cartItemsNaming = computed(() => {
  const quantity = totalQuantity.value;
  const text = namingChoice(quantity);
  return `${quantity} ${text}`;
});
const cleanCart = () => {
  cartStore.clearCart();
};
const switchInst = () => {
  cartStore.switchInstallation();
};
</script>

<template>
  <section class="cart-items">
    <div class="cart-items__head">
      <h1 class="cart-items__head--bold">
        Ваша корзина
        <span class="cart-items__head--count"> {{ cartItemsNaming }}</span>
      </h1>
      <div class="cart-items__head--button" @click="cleanCart">
        Очистить корзину
      </div>
    </div>
    <div class="cart-items__list">
      <cart-item
        v-for="item in cartItems"
        :key="item.id"
        :cart-item="item"
      ></cart-item>
    </div>
    <div class="installation" @click="switchInst">
      <input
        id="checkbox"
        type="checkbox"
        class="installation__check"
        v-model="installationStatus"
      />
      <PHToolbox class="installation__ico"></PHToolbox>
      <div class="installation__text">
        <label for="checkbox" class="installation__text--top">Установка</label>
        <span class="installation__text--bottom"
          >Отметьте, если Вам необходима консультация профессионала по монтажу
          выбранных товаров.</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cart-items {
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 3/5;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  align-self: start;
  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--bold {
      font-size: 4.4rem;
      padding: 0.5rem 1rem;
    }
    &--count {
      font-size: 1.8rem;
      color: $font__secondary;
    }
    &--button {
      font-size: 1.4rem;
      text-decoration: underline;
      color: $font__secondary;
      justify-self: end;
      cursor: pointer;
    }
  }
  &__list {
    //overflow: scroll;
    > *:not(:last-child) {
      border-bottom: solid 0.1rem $font__secondary;
    }
    margin-bottom: 4rem;
  }
}
.installation {
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  background-color: $background__grey;
  padding: 1.5rem 2rem;
  gap: 1rem;
  cursor: pointer;
  &__ico {
    padding: 0.5rem;
    color: $buttons;
    font-size: 3.6rem;
    background-color: white;
    border-radius: .2rem;
  }
  &__text {
    display: flex;
    flex-direction: column;
    &--top {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: .5rem;
      line-height: 145%;
    }
    &--bottom {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 150%;
      color: $font__secondary;
    }
  }
}
</style>

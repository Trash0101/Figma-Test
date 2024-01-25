<script setup lang="ts">
import type { CartItem } from "~/types/types";
import { useCartStore } from "#imports";
const cartStore = useCartStore();
const props = defineProps<{
  cartItem: CartItem;
}>();
const additionalInfoString = computed(() => {
  if (props.cartItem.additionalInfo) {
    return props.cartItem.additionalInfo.join(" / ");
  }
});
const priceString = computed(() => {
  let price = props.cartItem.price + "";
  if (price.length > 4) {
    price = price.slice(0, 2) + " " + price.slice(2);
  }
  return price;
});
const priceStringTotal = computed(() => {
  let price = props.cartItem.totalPrice + "";
  if (price.length > 4) {
    price = price.slice(0, 2) + " " + price.slice(2);
  }
  return price;
});
const decrease = () => {
  cartStore.removeExistingItem(props.cartItem.id);
};
const increase = () => {
  cartStore.addExistingItem(props.cartItem.id);
};
const deleteItem = () => {
  cartStore.deleteItem(props.cartItem.id);
};
</script>

<template>
  <div class="item">
    <img class="item_img" src="" alt="item_photo" />
    <div class="item__description">
      <span class="item__description--name">{{ props.cartItem.name }}</span>
      <span class="item__description--additional">{{
        additionalInfoString
      }}</span>
      <span class="item__description--id"
        >Артикул: {{ props.cartItem.id }}</span
      >
    </div>
    <div class="item__buttons">
      <button class="item__buttons--minus" @click="decrease">-</button>
      <button class="item__buttons--quantity">
        {{ props.cartItem.quantity }}
      </button>
      <button class="item__buttons--plus" @click="increase">+</button>
      <div class="item__buttons--ppu" v-if="props.cartItem.quantity > 1">
        {{ priceString }} ₽/шт
      </div>
    </div>
    <div class="item__price">{{ priceStringTotal }} ₽</div>
    <PHX class="item__delete" @click="deleteItem"></PHX>
  </div>
</template>

<style scoped lang="scss">
.item {
  padding: 1.5rem 2rem;
  height: 12rem;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  &__img {
    max-width: 10rem;
  }
  &__description {
    display: flex;
    flex-direction: column;
    &--name {
      font-weight: 600;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    &--additional {
      font-weight: 400;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    &--id {
      color: $font__secondary;
      font-size: 1.4rem;
    }
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    & > * {
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
      margin: 0.2rem;
      background: $buttons__cart;
      border: none;
    }
    &--minus {
      &:hover {
        cursor: pointer;
      }
    }
    &--plus {
      &:hover {
        cursor: pointer;
      }
    }
    &--ppu {
      font-size: 1.2rem;
      background-color: transparent;
      position: absolute;
      bottom: -2.5rem;
    }
  }
  &__price {
    font-size: 1.8rem;
    font-weight: 500;
  }
  &__delete {
    font-size: 1.6rem;
    position: absolute;
    right: 0;
    top: 1.5rem;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

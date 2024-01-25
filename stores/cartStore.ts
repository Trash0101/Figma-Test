import { defineStore } from "pinia";
import type { CartItem } from "~/types/types";
import formatPrice from "~/composables/formatPrice";

export const useCartStore = defineStore("cart", () => {
  const installationStatus = ref(false);
  const switchInstallation = () => {
    installationStatus.value = !installationStatus.value;
  };
  const cartItems = ref<CartItem[]>([
    {
      img: "link",
      totalPrice: 12644,
      quantity: 1,
      id: "G2H1065",
      name: "Вытяжное устройство G2H",
      price: 12644,
      additionalInfo: [
        "12-72",
        "168м²/ч",
        "гидрорегулируемый расход",
        "от датчика присутствия",
      ],
    },
    {
      img: "link",
      totalPrice: 12644 * 2,
      quantity: 2,
      id: "G2H1066",
      name: "Вытяжное устройство BXC",
      price: 12644,
      additionalInfo: [
        "12-72",
        "168м²/ч",
        "гидрорегулируемый расход",
        "от датчика присутствия",
      ],
    },
    {
      img: "link",
      totalPrice: 12644,
      quantity: 1,
      id: "G2H1067",
      name: "Вытяжное устройство GHN",
      price: 12644,
      additionalInfo: [
        "12-72",
        "168м²/ч",
        "гидрорегулируемый расход",
        "от датчика присутствия",
      ],
    },
  ]);

  const totalPrice = computed(() => {
    let price = 0;
    cartItems.value.forEach((el) => {
      price += el.price * el.quantity;
    });
    return  formatPrice(price);
  });
  const totalQuantity = computed(() => {
    let quantity = 0;
    cartItems.value.forEach((el) => {
      quantity += el.quantity;
    });
    return quantity;
  });
  const totalItems = computed(() => {
    return cartItems.value.length;
  });
  const addExistingItem = (id: string) => {
    const desiredIndex = cartItems.value.findIndex((el) => {
      return el.id === id;
    });
    if (desiredIndex === -1) {
      return false;
    } else {
      cartItems.value[desiredIndex].quantity++;
      cartItems.value[desiredIndex].totalPrice =
        cartItems.value[desiredIndex].quantity *
        cartItems.value[desiredIndex].price;
    }
  };
  const removeExistingItem = (id: string) => {
    const desiredIndex = cartItems.value.findIndex((el) => {
      return el.id === id;
    });
    if (desiredIndex === -1) {
      return false;
    } else {
      if (cartItems.value[desiredIndex].quantity === 1) {
        cartItems.value.splice(desiredIndex, 1);
      } else {
        cartItems.value[desiredIndex].quantity--;
        cartItems.value[desiredIndex].totalPrice =
          cartItems.value[desiredIndex].quantity *
          cartItems.value[desiredIndex].price;
      }
    }
  };
  const deleteItem = (id: string) => {
    const desiredIndex = cartItems.value.findIndex((el) => {
      return el.id === id;
    });
    if (desiredIndex === -1) {
      return false;
    } else {
      cartItems.value.splice(desiredIndex, 1);
    }
  };
  const clearCart = () => {
    cartItems.value = [];
  };
  const isCartEmpty = computed(() => {
    return !cartItems.value.length;
  });
  return {
    installationStatus,
    switchInstallation,
    cartItems,
    totalPrice,
    totalQuantity,
    totalItems,
    addExistingItem,
    removeExistingItem,
    deleteItem,
    clearCart,
    isCartEmpty,
  };
});

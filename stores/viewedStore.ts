import { defineStore } from "pinia";
import type { CatalogueItem } from "~/types/types";

export const useViewedStore = defineStore("viewed", () => {
  const viewedItems = ref<CatalogueItem[]>([
    {
      img: "link",
      id: "example1",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example2",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example3",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example4",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example5",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example6",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example7",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
    {
      img: "link",
      id: "example8",
      name: "BXC",
      price: 6848,
      priceMax: 56584,
      priceEUR: 77.6,
      priceEURMax: 643.86,
      description: "Вытяжное устройство для механической системы вентиляции",
    },
  ]);
  const itemsPerPage = ref(4)
  const pagesCount = computed(()=> {
    return Math.floor(viewedItems.value.length/itemsPerPage.value)
  })
  const currentPage = ref(1)
  return {
    viewedItems,
    pagesCount,
    currentPage,
  };
});

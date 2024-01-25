export default function (quantity: number) {
  if (quantity === 1) {
    return "товар";
  } else if (quantity < 5 && quantity > 1) {
    return "товара";
  } else {
    return "товаров";
  }
}

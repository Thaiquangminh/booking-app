export default function calculateDiscount(oldPrice, newPrice) {
  const different = Number(oldPrice) - Number(newPrice);
  return ((different / Number(oldPrice)) * 100).toFixed();
}

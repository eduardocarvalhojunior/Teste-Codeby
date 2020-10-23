const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

const parseProducts = (products = []) => {return products.reduce((acc, cur) => {
    const [key, value] = cur.split('-');
    const hasKey = Object.keys(acc).includes(key);
    if (!hasKey) {
      acc[key] = {};
    }
    const hasValue =  
    Object.keys(acc[key]).includes(value);
    acc[key][value] = !hasValue
      ? 1
      : ++acc[key][value];
    return acc;
  }, 
  {})
}
module.exports = () => {
  return parseProducts(products);}
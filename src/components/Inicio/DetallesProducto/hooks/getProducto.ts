export const getProductoById = <T extends { id: string }>(
  id: string | undefined,
  producto: T[]
): T | undefined => producto.find((product) => product.id === id);

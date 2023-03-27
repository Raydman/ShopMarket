import {ProductItem} from 'types/product'

export async function getProducts({
  limit,
  page,
}: {
  limit: number
  page: number
}): Promise<{products: Array<ProductItem>; totalProducts: number}> {
  const response: Array<ProductItem> = await (await fetch('http://localhost:3000/api/data')).json()
  const paginatedProducts = response.slice((page - 1) * limit, page * limit)

  return {products: paginatedProducts, totalProducts: response.length}
}

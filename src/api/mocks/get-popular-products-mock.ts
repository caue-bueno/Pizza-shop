import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 1 },
    { product: 'Pizza 2', amount: 3 },
    { product: 'Pizza 3', amount: 7 },
    { product: 'Pizza 4', amount: 11 },
    { product: 'Pizza 5', amount: 2 },
    { product: 'Pizza 6', amount: 16 },
  ])
})

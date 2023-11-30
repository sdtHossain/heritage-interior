export const isProd = process.env.NODE_ENV === 'production'
export const ENTRYPOINT = isProd
  ? 'https://revashop.revanus.com/api'
  : 'https://revashop.revanus.com/api'
export const STRIPE_KEY = isProd
  ? 'pk_test_51MZNZTLhe1zVvESGyR9g1GMWgZPkm39NRGvQgl6zSYxoeAHqZp8epBATtWzrHvBeXX1y3SUTsGE84MlkoLbdvoAo004zKcEn9h'
  : 'pk_test_51MZNZTLhe1zVvESGyR9g1GMWgZPkm39NRGvQgl6zSYxoeAHqZp8epBATtWzrHvBeXX1y3SUTsGE84MlkoLbdvoAo004zKcEn9h'

// Prod Stripe
// pk_live_51MZNZTLhe1zVvESGmJzPU1LccZCVNsWMHehxR3ybhkzwe9d8e5AJg97mTXjUfx0FUYSbnRt7v2KonDsqqf1Cgsdd00ym43NtDO

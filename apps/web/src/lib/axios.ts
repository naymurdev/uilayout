import axios from 'axios'

export const LEMON_SQUEEZY_ENDPOINT = 'https://api.lemonsqueezy.com/v1'

export const lemonSqueezyApiInstance = axios.create({
  baseURL: LEMON_SQUEEZY_ENDPOINT,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY}`,
  },
})

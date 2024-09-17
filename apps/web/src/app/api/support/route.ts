import { lemonSqueezyApiInstance } from '@/lib/axios'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json()

    if (!reqData.productId)
      return Response.json(
        { message: 'productId is required' },
        { status: 400 }
      )
    const response = await lemonSqueezyApiInstance.post('/checkouts', {
      data: {
        type: 'checkouts',

        relationships: {
          store: {
            data: {
              type: 'stores',
              id: process.env.NEXT_PUBLIC_STORE_API_KEY?.toString(),
            },
          },
          variant: {
            data: {
              type: 'variants',
              id: reqData.productId.toString(),
            },
          },
        },
      },
    })

    const checkoutUrl = response.data.data.attributes.url

    console.log(checkoutUrl, response.data)
    return Response.json({ checkoutUrl })
  } catch (err) {
    console.log(err)
    Response.json({ message: 'An Error Occured' }, { status: 500 })
  }
}

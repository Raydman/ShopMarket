import {getProducts} from 'common/server-helpers'
import {Home} from 'Home'

async function Page({params}: {params: {page: number}}) {
  const products = await getProducts({limit: 10, page: params.page})

  return <Home productsData={products} />
}

export default Page

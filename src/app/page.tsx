import {getProducts} from 'common/server-helpers'
import {Home} from 'Home'

async function Page() {
  const products = await getProducts({limit: 10, page: 1})

  return <Home productsData={products} />
}

export default Page

import {Fragment, memo} from 'react'
import {ProductItem} from 'types/product'
import {ProductsList} from './ProductsList'
import {Pagination} from './Pagination'
import styles from './home.module.css'

export const Home = memo(function Home(props: {productsData: {products: Array<ProductItem>; totalProducts: number}}) {
  return (
    <Fragment>
      <ProductsList products={props.productsData.products} />
      <Pagination className={styles.pagination} totalItems={props.productsData.totalProducts} />
    </Fragment>
  )
})

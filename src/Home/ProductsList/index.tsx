'use client'
import cn from 'classnames'
import {memo} from 'react'
import {ProductItem} from 'types/product'
import {Product} from './Product'
import styles from './productList.module.css'

export const ProductsList = memo(function ProductsList(props: {className?: string; products: Array<ProductItem>}) {
  return (
    <div className={cn(styles.productList, props.className)}>
      {props.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  )
})

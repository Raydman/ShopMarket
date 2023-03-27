import cn from 'classnames'
import Image from 'next/image'
import {memo} from 'react'
import styles from './product.module.css'
import {Info} from './Info'
import {Badge} from './Badge'
import {ProductItem} from 'types/product'

export const Product = memo(function Product(props: {className?: string; product: ProductItem}) {
  return (
    <div className={cn(styles.product, props.className)}>
      <div className={styles.imageWrapper}>
        {props.product.image && (
          <Image className={styles.image} src={`/images/${props.product.image}`} width={300} height={600} alt="badge" />
        )}
        {props.product.badge && <Badge title={props.product.badge} />}
      </div>
      <Info className={styles.info} title={props.product.name} brand={props.product.brand} />
    </div>
  )
})

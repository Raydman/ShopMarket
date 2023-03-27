import cn from 'classnames'
import {memo} from 'react'
import styles from './info.module.css'

export const Info = memo(function Info(props: {className?: string; title: string; brand: string}) {
  return (
    <div className={cn(props.className)}>
      <div className={styles.name}>{props.title}</div>
      <div className={styles.brand}>{props.brand}</div>
    </div>
  )
})

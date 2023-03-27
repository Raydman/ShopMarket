import cn from 'classnames'
import {memo} from 'react'
import styles from './badge.module.css'

export const Badge = memo(function Badge(props: {className?: string; title: string}) {
  return <div className={cn(styles.badge, props.className)}>{props.title}</div>
})

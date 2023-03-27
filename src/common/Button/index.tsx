import cn from 'classnames'
import Link from 'next/link'
import {memo, ReactNode} from 'react'
import styles from './button.module.css'

export const Button = memo(function Button(
  props: {
    className?: string
    children: ReactNode
    color: 'default' | 'success' | 'danger'
    size?: 'large'
    isBlockButton?: boolean
    isDisabled?: boolean
    onClick?: VoidFunction
  } & (
    | {
        asLink: boolean
        href: string
      }
    | {
        asLink?: never
        href?: never
      }
  )
) {
  if (props.asLink) {
    return (
      <Link
        className={cn(
          styles.button,
          props.className,
          {[styles.default]: props.color === 'default'},
          {[styles.success]: props.color === 'success'},
          {[styles.danger]: props.color === 'danger'},
          {[styles.large]: props.size === 'large'},
          {[styles.block]: props.isBlockButton},
        )}
        href={props.href}
      >
        {props.children}
      </Link>
    )
  }

    return (
      <button
        className={cn(
          styles.button,
          props.className,
          {[styles.default]: props.color === 'default'},
          {[styles.success]: props.color === 'success'},
          {[styles.danger]: props.color === 'danger'},
          {[styles.disabled]: props.isDisabled},
          {[styles.large]: props.size === 'large'},
          {[styles.block]: props.isBlockButton},
        )}
        type="button"
        disabled={props.isDisabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
  
})

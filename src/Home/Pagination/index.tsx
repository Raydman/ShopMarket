'use client'
import {Button} from 'common/Button'
import {memo, useCallback} from 'react'
import {usePathname, useRouter} from 'next/navigation'
import cn from 'classnames'
import styles from './pagination.module.css'

export const Pagination = memo(function Pagination(props: {className?: string; totalItems: number}) {
  const router = useRouter()
  const pathname = usePathname()

  const pages = Math.ceil(props.totalItems / 10);
  const currentPage = parseInt(pathname.slice(1)) || 1

  const previousPage = useCallback(() => {
    if (currentPage > 1) {
      router.push(`/${currentPage - 1}`);
    }
  }, [router])

  const nextPage = useCallback(() => {
    if (currentPage < pages) {
      router.push(`/${currentPage + 1}`);
    }
  }, [router])
  return (
    <div className={cn(styles.container, props.className)}>
      <Button color="default" isDisabled={currentPage === 1} onClick={previousPage}>
        Previous
      </Button>
      <input className={styles.input} value={currentPage} />
      <Button color="success" isDisabled={currentPage === pages} onClick={nextPage}>
        Next
      </Button>
    </div>
  )
})

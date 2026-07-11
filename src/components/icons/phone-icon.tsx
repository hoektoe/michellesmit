import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function PhoneIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      role="image"
      className={clsx('inline-block', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l.879 3.518a1.125 1.125 0 0 1-.417 1.151l-1.293.97a.75.75 0 0 0-.214.864 12.035 12.035 0 0 0 7.477 7.477.75.75 0 0 0 .864-.214l.97-1.293a1.125 1.125 0 0 1 1.151-.417l3.518.879c.501.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-1.5C9.905 21.75 2.25 14.095 2.25 4.5Z"
      />
    </svg>
  )
}

import Link from 'next/link'
import { FC, ReactNode } from 'react'
export interface ButtonProps {
  color: 'green'
  href: string
  children?: ReactNode
}
export const ButtonLink: FC<ButtonProps> = (props) => {
  return (
    <Link
      href={props.href}
      className={`font-alt inline-block 
          rounded-full bg-green-500 px-5 py-3 text-sm uppercase
           leading-none text-black hover:bg-green-600`}
    >
      {props.children}
    </Link>
  )
}

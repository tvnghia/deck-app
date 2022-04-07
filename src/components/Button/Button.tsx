import clsx from 'clsx'
import React, { FC } from 'react'
import s from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'dark' | 'warning' | 'secondary' | 'danger'
  size?: 'lg' | 'md' | 'sm'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: FC<ButtonProps> = ({ type, size = 'md', children, ...props }) => (
  <button className={clsx(s.root, type, size)} {...props}>
    {children}
  </button>
)

export default Button

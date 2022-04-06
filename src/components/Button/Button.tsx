import clsx from 'clsx'
import React, { FC } from 'react'
import s from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'dark' | 'warning' | 'secondary' | 'danger'
  size?: 'lg' | 'md' | 'sm'
}

const Button: FC<ButtonProps> = ({ type, size = 'md', children }) => (
  <button className={clsx(s.root, type, size)}>{children}</button>
)

export default Button

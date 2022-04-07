import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import s from './Popup.module.scss'

interface PopupElProps {
  visible: boolean
  message: string
}

const PopupEl = ({ visible = false, message = '' }: PopupElProps) => {
  return (
    <>
      {visible ? (
        <div className={s.root}>
          <p className={s.title}>Notification</p>
          <p className={s.message}>{message}</p>
        </div>
      ) : null}
    </>
  )
}

export const Popup = (props: PopupElProps) => {
  const el = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    const target = document.body
    target.appendChild(el)

    return () => {
      target.removeChild(el)
    }
  }, [el])

  return ReactDOM.createPortal(<PopupEl {...props} />, el)
}

export default Popup

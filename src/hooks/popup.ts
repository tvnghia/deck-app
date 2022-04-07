import { useEffect, useState } from 'react'

export const usePopup = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [visible])

  return {
    visible,
    message,
    setMessage,
    setVisible,
  }
}

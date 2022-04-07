import { useEffect, useState } from 'react'

export const usePopup = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [visible])

  return {
    visible,
    message,
    setMessage,
    setVisible,
  }
}

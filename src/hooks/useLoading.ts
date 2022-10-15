import { useState } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return { loading }
}

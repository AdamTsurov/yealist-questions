import { useEffect, useState } from 'react'

export const useResize = (data, ref, collapsedHeight) => {
  const [showExpandBtn, setShowExpandBtn] = useState(false)
  const items = data

  useEffect(() => {
    const checkHeight = () => {
      if (ref.current) {
        const isToBig = ref.current.scrollHeight > collapsedHeight
        setShowExpandBtn(isToBig)
      }
    }
    checkHeight()

    window.addEventListener('resize', checkHeight)

    return () => window.removeEventListener('resize', checkHeight)
  }, [items.data, ref, collapsedHeight])

  return { showExpandBtn, setShowExpandBtn }
}

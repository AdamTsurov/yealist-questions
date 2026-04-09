import { useEffect, useState, type RefObject } from 'react'

export const useResize = (
  data: unknown[], // или конкретный тип, например Skill[]
  ref: RefObject<HTMLDivElement | null>,
  collapsedHeight: number
) => {
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
  }, [items, ref, collapsedHeight])

  return { showExpandBtn, setShowExpandBtn }
}

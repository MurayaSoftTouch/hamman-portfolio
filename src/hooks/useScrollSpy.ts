import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently crossing the middle band of the viewport,
 * or `null` when none is (for example at the very top of the page).
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const el of elements) observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [ids])

  return activeId
}

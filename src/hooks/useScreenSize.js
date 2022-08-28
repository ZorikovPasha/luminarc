import React from 'react'
import { SCREEN_SIZES } from "../utils/const"

export const useScreenSize = (screenSize=SCREEN_SIZES.desktop) => {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > screenSize) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    window.addEventListener("resize", onResize)
    onResize()
  }, [screenSize])

  return isDesktop
}

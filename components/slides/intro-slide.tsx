import type { CSSProperties } from "react"

interface IntroSlideProps {
  displayedIntroText: string
  titleTextShadowStyle: CSSProperties
}

export default function IntroSlide({ displayedIntroText, titleTextShadowStyle }: IntroSlideProps) {
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-light mb-8" style={titleTextShadowStyle}>
          {displayedIntroText}
        </p>
      </div>
    </div>
  )
}

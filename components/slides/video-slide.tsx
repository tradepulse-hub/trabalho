import type { CSSProperties } from "react"
import Image from "next/image"

interface VideoSlideProps {
  displayedMainTitle: string
  titleTextShadowStyle: CSSProperties
}

export default function VideoSlide({ displayedMainTitle, titleTextShadowStyle }: VideoSlideProps) {
  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/delicious-hamburger-on-fire-free-video-NLrJxvURKplMaHp3x3LtswukSiDQmd.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <div className="absolute top-8 right-8">
          <Image
            src="/images/hamburgueria-vila-nova-logo.png"
            alt="Hamburgueria Vila Nova Logo"
            width={120}
            height={120}
            className="opacity-90"
          />
        </div>

        {/* Título principal restaurado para a posição central */}
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={titleTextShadowStyle}>
            {displayedMainTitle}
          </h1>
        </div>
      </div>
    </div>
  )
}

import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function SwotAnalysisSlide1({ titleTextShadowStyle, commonSlideStyle, headingStyle }: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Análise SWOT
      </h1>
      <div className="max-w-4xl">
        <Image
          src="/images/swot-chart.png" // Caminho da imagem
          alt="Análise SWOT"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  )
}

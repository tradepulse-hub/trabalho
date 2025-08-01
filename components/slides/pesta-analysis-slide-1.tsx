import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function PestaAnalysisSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Análise PESTA
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/global-economy-tech.png" // Caminho da imagem
            alt="Economia Global e Tecnologia"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            A análise PESTA permite compreender os fatores externos que podem influenciar o sucesso da Hamburgueria Vila
            Nova.
          </p>
          <p className={textStyle}>
            Consideramos aspectos Políticos, Económicos, Sociais, Tecnológicos e Ambientais relevantes para o setor da
            restauração.
          </p>
        </div>
      </div>
    </div>
  )
}

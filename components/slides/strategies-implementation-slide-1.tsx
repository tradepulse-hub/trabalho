import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function StrategiesImplementationSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Estratégias e Implementação
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/marketing-strategy-board.png" // Caminho da imagem
            alt="Estratégia de Marketing"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            A implementação das estratégias será faseada, começando com o estabelecimento da operação base e evoluindo
            para expansão digital e física.
          </p>
          <p className={textStyle}>
            Cada fase terá marcos específicos e métricas de acompanhamento para garantir o sucesso do plano.
          </p>
        </div>
      </div>
    </div>
  )
}

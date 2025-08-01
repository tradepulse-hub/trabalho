import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function CurrentSituationEvolutionSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Situação Atual e Evolução do Mercado
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            O mercado de fast-food gourmet tem crescido 15% ao ano em Portugal, com consumidores cada vez mais exigentes
            quanto à qualidade.
          </p>
          <p className={textStyle}>
            Vila Nova de Gaia apresenta uma lacuna no segmento premium, com a maioria das opções focadas no fast-food
            tradicional.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/fast-food-vs-gourmet.png" // Caminho da imagem
            alt="Fast Food vs Gourmet"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

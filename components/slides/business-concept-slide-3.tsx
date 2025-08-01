import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function BusinessConceptSlide3({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Diferenciação no Mercado
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            Ao contrário da concorrência, focamos na experiência completa do cliente, desde a escolha dos ingredientes
            até ao ambiente do restaurante.
          </p>
          <p className={textStyle}>
            Utilizamos tecnologia para otimizar pedidos e reduzir tempos de espera, mantendo sempre a qualidade
            artesanal.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/image2.png" // Caminho da imagem
            alt="Interior Moderno do Restaurante"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

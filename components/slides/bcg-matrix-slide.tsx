import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function BcgMatrixSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Matriz BCG
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/bcg-matrix-chart.png" // Caminho da imagem
            alt="Matriz BCG"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            <strong>Estrelas:</strong> Hambúrgueres signature com alta qualidade e crescimento
          </p>
          <p className={textStyle}>
            <strong>Interrogação:</strong> Novos produtos em teste como wraps e saladas
          </p>
          <p className={textStyle}>
            <strong>Vacas Leiteiras:</strong> Acompanhamentos e bebidas com margem estável
          </p>
        </div>
      </div>
    </div>
  )
}

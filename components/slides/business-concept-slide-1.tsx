import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function BusinessConceptSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Conceito de Negócio
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/image1.png" // Caminho da imagem
            alt="Hambúrguer Gourmet"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            Restaurante especializado em hambúrgueres artesanais, utilizando ingredientes frescos e de qualidade
            superior.
          </p>
          <p className={textStyle}>
            Ambiente moderno e acolhedor, com foco na experiência do cliente e na sustentabilidade.
          </p>
        </div>
      </div>
    </div>
  )
}

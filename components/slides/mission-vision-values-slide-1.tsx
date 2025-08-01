import type { SlideProps } from "@/types/slide-props"

export default function MissionVisionValuesSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Missão, Visão e Valores
      </h1>
      <div className="max-w-4xl space-y-8">
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-4">Missão</h2>
          <p className={textStyle}>
            Proporcionar experiências gastronómicas únicas através de hambúrgueres artesanais de qualidade superior, num
            ambiente acolhedor e sustentável, superando as expectativas dos nossos clientes.
          </p>
        </div>
        <div>
          <h2 className="text-yellow-400 text-3xl font-semibold mb-4">Visão</h2>
          <p className={textStyle}>
            Tornar-se a referência em hambúrgueres gourmet na região Norte, expandindo para outras cidades e
            consolidando a marca como sinónimo de qualidade e inovação.
          </p>
        </div>
      </div>
    </div>
  )
}

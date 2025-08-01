import type { SlideProps } from "@/types/slide-props"

export default function MarketSegmentationSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Segmentação de Mercado
      </h1>
      <div className="max-w-4xl">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Segmento Primário</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Jovens Adultos (25-40 anos):</strong> Profissionais com rendimento médio-alto
          </li>
          <li className={listItemStyle}>
            <strong>Famílias:</strong> Pais com filhos que procuram refeições de qualidade
          </li>
          <li className={listItemStyle}>
            <strong>Estudantes Universitários:</strong> Procuram opções acessíveis e saborosas
          </li>
          <li className={listItemStyle}>
            <strong>Turistas:</strong> Visitantes de Vila Nova de Gaia
          </li>
        </ul>
      </div>
    </div>
  )
}

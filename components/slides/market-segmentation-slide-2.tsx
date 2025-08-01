import type { SlideProps } from "@/types/slide-props"

export default function MarketSegmentationSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Características do Mercado-Alvo
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Demografia:</strong> Residentes e trabalhadores em Vila Nova de Gaia
          </li>
          <li className={listItemStyle}>
            <strong>Comportamento:</strong> Valorizam qualidade sobre preço baixo
          </li>
          <li className={listItemStyle}>
            <strong>Preferências:</strong> Ingredientes frescos e opções personalizáveis
          </li>
          <li className={listItemStyle}>
            <strong>Hábitos:</strong> Frequentam restaurantes 2-3 vezes por semana
          </li>
          <li className={listItemStyle}>
            <strong>Tecnologia:</strong> Utilizam apps de delivery e redes sociais
          </li>
        </ul>
      </div>
    </div>
  )
}

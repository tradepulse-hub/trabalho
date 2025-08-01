import type { SlideProps } from "@/types/slide-props"

export default function SwotAnalysisSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Forças (Strengths)
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Qualidade Superior:</strong> Ingredientes frescos e preparação artesanal
          </li>
          <li className={listItemStyle}>
            <strong>Localização Estratégica:</strong> Zona de elevado tráfego em Vila Nova de Gaia
          </li>
          <li className={listItemStyle}>
            <strong>Conceito Diferenciado:</strong> Hambúrgueres gourmet com personalização
          </li>
          <li className={listItemStyle}>
            <strong>Equipa Experiente:</strong> Profissionais com conhecimento do setor
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> Práticas eco-friendly atrativas para consumidores conscientes
          </li>
        </ul>
      </div>
    </div>
  )
}

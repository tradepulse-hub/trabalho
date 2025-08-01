import type { SlideProps } from "@/types/slide-props"

export default function ViabilityConclusionSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Conclusão de Viabilidade
      </h1>
      <div className="max-w-4xl space-y-6">
        <p className={textStyle}>
          A Hamburgueria Vila Nova apresenta uma proposta sólida e viável, com potencial de crescimento sustentável no
          mercado da restauração gourmet.
        </p>
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Mercado em Crescimento:</strong> Segmento gourmet com 15% crescimento anual
          </li>
          <li className={listItemStyle}>
            <strong>Diferenciação Clara:</strong> Qualidade premium vs concorrência tradicional
          </li>
          <li className={listItemStyle}>
            <strong>Localização Estratégica:</strong> Vila Nova de Gaia com elevado potencial
          </li>
          <li className={listItemStyle}>
            <strong>Projeções Realistas:</strong> Baseadas em estudos de mercado sólidos
          </li>
          <li className={listItemStyle}>
            <strong>Equipa Experiente:</strong> Conhecimento profundo do setor
          </li>
        </ul>
        <p className={textStyle}>
          <strong>Recomendação:</strong> Projeto aprovado para implementação imediata.
        </p>
      </div>
    </div>
  )
}

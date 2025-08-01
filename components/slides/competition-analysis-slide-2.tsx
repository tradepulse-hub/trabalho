import type { SlideProps } from "@/types/slide-props"

export default function CompetitionAnalysisSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Vantagem Competitiva
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Qualidade Superior:</strong> Ingredientes frescos vs processados da concorrência
          </li>
          <li className={listItemStyle}>
            <strong>Personalização:</strong> Hambúrgueres feitos à medida vs opções standard
          </li>
          <li className={listItemStyle}>
            <strong>Experiência:</strong> Ambiente acolhedor vs espaços funcionais
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> Práticas eco-friendly vs foco apenas no lucro
          </li>
          <li className={listItemStyle}>
            <strong>Atendimento:</strong> Serviço personalizado vs atendimento massificado
          </li>
        </ul>
      </div>
    </div>
  )
}

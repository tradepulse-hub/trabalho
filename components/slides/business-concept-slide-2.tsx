import type { SlideProps } from "@/types/slide-props"

export default function BusinessConceptSlide2({
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
        Proposta de Valor
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Qualidade Premium:</strong> Ingredientes frescos e locais
          </li>
          <li className={listItemStyle}>
            <strong>Personalização:</strong> Hambúrgueres feitos à medida do cliente
          </li>
          <li className={listItemStyle}>
            <strong>Rapidez:</strong> Serviço eficiente sem comprometer a qualidade
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> Embalagens eco-friendly e práticas sustentáveis
          </li>
          <li className={listItemStyle}>
            <strong>Experiência:</strong> Ambiente único e atendimento personalizado
          </li>
        </ul>
      </div>
    </div>
  )
}

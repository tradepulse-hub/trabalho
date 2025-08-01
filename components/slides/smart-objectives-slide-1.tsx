import type { SlideProps } from "@/types/slide-props"

export default function SmartObjectivesSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Objetivos SMART - Ano 1
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Específico:</strong> Atingir 150 clientes/dia em média
          </li>
          <li className={listItemStyle}>
            <strong>Mensurável:</strong> Faturação de €450.000 no primeiro ano
          </li>
          <li className={listItemStyle}>
            <strong>Atingível:</strong> Com base na localização e mercado-alvo
          </li>
          <li className={listItemStyle}>
            <strong>Relevante:</strong> Estabelecer presença sólida no mercado local
          </li>
          <li className={listItemStyle}>
            <strong>Temporal:</strong> Objetivos definidos para 12 meses
          </li>
        </ul>
      </div>
    </div>
  )
}

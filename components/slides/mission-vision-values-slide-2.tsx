import type { SlideProps } from "@/types/slide-props"

export default function MissionVisionValuesSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Valores Fundamentais
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Qualidade:</strong> Compromisso com ingredientes frescos e preparação artesanal
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> Práticas eco-friendly e responsabilidade ambiental
          </li>
          <li className={listItemStyle}>
            <strong>Inovação:</strong> Constante evolução e adaptação às tendências do mercado
          </li>
          <li className={listItemStyle}>
            <strong>Transparência:</strong> Honestidade na comunicação com clientes e fornecedores
          </li>
          <li className={listItemStyle}>
            <strong>Excelência:</strong> Busca contínua pela perfeição em todos os processos
          </li>
        </ul>
      </div>
    </div>
  )
}

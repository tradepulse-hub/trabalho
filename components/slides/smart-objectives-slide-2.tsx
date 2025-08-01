import type { SlideProps } from "@/types/slide-props"

export default function SmartObjectivesSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Objetivos SMART - Ano 2
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Crescimento:</strong> Aumentar vendas em 25% (€562.500)
          </li>
          <li className={listItemStyle}>
            <strong>Expansão:</strong> Lançar serviço de catering
          </li>
          <li className={listItemStyle}>
            <strong>Digital:</strong> 40% das vendas através de canais online
          </li>
          <li className={listItemStyle}>
            <strong>Fidelização:</strong> 60% de clientes recorrentes
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> 100% embalagens biodegradáveis
          </li>
        </ul>
      </div>
    </div>
  )
}

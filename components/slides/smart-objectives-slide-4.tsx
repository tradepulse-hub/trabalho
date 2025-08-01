import type { SlideProps } from "@/types/slide-props"

export default function SmartObjectivesSlide4({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Objetivos SMART - Longo Prazo (5 anos)
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Expansão:</strong> Abrir segunda unidade no Porto
          </li>
          <li className={listItemStyle}>
            <strong>Franchising:</strong> Desenvolver modelo de franquia
          </li>
          <li className={listItemStyle}>
            <strong>Faturação:</strong> Atingir €1.2M anuais (ambas as unidades)
          </li>
          <li className={listItemStyle}>
            <strong>Marca:</strong> Reconhecimento nacional na restauração
          </li>
          <li className={listItemStyle}>
            <strong>Sustentabilidade:</strong> Certificação ambiental ISO 14001
          </li>
        </ul>
      </div>
    </div>
  )
}

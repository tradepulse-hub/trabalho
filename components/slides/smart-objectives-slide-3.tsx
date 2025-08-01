import type { SlideProps } from "@/types/slide-props"

export default function SmartObjectivesSlide3({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Objetivos SMART - Ano 3
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Consolidação:</strong> Tornar-se referência em Vila Nova de Gaia
          </li>
          <li className={listItemStyle}>
            <strong>Rentabilidade:</strong> Margem líquida de 15%
          </li>
          <li className={listItemStyle}>
            <strong>Inovação:</strong> Lançar 4 novos produtos por ano
          </li>
          <li className={listItemStyle}>
            <strong>Equipa:</strong> Ter 12 colaboradores fixos
          </li>
          <li className={listItemStyle}>
            <strong>Reconhecimento:</strong> Prémio de melhor hambúrguer da região
          </li>
        </ul>
      </div>
    </div>
  )
}

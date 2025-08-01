import type { SlideProps } from "@/types/slide-props"

export default function CompetitionAnalysisSlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Análise da Concorrência
      </h1>
      <div className="max-w-4xl">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Concorrência Direta</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>McDonald's:</strong> Líder de mercado, preços baixos, qualidade standard
          </li>
          <li className={listItemStyle}>
            <strong>Burger King:</strong> Segunda posição, foco no sabor grelhado
          </li>
          <li className={listItemStyle}>
            <strong>KFC:</strong> Especializado em frango, mas com hambúrgueres no menu
          </li>
          <li className={listItemStyle}>
            <strong>Restaurantes Locais:</strong> Pequenos estabelecimentos com oferta limitada
          </li>
        </ul>
      </div>
    </div>
  )
}

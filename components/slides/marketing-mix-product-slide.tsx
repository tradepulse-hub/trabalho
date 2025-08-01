import type { SlideProps } from "@/types/slide-props"

export default function MarketingMixProductSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Produto
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Hambúrgueres Artesanais:</strong> 12 variedades diferentes
          </li>
          <li className={listItemStyle}>
            <strong>Ingredientes Premium:</strong> Carne 100% nacional, pão artesanal
          </li>
          <li className={listItemStyle}>
            <strong>Opções Especiais:</strong> Vegetarianas, veganas e sem glúten
          </li>
          <li className={listItemStyle}>
            <strong>Acompanhamentos:</strong> Batatas artesanais, saladas frescas
          </li>
          <li className={listItemStyle}>
            <strong>Bebidas:</strong> Sumos naturais, cervejas artesanais, refrigerantes
          </li>
          <li className={listItemStyle}>
            <strong>Sobremesas:</strong> Doces caseiros e gelados artesanais
          </li>
        </ul>
      </div>
    </div>
  )
}

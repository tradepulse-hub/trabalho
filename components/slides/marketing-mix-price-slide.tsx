import type { SlideProps } from "@/types/slide-props"

export default function MarketingMixPriceSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Preço
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Hambúrgueres:</strong> €8,50 - €12,50 (vs €4-6 fast-food tradicional)
          </li>
          <li className={listItemStyle}>
            <strong>Menus Completos:</strong> €12,00 - €16,00
          </li>
          <li className={listItemStyle}>
            <strong>Estratégia:</strong> Preço premium justificado pela qualidade
          </li>
          <li className={listItemStyle}>
            <strong>Promoções:</strong> Menu do dia, descontos para estudantes
          </li>
          <li className={listItemStyle}>
            <strong>Fidelização:</strong> Cartão cliente com 10% desconto após 10 visitas
          </li>
          <li className={listItemStyle}>
            <strong>Pagamentos:</strong> Dinheiro, cartão, MB Way, Apple Pay
          </li>
        </ul>
      </div>
    </div>
  )
}

import type { SlideProps } from "@/types/slide-props"

export default function MarketingMixDistributionSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Distribuição
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Restaurante:</strong> Serviço no local com 60 lugares
          </li>
          <li className={listItemStyle}>
            <strong>Take Away:</strong> Balcão dedicado para recolha rápida
          </li>
          <li className={listItemStyle}>
            <strong>Delivery:</strong> Uber Eats, Glovo, serviço próprio
          </li>
          <li className={listItemStyle}>
            <strong>Catering:</strong> Eventos empresariais e festas privadas
          </li>
          <li className={listItemStyle}>
            <strong>Horário Alargado:</strong> 11h-24h para máxima conveniência
          </li>
          <li className={listItemStyle}>
            <strong>Localização:</strong> Zona central com fácil acesso e estacionamento
          </li>
        </ul>
      </div>
    </div>
  )
}

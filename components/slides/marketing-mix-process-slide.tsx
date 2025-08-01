import type { SlideProps } from "@/types/slide-props"

export default function MarketingMixProcessSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Processo
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Receção:</strong> Acolhimento caloroso e mesa atribuída em 2 minutos
          </li>
          <li className={listItemStyle}>
            <strong>Pedido:</strong> Sistema digital para precisão e rapidez
          </li>
          <li className={listItemStyle}>
            <strong>Preparação:</strong> Hambúrgueres feitos na hora em 8-12 minutos
          </li>
          <li className={listItemStyle}>
            <strong>Serviço:</strong> Entrega à mesa com apresentação cuidada
          </li>
          <li className={listItemStyle}>
            <strong>Pagamento:</strong> Múltiplas opções, processo rápido
          </li>
          <li className={listItemStyle}>
            <strong>Follow-up:</strong> Feedback solicitado via QR code
          </li>
        </ul>
      </div>
    </div>
  )
}

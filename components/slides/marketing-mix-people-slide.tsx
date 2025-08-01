import type { SlideProps } from "@/types/slide-props"

export default function MarketingMixPeopleSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Pessoas
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Equipa Qualificada:</strong> Formação contínua em atendimento
          </li>
          <li className={listItemStyle}>
            <strong>Chef Experiente:</strong> 10+ anos em restauração gourmet
          </li>
          <li className={listItemStyle}>
            <strong>Atendimento Personalizado:</strong> Conhecimento do menu e sugestões
          </li>
          <li className={listItemStyle}>
            <strong>Uniformes Profissionais:</strong> Imagem cuidada e consistente
          </li>
          <li className={listItemStyle}>
            <strong>Cultura de Serviço:</strong> Foco na satisfação do cliente
          </li>
          <li className={listItemStyle}>
            <strong>Multilíngue:</strong> Atendimento em português, inglês e espanhol
          </li>
        </ul>
      </div>
    </div>
  )
}

import type { SlideProps } from "@/types/slide-props"

export default function StrategiesImplementationSlide3({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Fase 2: Crescimento (Meses 7-18)
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Delivery:</strong> Parcerias com Uber Eats, Glovo e serviço próprio
          </li>
          <li className={listItemStyle}>
            <strong>Catering:</strong> Desenvolvimento do serviço para eventos
          </li>
          <li className={listItemStyle}>
            <strong>Fidelização:</strong> Programa de clientes e app móvel
          </li>
          <li className={listItemStyle}>
            <strong>Expansão Menu:</strong> Introdução de opções sazonais
          </li>
          <li className={listItemStyle}>
            <strong>Parcerias:</strong> Colaborações com empresas locais
          </li>
          <li className={listItemStyle}>
            <strong>Meta:</strong> 150 clientes/dia e 25% vendas online
          </li>
        </ul>
      </div>
    </div>
  )
}

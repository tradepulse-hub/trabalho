import type { SlideProps } from "@/types/slide-props"

export default function SwotAnalysisSlide3({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Fraquezas (Weaknesses)
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Marca Nova:</strong> Falta de reconhecimento no mercado
          </li>
          <li className={listItemStyle}>
            <strong>Investimento Inicial Elevado:</strong> Custos de arranque significativos
          </li>
          <li className={listItemStyle}>
            <strong>Dependência de Fornecedores:</strong> Qualidade dependente de terceiros
          </li>
          <li className={listItemStyle}>
            <strong>Capacidade Limitada:</strong> Espaço físico pode limitar crescimento inicial
          </li>
          <li className={listItemStyle}>
            <strong>Sazonalidade:</strong> Possível variação na procura durante o ano
          </li>
        </ul>
      </div>
    </div>
  )
}

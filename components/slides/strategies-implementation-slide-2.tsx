import type { SlideProps } from "@/types/slide-props"

export default function StrategiesImplementationSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Fase 1: Lançamento (Meses 1-6)
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Mês 1-2:</strong> Finalização do espaço e contratação da equipa
          </li>
          <li className={listItemStyle}>
            <strong>Mês 3:</strong> Formação intensiva e testes operacionais
          </li>
          <li className={listItemStyle}>
            <strong>Mês 4:</strong> Inauguração com evento de lançamento
          </li>
          <li className={listItemStyle}>
            <strong>Mês 5-6:</strong> Otimização de processos e ajustes no menu
          </li>
          <li className={listItemStyle}>
            <strong>Marketing:</strong> Campanha de awareness local e redes sociais
          </li>
          <li className={listItemStyle}>
            <strong>Meta:</strong> 80 clientes/dia em média no final do período
          </li>
        </ul>
      </div>
    </div>
  )
}

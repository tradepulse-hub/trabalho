import type { SlideProps } from "@/types/slide-props"

export default function HrFunctionsSlide3({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Funções dos Recursos Humanos
      </h1>
      <div className="max-w-4xl">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Equipa de Atendimento</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>Receção e acomodação de clientes</li>
          <li className={listItemStyle}>Apresentação do menu e sugestões</li>
          <li className={listItemStyle}>Registo de pedidos com precisão</li>
          <li className={listItemStyle}>Serviço de mesa eficiente</li>
          <li className={listItemStyle}>Processamento de pagamentos</li>
          <li className={listItemStyle}>Manutenção da limpeza do espaço</li>
        </ul>
      </div>
    </div>
  )
}

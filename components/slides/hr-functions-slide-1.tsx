import type { SlideProps } from "@/types/slide-props"

export default function HrFunctionsSlide1({
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
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Gerente Geral</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>Supervisão geral das operações</li>
          <li className={listItemStyle}>Gestão de equipas e horários</li>
          <li className={listItemStyle}>Controlo de qualidade e standards</li>
          <li className={listItemStyle}>Relacionamento com fornecedores</li>
          <li className={listItemStyle}>Análise financeira e relatórios</li>
          <li className={listItemStyle}>Atendimento a reclamações</li>
        </ul>
      </div>
    </div>
  )
}

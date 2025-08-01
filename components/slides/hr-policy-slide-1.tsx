import type { SlideProps } from "@/types/slide-props"

export default function HrPolicySlide1({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Política de Recursos Humanos
      </h1>
      <div className="max-w-4xl">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Recrutamento e Seleção</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>Processo transparente e baseado em competências</li>
          <li className={listItemStyle}>Valorização da experiência no setor da restauração</li>
          <li className={listItemStyle}>Período de experiência de 90 dias</li>
          <li className={listItemStyle}>Entrevistas estruturadas e testes práticos</li>
          <li className={listItemStyle}>Verificação de referências profissionais</li>
        </ul>
      </div>
    </div>
  )
}

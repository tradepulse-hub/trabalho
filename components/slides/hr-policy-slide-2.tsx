import type { SlideProps } from "@/types/slide-props"

export default function HrPolicySlide2({
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
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Formação e Desenvolvimento</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>Programa de integração de 2 semanas</li>
          <li className={listItemStyle}>Formação contínua em segurança alimentar</li>
          <li className={listItemStyle}>Workshops mensais de atendimento ao cliente</li>
          <li className={listItemStyle}>Oportunidades de progressão na carreira</li>
          <li className={listItemStyle}>Avaliação de desempenho semestral</li>
        </ul>
      </div>
    </div>
  )
}

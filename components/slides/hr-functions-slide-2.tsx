import type { SlideProps } from "@/types/slide-props"

export default function HrFunctionsSlide2({
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
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Chef de Cozinha</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>Desenvolvimento de receitas e menu</li>
          <li className={listItemStyle}>Controlo de qualidade dos ingredientes</li>
          <li className={listItemStyle}>Supervisão da preparação dos alimentos</li>
          <li className={listItemStyle}>Gestão de stocks da cozinha</li>
          <li className={listItemStyle}>Formação da equipa de cozinha</li>
          <li className={listItemStyle}>Cumprimento das normas HACCP</li>
        </ul>
      </div>
    </div>
  )
}

import type { SlideProps } from "@/types/slide-props"

export default function SwotAnalysisSlide4({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Oportunidades e Ameaças
      </h1>
      <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-green-400 text-2xl font-semibold mb-4">Oportunidades</h2>
          <ul className={listStyle}>
            <li className={listItemStyle}>Crescimento do mercado gourmet</li>
            <li className={listItemStyle}>Expansão para delivery</li>
            <li className={listItemStyle}>Parcerias com empresas locais</li>
            <li className={listItemStyle}>Eventos e catering</li>
          </ul>
        </div>
        <div>
          <h2 className="text-red-400 text-2xl font-semibold mb-4">Ameaças</h2>
          <ul className={listStyle}>
            <li className={listItemStyle}>Concorrência estabelecida</li>
            <li className={listItemStyle}>Flutuações económicas</li>
            <li className={listItemStyle}>Aumento dos custos</li>
            <li className={listItemStyle}>Mudanças regulamentares</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

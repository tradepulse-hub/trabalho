import type { SlideProps } from "@/types/slide-props"

export default function PestaAnalysisSlide2({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Fatores PESTA
      </h1>
      <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-blue-400 text-xl font-semibold mb-2">Políticos</h3>
          <ul className={listStyle}>
            <li className={listItemStyle}>Regulamentação alimentar</li>
            <li className={listItemStyle}>Políticas de emprego</li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-400 text-xl font-semibold mb-2">Económicos</h3>
          <ul className={listStyle}>
            <li className={listItemStyle}>Poder de compra</li>
            <li className={listItemStyle}>Inflação dos custos</li>
          </ul>
        </div>
        <div>
          <h3 className="text-purple-400 text-xl font-semibold mb-2">Sociais</h3>
          <ul className={listStyle}>
            <li className={listItemStyle}>Tendências alimentares</li>
            <li className={listItemStyle}>Consciência ambiental</li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-400 text-xl font-semibold mb-2">Tecnológicos</h3>
          <ul className={listStyle}>
            <li className={listItemStyle}>Apps de delivery</li>
            <li className={listItemStyle}>Sistemas de pagamento</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

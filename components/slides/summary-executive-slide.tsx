import type { SlideProps } from "@/types/slide-props"

export default function SummaryExecutiveSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Sumário Executivo
      </h1>
      <div className="max-w-4xl text-center space-y-6">
        <p className={textStyle}>
          A Hamburgueria Vila Nova representa uma oportunidade única no mercado de restauração rápida, combinando
          qualidade premium com preços acessíveis.
        </p>
        <p className={textStyle}>
          Localizada estrategicamente em Vila Nova de Gaia, a nossa proposta visa satisfazer a crescente procura por
          hambúrgueres gourmet numa zona de elevado tráfego pedonal e rodoviário.
        </p>
        <p className={textStyle}>
          Com um investimento inicial estimado e projeções financeiras sólidas, este projeto apresenta um potencial de
          retorno atrativo para os investidores.
        </p>
      </div>
    </div>
  )
}

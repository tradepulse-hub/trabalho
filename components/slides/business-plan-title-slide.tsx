import type { SlideProps } from "@/types/slide-props"

export default function BusinessPlanTitleSlide({ titleTextShadowStyle, commonSlideStyle, headingStyle }: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <div className="text-center">
        <h1 className={headingStyle} style={titleTextShadowStyle}>
          Plano de Negócios
        </h1>
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-semibold mb-8" style={titleTextShadowStyle}>
          Hamburgueria Vila Nova
        </h2>
        <p className="text-gray-300 text-xl md:text-2xl font-serif">Uma proposta inovadora no setor da restauração</p>
      </div>
    </div>
  )
}

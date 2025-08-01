import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function FinancialPlanningViabilitySlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Planeamento Financeiro e Viabilidade
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/financial-growth-chart.png" // Caminho da imagem
            alt="Gráfico de Crescimento Financeiro"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className={textStyle}>
            <strong>Investimento Inicial:</strong> €120.000 (equipamento, obras, stock inicial)
          </p>
          <p className={textStyle}>
            <strong>Break-even:</strong> Previsto para o 14º mês de operação
          </p>
          <p className={textStyle}>
            <strong>ROI:</strong> 22% no terceiro ano de atividade
          </p>
          <p className={textStyle}>
            <strong>Financiamento:</strong> 60% capital próprio, 40% crédito bancário
          </p>
        </div>
      </div>
    </div>
  )
}

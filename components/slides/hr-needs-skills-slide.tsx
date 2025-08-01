import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function HrNeedsSkillsSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  textStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Necessidades de RH e Competências
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/restaurant-team.png" // Caminho da imagem
            alt="Equipa do Restaurante"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <ul className={listStyle}>
            <li className={listItemStyle}>
              <strong>Gerente Geral:</strong> Liderança e gestão operacional
            </li>
            <li className={listItemStyle}>
              <strong>Chef de Cozinha:</strong> Criação e supervisão culinária
            </li>
            <li className={listItemStyle}>
              <strong>Cozinheiros (2):</strong> Preparação dos hambúrgueres
            </li>
            <li className={listItemStyle}>
              <strong>Empregados de Mesa (3):</strong> Atendimento ao cliente
            </li>
            <li className={listItemStyle}>
              <strong>Caixa:</strong> Gestão de pagamentos e encomendas
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

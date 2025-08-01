import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function MarketingMixPhysicalEvidenceSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Evidência Física
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/eco-packaging.png" // Caminho da imagem
            alt="Embalagens Eco-Friendly"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <ul className={listStyle}>
            <li className={listItemStyle}>
              <strong>Design Moderno:</strong> Decoração industrial-chic
            </li>
            <li className={listItemStyle}>
              <strong>Embalagens Eco:</strong> Materiais biodegradáveis
            </li>
            <li className={listItemStyle}>
              <strong>Música Ambiente:</strong> Playlist cuidadosamente selecionada
            </li>
            <li className={listItemStyle}>
              <strong>Iluminação:</strong> LED quente para ambiente acolhedor
            </li>
            <li className={listItemStyle}>
              <strong>Limpeza:</strong> Standards elevados visíveis
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

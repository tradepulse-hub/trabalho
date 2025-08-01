import type { SlideProps } from "@/types/slide-props"
import Image from "next/image"

export default function MarketingMixCommunicationSlide({
  titleTextShadowStyle,
  commonSlideStyle,
  headingStyle,
  listStyle,
  listItemStyle,
}: SlideProps) {
  return (
    <div className={commonSlideStyle}>
      <h1 className={headingStyle} style={titleTextShadowStyle}>
        Marketing Mix - Comunicação
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl">
        <div className="lg:w-1/2">
          <Image
            src="/images/social-media-marketing.png" // Caminho da imagem
            alt="Marketing nas Redes Sociais"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <ul className={listStyle}>
            <li className={listItemStyle}>
              <strong>Redes Sociais:</strong> Instagram, Facebook, TikTok
            </li>
            <li className={listItemStyle}>
              <strong>Website:</strong> Com sistema de encomendas online
            </li>
            <li className={listItemStyle}>
              <strong>Google Ads:</strong> Campanhas locais segmentadas
            </li>
            <li className={listItemStyle}>
              <strong>Influencers:</strong> Parcerias com bloggers gastronómicos
            </li>
            <li className={listItemStyle}>
              <strong>Eventos:</strong> Degustações e inauguração
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

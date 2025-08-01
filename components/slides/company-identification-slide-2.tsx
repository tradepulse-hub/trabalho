import type { SlideProps } from "@/types/slide-props"

export default function CompanyIdentificationSlide2({
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
        Identificação da Empresa
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Sócios:</strong> João Silva (60%) e Maria Santos (40%)
          </li>
          <li className={listItemStyle}>
            <strong>Gerência:</strong> João Silva (Gerente Geral)
          </li>
          <li className={listItemStyle}>
            <strong>Contactos:</strong> +351 220 000 000 | info@hamburgueriavilanova.pt
          </li>
          <li className={listItemStyle}>
            <strong>Website:</strong> www.hamburgueriavilanova.pt
          </li>
          <li className={listItemStyle}>
            <strong>Redes Sociais:</strong> Facebook, Instagram, TikTok
          </li>
        </ul>
      </div>
    </div>
  )
}

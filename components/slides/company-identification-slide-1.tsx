import type { SlideProps } from "@/types/slide-props"

export default function CompanyIdentificationSlide1({
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
            <strong>Nome:</strong> Hamburgueria Vila Nova, Lda.
          </li>
          <li className={listItemStyle}>
            <strong>Forma Jurídica:</strong> Sociedade por Quotas
          </li>
          <li className={listItemStyle}>
            <strong>Sede:</strong> Vila Nova de Gaia, Portugal
          </li>
          <li className={listItemStyle}>
            <strong>CAE Principal:</strong> 56101 - Restaurantes tipo tradicional
          </li>
          <li className={listItemStyle}>
            <strong>Capital Social:</strong> €50.000
          </li>
        </ul>
      </div>
    </div>
  )
}

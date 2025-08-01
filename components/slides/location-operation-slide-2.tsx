import type { SlideProps } from "@/types/slide-props"

export default function LocationOperationSlide2({
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
        Horário de Funcionamento
      </h1>
      <div className="max-w-4xl">
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Segunda a Quinta:</strong> 11:00 - 23:00
          </li>
          <li className={listItemStyle}>
            <strong>Sexta e Sábado:</strong> 11:00 - 24:00
          </li>
          <li className={listItemStyle}>
            <strong>Domingo:</strong> 12:00 - 22:00
          </li>
          <li className={listItemStyle}>
            <strong>Delivery:</strong> Disponível durante todo o horário de funcionamento
          </li>
          <li className={listItemStyle}>
            <strong>Take Away:</strong> Serviço rápido com pré-encomenda online
          </li>
        </ul>
      </div>
    </div>
  )
}

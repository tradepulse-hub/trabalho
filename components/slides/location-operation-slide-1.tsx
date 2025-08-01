import type { SlideProps } from "@/types/slide-props"

export default function LocationOperationSlide1({
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
        Localização e Funcionamento
      </h1>
      <div className="max-w-4xl">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Localização Estratégica</h2>
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <strong>Endereço:</strong> Avenida da República, Vila Nova de Gaia
          </li>
          <li className={listItemStyle}>
            <strong>Área:</strong> 150m² (80m² salão + 70m² cozinha e armazém)
          </li>
          <li className={listItemStyle}>
            <strong>Capacidade:</strong> 60 lugares sentados
          </li>
          <li className={listItemStyle}>
            <strong>Estacionamento:</strong> 20 lugares privativos
          </li>
          <li className={listItemStyle}>
            <strong>Acessibilidade:</strong> Totalmente acessível a pessoas com mobilidade reduzida
          </li>
        </ul>
      </div>
    </div>
  )
}

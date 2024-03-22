import PropTypes from "prop-types";

function AOTCharacterCard(props) {
  const { data } = props;

  // Verificar si data es nulo o indefinido
  if (!data) {
    return <div>No hay datos disponibles</div>;
  }

  return (
    <div className="aot-character">
      {/* Verificar si las propiedades de data existen antes de acceder a ellas */}
      <h2>{data.name}</h2>
      <img src={data.img} alt={data.name} />
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Occupation: {data.occupation}</p>
    </div>
  );
}

// Definir PropTypes para validar los props
AOTCharacterCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string,
    occupation: PropTypes.string,
  }),
};

export default AOTCharacterCard;

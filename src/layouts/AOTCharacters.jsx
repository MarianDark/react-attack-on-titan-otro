import axios from "axios";
import { useState } from "react";
import AOTCharacterCard from "./AOTCharacterCard";

function AOTCharacters() {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isUsed, setUsed] = useState(false);

  const handleSearch = () => {
    const url = `https://api.attackontitanapi.com/characters?name=${name}`;
    if (name && name !== "") {
      axios.get(url).then((res) => {
        if (res.data.results.length > 0) {
          const filterData = res.data.results.map((character) => ({
            id: character.id,
            name: character.name,
            age: character.age,
            img: character.img.split(".png")[0] + ".png",
            gender: character.gender,
            occupation: character.occupation,
          }));
          setCharacters(filterData);
        } else {
          setCharacters([]);
        }
      });
    } else {
      setCharacters([]);
    }
    setUsed(true);
  };

  return (
    <>
      <div>
        <div className="main">
          <div className="search">
            <h1>Personajes de Attack on Titan</h1>
            <input
  type="text"
  onClick={() => setName("")} // Establecer el nombre en una cadena vacía cuando se hace clic en el campo de búsqueda
  onChange={(event) => {
    setName(event.target.value);
    setUsed(true);
  }}
  value={name.toLowerCase()}
  placeholder="Buscar por nombre"
/>
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className="card-container">
            {!isUsed && <p>Haz tu primera búsqueda</p>}
            {isUsed &&
              characters.length !== 0 &&
              characters.map((character) => (
                <AOTCharacterCard key={character.id} data={character} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AOTCharacters;


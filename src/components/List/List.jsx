import './List.css';

export function List({ charactersData, currentCharacterIndex, changeCharacter }) {
  return (
    <div className="character-navigation">
      {charactersData.map((character, index) => {
        // Asegurar que a primeira imagem sempre tenha 'cyberstorm' no nome
        const imageFileName = (index === 0 ? 'cyberstorm' : character.name.toLowerCase().replace(/\s+/g, '-'));

        return (
          <button
            type="button"
            key={character.name}
            className={`character-button ${index === currentCharacterIndex ? 'active' : ''}`}
            onClick={() => changeCharacter(index)}
          >
            <img
              src={`./src/assets/icone-${imageFileName}.png`}
              alt={`Ícone ${character.name}`}
              className={`character-icon ${index === currentCharacterIndex ? 'selected' : ''} ${character.name.toLowerCase()}`}
            />
          </button>

        );
      })}
    </div>
  );
}
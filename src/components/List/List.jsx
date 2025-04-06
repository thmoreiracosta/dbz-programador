export function List({ charactersData, currentCharacterIndex, changeCharacter }) {
  return (
    <div className="character-navigation">
      {charactersData.map((character, index) => {
        // Asegurar que a primeira imagem sempre tenha 'cyberstorm' no nome
        const imageFileName = (index === 0 ? 'cyberstorm' : character.name.toLowerCase().replace(/\s+/g, '-'));

        return (
          <button
            type="button"
            key={character.name}  // Usando o nome do personagem como chave
            className={`character-button ${index === currentCharacterIndex ? 'active' : ''}`}
            onClick={() => changeCharacter(index)}  // Passando o índice diretamente
          >
            <img
              src={`./src/assets/icone-${imageFileName}.png`}  // Usando o nome correto para a imagem
              alt={`Ícone ${character.name}`}
              className={`character-icon ${index === currentCharacterIndex ? 'selected' : ''}`}
            />
          </button>
        );
      })}
    </div>
  );
}
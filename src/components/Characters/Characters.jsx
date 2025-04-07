import { useState } from 'react';
import { charactersData } from '../../data/charactersData';
import { List } from '../List/List'
import './Characters.css';

//tentando o deploy
export function Characters() {
  // Estado para controlar o personagem atual, começando pelo primeiro personagem
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  // Função para alterar o personagem
  const changeCharacter = (index) => {
    setCurrentCharacterIndex(index);
  };

  const currentCharacter = charactersData[currentCharacterIndex];

  return (
    <>
      <main className="characters">
        {/* Exibir os detalhes do personagem atual */}
        <div className="character select">
          <picture>
            <source srcSet={currentCharacter.imageDesktop} media="(min-width: 768px)" />
            <img className="image" src={currentCharacter.imageMobile} alt={currentCharacter.name} />
          </picture>
          <div className="content">
            <h2 className="name-character">{currentCharacter.name}</h2>
            <p className="description">{currentCharacter.description}</p>
          </div>
        </div>
      </main>
      <List
        charactersData={charactersData}
        currentCharacterIndex={currentCharacterIndex}
        changeCharacter={changeCharacter}
      />
    </>
  );
}
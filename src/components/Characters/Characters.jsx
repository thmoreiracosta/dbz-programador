import { useState } from 'react';
import './Characters.css';
import { List } from '../List/List'

export function Characters() {
  // Lista de personagens com suas informações
  const charactersData = [
    {
      name: 'Goku CyberStorm',
      description: 'Goku Kakaroto, conhecido no submundo digital como "CyberStorm", é um programador prodígio especializado em segurança cibernética e inteligência artificial. Com um intelecto afiado e reflexos rápidos, ele domina linguagens de programação como se fossem extensões de sua própria mente.',
      imageDesktop: './src/assets/bg-cyberstorm.png',
      imageMobile: './src/assets/bg-cyberstorm-mobile.png',
    },
    {
      name: 'Codebreaker',
      description: 'No coração de uma estação espacial abandonada, Orion Vex, um ex-engenheiro cibernético, busca desvendar um código perdido há séculos. Dizem que esse código guarda o segredo para uma tecnologia ancestral capaz de redefinir a inteligência artificial.',
      imageDesktop: './src/assets/bg-codebreaker.png',
      imageMobile: './src/assets/bg-codebreaker-mobile.png',
    },
    {
      name: 'CodePixie',
      description: 'Lía Nakamura, conhecida como "CodePixie", é uma programadora genial que domina o desenvolvimento de algoritmos e inteligência artificial. Com um talento nato para decifrar padrões, ela cria sistemas inovadores e protege dados sensíveis de ameaças digitais.',
      imageDesktop: './src/assets/bg-codepixie.png',
      imageMobile: './src/assets/bg-codepixie-mobile.png',
    },
    {
      name: 'HexBlade',
      description: 'Ryo Tanaka, conhecido como "HexBlade", é um hacker habilidoso que opera nas sombras do ciberespaço. Mestre em engenharia reversa e criptografia, ele combina força bruta e inteligência afiada para quebrar firewalls impenetráveis.',
      imageDesktop: './src/assets/bg-hexblade.png',
      imageMobile: './src/assets/bg-hexblade-mobile.png',
    },
    {
      name: 'NeonPulse',
      description: 'NeonPulse Ayla Vega, conhecida como "NeonPulse", é uma prodígio da programação espacial. Criada em uma estação orbital, ela domina linguagens de código como se fossem sua segunda língua. Especialista em inteligência artificial e segurança cibernética.',
      imageDesktop: './src/assets/bg-neonpulse.png',
      imageMobile: './src/assets/bg-neonpulse-mobile.png',
    },
  ];

  // Estado para controlar o personagem atual, começando pelo primeiro personagem
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  // Função para alterar o personagem
  const changeCharacter = (index) => {
    setCurrentCharacterIndex(index);
  };

  const currentCharacter = charactersData[currentCharacterIndex];

  return (
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

      {/* Passar a lista de personagens e a função de mudança de personagem para o componente List */}
      <List
        charactersData={charactersData}
        currentCharacterIndex={currentCharacterIndex}
        changeCharacter={changeCharacter}
      />
    </main>
  );
}
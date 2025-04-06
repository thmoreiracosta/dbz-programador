import './Characters.css';

export function Characters() {

  return (
    <main className="characters">
      <div className="character selecionado">
        <picture>
          <source srcset="./src/assets/bg-cyberstorm.png" media="(min-width: 768px)" />
          <img className="image" src="./src/assets/bg-cyberstorm-mobile.png" alt="Character CyberStorm" />
        </picture>
        <div className="content">
          <h2 className="name-character">Goku CyberStorm</h2>
          <p className="description">Goku Kakaroto, conhecido no submundo digital como "CyberStorm", é um programador prodígio especializado em segurança cibernética e inteligência artificial. Com um intelecto afiado e reflexos rápidos, ele domina linguagens de programação como se fossem estensões de sua própria mente.</p>
        </div>
      </div>
      <div className="character">
        <picture>
          <source srcset="./src/assets/bg-codebreaker.png" media="(min-width: 768px)" />
          <img className="image" src="./src/assets/bg-codebreaker-mobile.png" alt="Character CyberStorm" />
        </picture>
        <div className="content">
          <h2 className="name-character">Codebreaker</h2>
          <p className="description">No coração de uma estação espacial abandonada, Orion Vex, um ex-engenheiro cibernético, busca desvendar um código perdido há séculos. Dizem que esse código guarda o segredo para uma tecnologia ancestral capaz de redefinir a inteligência artificial.
          </p>
        </div>
      </div>
      <div className="character">
        <picture>
          <source srcset="./src/assets/bg-codepixie.png" media="(min-width: 768px)" />
          <img className="image" src="./src/assets/bg-codepixie-mobile.png" alt="Character CyberStorm" />
        </picture>
        <div className="content">
          <h2 className="name-character">CodePixie</h2>
          <p className="description">Lía Nakamura, conhecida como "CodePixie", é uma programadora genial que domina o desenvolvimento de algoritmos e inteligência artificial. Com um talento nato para decifrar padrões, ela cria sistemas inovadores e protege dados sensíveis de ameaças digitais.</p>
        </div>
      </div>
      <div className="character">
        <picture>
          <source srcset="./src/assets/bg-hexblade.png" media="(min-width: 768px)" />
          <img className="image" src="./src/assets/bg-hexblade-mobile.png" alt="Character CyberStorm" />
        </picture>
        <div className="content">
          <h2 className="name-character">HexBlade</h2>
          <p className="description">Ryo Tanaka, conhecido como "HexBlade", é um hacker habilidoso que opera nas sombras do ciberespaço. Mestre em engenharia reversa e criptografia, ele combina força bruta e inteligência afiada para quebrar firewalls impenetráveis.</p>
        </div>
      </div>
      <div className="character">
        <picture>
          <source srcset="./src/assets/bg-neonpulse.png" media="(min-width: 768px)" />
          <img className="image" src="./src/assets/bg-neonpulse-mobile.png" alt="Character CyberStorm" />
        </picture>
        <div className="content">
          <h2 className="name-character">NeonPulse</h2>
          <p className="description">NeonPulse Ayla Vega, conhecida como "NeonPulse", é uma prodígio da programação espacial. Criada em uma estação orbital, ela domina linguagens de código como se fossem sua segunda língua. Especialista em inteligência artificial e segurança cibernética.</p>
        </div>
      </div>

    </main >
  );
}

export function List() {
  return (
    <>
      <ul className="button">
        <li>
          <button className="button cyberstorm selecionado" type="button" >
            <img src="./src/assets/icone-cyberstorm.png" alt="Ícone Cyberstorm" />
          </button>
        </li>
        <li>          
          <button className="button codepixie" type="button">
            <img src="./src/assets/icone-codepixie.png" alt="Ícone CodePixie" />
          </button>
        </li>
        <li>
          <button className="button hexblade" type="button">
            <img src="./src/assets/icone-hexblade.png" alt="Ícone Hexblade" />
          </button>
        </li>
        <li>
          <button className="button neonpulse" type="button">
            <img src="./src/assets/icone-neonpulse.png" alt="Ícone Neonpulse" />
          </button>
        </li>
        <li>
          <button className="button codebreaker" type="button">
            <img src="./src/assets/icone-codebreaker.png" alt="Ícone Codebreaker" />
          </button>
        </li>
      </ul>
    </>
  )
}
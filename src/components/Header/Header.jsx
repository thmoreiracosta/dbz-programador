import './Header.css'

export function Header() {
  return (
    <>
      <header>
        <nav className='nav'>
          <a href=".index.html">Home</a>
          <a href="./src/pages/about.html">About</a>
          <a href="./src/pages/login.html">Inscreva-se</a>
          <a href="./src/pages/contato.html">Contato</a>
        </nav>
      </header>

    </>
  )
}
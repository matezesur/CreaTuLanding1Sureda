import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-icon">S</span>
        <h1>Tienda Sureda</h1>
      </div>

      <nav className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar

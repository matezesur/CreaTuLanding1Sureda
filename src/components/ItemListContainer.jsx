function ItemListContainer({ greeting }) {
  return (
    <main className="main-container" id="inicio">
      <section className="hero">
        <p className="subtitle">E-commerce en desarrollo</p>
        <h2>{greeting}</h2>
        <p className="description">
          Esta es la primera estructura de la landing. Más adelante se va a mostrar acá el listado de productos.
        </p>
      </section>
    </main>
  )
}

export default ItemListContainer

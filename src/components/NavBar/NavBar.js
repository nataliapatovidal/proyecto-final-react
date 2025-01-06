import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            E-Commerce
                        </h1>
                        <h2 className="subtitle">
                            Encontra las mejores ofertas
                        </h2>
                    </div>
                </div>
            </section>
        
            <div>
            <button class="button is-primary is-outlined">Celular</button>
            <button class="button is-primary is-outlined">Tablets</button>
            <button class="button is-primary is-outlined">Notebooks</button>
            </div>
            <CartWidget />
        </nav>        
    )
}
export default NavBar

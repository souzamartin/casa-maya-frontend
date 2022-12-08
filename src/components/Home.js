import greenlogo from "../images/greenlogo.png"

const Home = () => {
    return (
        <div className="home"> 
            <h3>Our Story</h3>
            <p>Our story began in 1995, when colimote Paulino Zamora started producing what would be Colima's first tequila for export. Driven by his pride for his roots and a willingness to share with the world, Tequila Casa Maya was born.</p>
            {/* <img src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/07/historia-del-tequila.jpg"/> */}
            <br></br>
            <h3>Our Logo</h3>
            <p>Este logotipo se inspira en Quetzalcoatl, por lo que el ícono es una abstracción de su cabeza, aunque generada simétricamente y con un gesto un poco más simpático lo que ayudará a tener una imagen más agradable. Algo muy importante es que su penacho está realizado mediante la silueta de un agave.</p>
            <div className="homeimage">
                <img src={greenlogo}/>
            </div>
        </div>
    )
}

export default Home
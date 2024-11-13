import React from "react";


import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js"
import Footer from "./Footer.js";

//include images into your bundle
import losNuestros from "../../img/los-nuestros.jpg";
import elPadrino from "../../img/el-padrino.jpg";
import cadenaPerpetua from "../../img/cadena-perpetua.jpg";
import caballeroOscuro from "../../img/caballero-oscuro.jpg";

const films = [
	{
		img: cadenaPerpetua,
		titleCard: "Cadena perpetua",
		textCard: "Andrew Dufresne es un hombre inocente que es acusado del asesinato de su mujer. Tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank, en Maine.",
		url: "https://es.wikipedia.org/wiki/The_Shawshank_Redemption"
	},
	{
		img: elPadrino,
		titleCard: "El padrino",
		textCard: "Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre.",
		url: "https://es.wikipedia.org/wiki/El_padrino_(pel%C3%ADcula)"
	},
	{
		img: losNuestros,
		titleCard: "Uno de los nuestros",
		textCard: "Henry, un niño de trece años de Brooklyn, vive fascinado con el mundo de los gángsters. Su sueño se hace realidad cuando entra en la familia Pauline.",
		url: "https://es.wikipedia.org/wiki/Goodfellas"
	},
	{
		img: caballeroOscuro,
		titleCard: "El caballero oscuro",
		textCard: "Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman mantiene a raya el crimen organizado en Gotham. Todo cambia cuando aparece el Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
		url: "https://es.wikipedia.org/wiki/The_Dark_Knight"
	},
];

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-0">
				<Jumbotron />
				<div className="row justify-content-between">
					{films.map((film, index) => (
						<div className="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4" key={index}>
							<Card
								img={film.img}
								titleCard={film.titleCard}
								textCard={film.textCard}
								url={film.url}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

import React, { useState } from "react";
import "./style.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState ('');
	

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>

			<div className="square">
				<div className="circle arriba">
					<button onClick={()=>setColor('rojo')} className={color==='rojo' ? 'redLight' : '' } id="rojo"></button>
				</div>
				<div className="circle medio">
					<button onClick={()=>setColor('ambar')} className={color==='ambar' ? 'ambarLight' : '' }id="ambar"></button>
				</div>
				<div className="circle abajo">
					<button onClick={()=>setColor('verde')} className={color==='verde' ? 'greenLight' : '' }id="verde"></button>
				</div>
			</div>
			<div className="container d-flex">
			<div className="squaredos"></div>
			</div>
		</div>
		
	);
};

export default Home;

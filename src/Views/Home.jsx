import React from "react";
//import ShiboriShirt from "../Assets/shiboriShirt.png"

const Home = () => {
    return (
        <div className="containerMain">
            <div className="container">
                <h1>A Circular Economy Project</h1>
                <p>A guide for dressing only in clothes made in Leipzig. </p>
                <p>How to make your own and where to buy locally produced clothing.</p>
                {/* <img className="img" src={ShiboriShirt} alt="beautiful T-shirt made from bedsheet and tye-dyed" /> */}
                <div className="map">
                    <iframe id="iFrame_Map" title="map" src="https://www.google.com/maps/d/embed?mid=16Rp_3MkkmZqyOnMjoBz6a6aGaL9gRkeo&ehbc=2E312F"
                        ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Home
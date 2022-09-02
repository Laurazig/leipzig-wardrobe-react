import React from "react";
import makersDB from "../../data.json"

const MakersCards = props => {
    console.log(props.filter)
    return (
        <div className="cardContainer">
            <ul id="workshopListUL">
                {
                   makersDB.filter(maker=>(maker.clothesItem=== props.filter)||(maker.name.includes(props.filter))||(maker.address.postcode=== props.filter)|| props.filter === "").map((maker, index) => {
                        const address = `${maker.address.building} ${maker.address.street}, ${maker.address.postcode}`;
                        return (
                            <li key={index} >
                                <div className="workshopCard">
                                    <div className="makerLabel"><strong>Name: </strong></div>
                                    <div><a href={maker.url} target="_blank" rel="noreferrer" id="a_makers_name">{maker.name}</a>  </div>
                                    <div className="makerLabel"><strong>address:</strong> </div>
                                    <div>{maker.address.street} {maker.address.building} {maker.address.postcode} </div>
                                    <div className="makerLabel"><strong>clothesItem:</strong> </div>
                                    <div>{maker.clothesItem}</div>
                                    <div id="workshopCardInside">
                                        <a target="_blank" rel="noreferrer" href={"http://www.google.com/maps/place/" + address} id="buttonMakerLink"><div className="buttonMakerMap">View Map</div></a>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MakersCards
import React from "react";
import makersDB from "../../data.json"

const MakersCards = props => {
    return (
        <div className="cardContainer">
            <ul id="workshopListUL">
                {
                    makersDB.map((maker, index) => {
                        const address = `${maker.address.building} ${maker.address.street}, ${maker.address.postcode}`;
                        return (
                            <li className="workshopLi" key={index} >
                                <div className="workshopCard">
                                    <div><strong>Name: </strong> {maker.name} </div>
                                    <div><strong>address:</strong> {maker.address.street} {maker.address.building} {maker.address.postcode} </div>
                                    <div><strong>clothesItem:</strong> {maker.clothesItem}</div>
                                    <a target="_blank" rel="noreferrer" href={"http://www.google.com/maps/place/" + address} ><div className="button">View Map</div></a>
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
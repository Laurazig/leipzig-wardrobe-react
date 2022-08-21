// import React, { useState } from "react";
import WorkshopList from "./WorkshopList";
//import FormRegister from "../Components/FormRegister";

const Workshops = props => {
    return (
        <div className="containerMain">
            <div className="container">
                <div className="workshopContainer" >
                    <h1>Workshops in Leipzig</h1>
                    <WorkshopList
                        workshops={props.workshops}
                        name={props.name}
                        workshop={props.workshop}
                        location={props.location}
                        date={props.date}
                        price={props.price}
                        link={props.link}
                        updateName={props.updateName}
                        updateWorkshop={props.updateWorkshop}
                        updateLocation={props.updateLocation}
                        updateDate={props.updateDate}
                        updatePrice={props.updatePrice}
                        updateLink={props.updateLink}
                        update={props.update}
                    />
                    {/* <FormRegister /> */}
                </div>
            </div>
        </div>
    )
}
export default Workshops
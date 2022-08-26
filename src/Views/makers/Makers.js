import React, { useState, useEffect } from "react";
import MakersCards from "./MakersCards.js"
import "./makers.css"
import makersDB from "../../data.json"

let filteredDate= []

makersDB.forEach(item => {
  console.log(item)
  let foundItem=filteredDate.some(element => element.clothesItem === item.clothesItem)
  if(!foundItem){
    filteredDate.push(item)
  }
})
console.log(filteredDate)
const Makers = () => {
  const [makers, setMakers] = useState([])
  //const [maker, setMaker] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  //const [searchClothesItem, setSearchClothesItem] = useState("");
  const [clothes, setClothes] = useState(["All Clothes"]);

  useEffect(() => {
    setMakers(pretendFetchMakers)
  }, []);
  const pretendFetchMakers = () => {
    return [
      {
        "_id": "62f0271d932613db1ae03b75",
        "name": "Rosentreter Modedesign",
        "address": {
          "building": "93",
          "street": "Karl-Heine-Str.",
          "postcode": "04229"
        },
        "clothesItem": "trousers, shirts"
      },
      {
        "_id": "62f02836932613db1ae03b76",
        "name": " Sascha Halm Maßschuhe",
        "address": {
          "building": "41",
          "street": "Merseburgerstraße",
          "postcode": "04177"
        },
        "clothesItem": "shoes"
      },
      {
        "_id": "62f02970932613db1ae03b77",
        "name": "Craft Pigeon",
        "address": {
          "building": "61",
          "street": "Jahnallee",
          "postcode": "04177"
        },
        "clothesItem": "scarfs"
      }
    ]
  }
  return (
    <div className="containerMain">
      <div className="container">
        <div>
          <h1>Search for clothes made in Leipzig</h1>
          <div>Search by name, postcode or item.</div>
        </div>
        <div className="searchZone">
          <div className="SearchName" >
            <input
              type="text"
              className="form-control"
              placeholder="search by name"
              value={searchName}
            // onChange={onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
              //onClick={findByName}
              >
                Search
              </button>
            </div>
          </div>
          <div className="searchPostcode">
            <input
              type="text"
              className="form-control"
              placeholder="search by postcode"
              value={searchZip}
            // onChange={onChangeSearchZip}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
              //onClick={findByZip}
              >
                Search
              </button>
            </div>
          </div>
          <div className="searchDropdown">
            {/* <select onChange={onChangeSearchClothesItem}> */}
            <select>
              {filteredDate.map((maker, index) => {
              
                return (
                  <option value={maker.clothesItem} key={index}> {maker.clothesItem.substring(0, 20)} </option>
                )
              })}
            </select>
            <div className="">
              <button
                className="btn btn-outline-secondary"
                type="button"
              // onClick={findByClothesItem}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          
        </div>
        <MakersCards />
      </div>
    </div>
  )
}

export default Makers
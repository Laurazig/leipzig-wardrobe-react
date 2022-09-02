import React, { useState, useEffect } from "react";
import MakersCards from "./MakersCards.jsx"
import "./makers.scss"
//import '../../../scss/index.scss'
import makersDB from "../../data.json"

let filteredData = []

makersDB.forEach(item => {
  console.log(item)
  let foundItem = filteredData.some(element => element.clothesItem === item.clothesItem)
  if (!foundItem) {
    filteredData.push(item)
  }
})
console.log(filteredData)
const Makers = () => {
  const [makers, setMakers] = useState([])
  //const [maker, setMaker] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  //const [ searchClothesItem, setSearchClothesItem ] = useState("");
  const [ clothes, setClothes ] = useState(["All Clothes"]);
  const [ filter, setFilter ] = useState()

  useEffect(() => {
    setMakers(pretendFetchMakers)
  }, []);
  const pretendFetchMakers = () => {
    return 
  }

  const onChangeSearchName = () => {
    // if(value=== map all maker.name){
    //   display card
    // }
  }

  const findByName=()=>{
//maker.name
  }

  const onChangeSearchZip =()=>{
    //maker.zip
  }
  const findByZip =()=>{
    //maker.zip
  }

  const onChangeSearchClothesItem = (e) => {
    // maker.clothesItem
    setFilter(e.target.value)
  }
  const findByClothesItem = () => {
    // maker.clothesItem
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
            //onChange={onChangeSearchName}
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
            <select onChange={onChangeSearchClothesItem}>
            
              {filteredData.map((maker, index) => {
                return (
                  <option value={maker.clothesItem} key={index}> {maker.clothesItem.substring(0, 20)} </option>
                )
              })}
            </select>
            {/* <div className="">
              <button
                className="btn btn-outline-secondary"
                type="button"
              // onClick={findByClothesItem}
              >
                Search
              </button>
            </div> */}
          </div>
        </div>
        <div className="makersCards">
          <MakersCards filter={filter}/>
        </div>
      </div>
    </div>
  )
}

export default Makers
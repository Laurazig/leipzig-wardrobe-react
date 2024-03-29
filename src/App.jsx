import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Navigation from "./Components/Navigation.jsx"
import Footer from "./Components/Footer.jsx"
import Home from "./Views/Home.jsx"
import Makers from "./Views/makers/Makers.jsx"
import Workshops from "./Views/Workshops.jsx"
import './css/index.css'
import NotFound from "./Views/NotFound.jsx"



//state for: add new workshop (form.js)
function App() {
  const [workshops, setWorkshops] = useState([]);
  const [name, setName] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");

  // const [ searchTerm, setSearchTerm ] =useState("");
  //export const FormContext = createContext();

  useEffect(() => {
    setWorkshops(pretendFetch)
  }, [])

  const pretendFetch = () => {
    return [
      {
        id: "1",
        name: "Volkshochschule",
        workshop: "Tailoring basics",
        location: "City center",
        date: "26.04.22",
        price: "20€",
        link: "https://www.vhs-leipzig.de/programm/kunst-kultur-kreativitaet.html?action%5B92%5D=category&cat_ID=495-CAT-KAT168"
      },
      {
        id: "2",
        name: "Daniela Witt",
        workshop: "Alladin trousers",
        location: "Leutzsch",
        date: "23.04.22",
        price: "60€",
        link: "https://dawitt.de/naehkurse-leipzig/"
      },
      {
        id: "3",
        name: "Susanne Welle - SW Handmade ",
        workshop: "Hoodie",
        location: "Plagwitz",
        date: "27.04.22",
        price: "37€",
        link: "https://sw-handmade.de/start.html"
      },
    ]
  }
  const updateWorkshopName = newName => {
    setName(newName);
  }
  const updateWorkshopWorkshop = newWorkshop => {
    setWorkshop(newWorkshop);
  }
  const updateWorkshopLocation = newLocation => {
    setLocation(newLocation);
  }
  const updateWorkshopDate = newDate => {
    setDate(newDate);
  }
  const updateWorkshopPrice = newPrice => {
    setPrice(newPrice);
  }
  const updateWorkshopLink = newLink => {
    setLink(newLink);
  }
  const updateWorkshop = newWorkshop => {
    setWorkshops(workshops.concat(newWorkshop));
    setName("");
    setWorkshop("");
    setLocation("");
    setDate("");
    setPrice("");
    setLink("");
  }  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makers" element={<Makers />} />
            <Route path="/workshops" element={<Workshops 
              workshops={workshops}
              name={name}
              workshop={workshop}
              location={location}
              date={date}
              price={price}
              link={link}
              updateName={updateWorkshopName}
              updateWorkshop={updateWorkshopWorkshop}
              updateLocation={updateWorkshopLocation}
              updateDate={updateWorkshopDate}
              updatePrice={updateWorkshopPrice}
              updateLink={updateWorkshopLink}
              update={updateWorkshop}
            />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

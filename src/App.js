import {useState} from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Mcontent from "./Mcontent";
import Footer from "./Footer";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Stats from "./Stats";
import Votepage from "./Votepage";
function App() {
  const [obj,changeObj] = useState({
    title:"e",
    imgUrl:"hrell",
    name:"dfsfd",
    // cimage:"dfs",
  });
  const handleChange = (e)=>
  {
    console.log("In app")
    console.log(e)
    changeObj({
      title:e.title,
      imgUrl:e.imgUrl,
      name1:e.name1,
      cimage1:e.cimage1,
      name2:e.name2,
      cimage2:e.cimage2,
    })
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route exact path="/" element={<Home handleChange={handleChange}/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/stats" element={<Stats/>}/>
          <Route path="/Votepage" element={<Votepage title={obj.title} img={obj.imgUrl} name1={obj.name1}  cimage1={obj.cimage1} name2={obj.name2} cimage2={obj.cimage2} />} />
        </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;

// import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Components/SideBar";
import "./Styles/app.scss";
// import { useEffect, useState } from "react";
function App() {
  // const [memes, setMemes] = useState([]);
  // const url = "https://api.imgflip.com/get_memes";
  // useEffect(() => {
  //   async function getData() {
  //     const request = await axios.get(url);
  //     setMemes(request.data.data.memes);
  //     console.log(request.data.data.memes);
  //     return request;
  //   }
  //   getData();
  // }, [url]);

  return (
    <div className="app">
      {/* {memes.map((meme) => {
        return (
          <div>
            <h1>{meme.name}</h1>
            <img src={meme.url} alt="" />
          </div>
        );
      })} */}
      <Router>
        <SideBar />
      </Router>
    </div>
  );
}

export default App;

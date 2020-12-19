import React, { useEffect, useState } from "react";
import axios from "axios";
import MemeImage from "../images/Meme.jpeg";
// import MemeContainer from "./Containers/MemeContainer";
import "./meme.css"
const Memes = () => {
  // const [memes, setMemes] = useState([]);
  // const url =
  //   "https://raw.githubusercontent.com/alenwelch/image-/main/api/Data.json";
  // useEffect(() => {
  //   async function getData() {
  //     const request = await axios.get(url);
  //     setMemes(request.data);
  //     console.log(request.data);
  //     return request;
  //   }
  //   getData();
  // }, [url]);
  return (
    <div className="meme">
      {/* {memes.map((meme) => {
       
         <MemeContainer image={memes}
        
      })} */}
      {/* {memes.map((meme) => return (
        <MemeContainer image={memes.img} />;
      ))} */}
      <div className="meme-container">
        {/* {memes.map((image) => (
          <MemeContainer image={image.img} />
        ))} */}
        <div className="card">
            <img src={MemeImage} alt="avatar" className="image"/>
        </div>
      </div>
    </div>
  );
};

export default Memes;

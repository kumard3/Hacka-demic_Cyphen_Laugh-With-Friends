import React, { useEffect, useState } from "react";
import axios from "axios";
const Memes = () => {
  //   const [memes, setMemes] = useState([]);
  //   const url = "https://api.imgflip.com/get_memes";
  //   useEffect(() => {
  //     async function getData() {
  //       const request = await axios.get(url);
  //       setMemes(request.data.data.memes);
  //       console.log(request.data.data.memes);
  //       return request;
  //     }
  //     getData();
  //   }, [url]);
  return (
    <div className="meme">
      {/* {memes.map((meme) => {
        return (
          <div>
            <h1>{meme.name}</h1>
            <img src={meme.url} alt="" />
          </div>
        );
      })} */}
    </div>
  );
};

export default Memes;

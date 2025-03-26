
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import ShowData from "./SubComponents/ShowData";
import { ClipLoader } from "react-spinners";


function UserData() {
  const [isLoading,setIsLoading]=useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [subPart,setSubPart]=useState([]);
  const [search, setSearch] = useState("");
  console.log(dataArray);

   useEffect(()=>{
    setIsLoading(true);
    axios.get("https://api.escuelajs.co/api/v1/products").then((response)=>{
      console.log(response.data);
      setDataArray(response.data);
      setSubPart(response.data);
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setIsLoading(false);
    })
   },[]);

 

  useEffect(() => {
    const myFilter = subPart.filter((elements, index) =>
      elements.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(myFilter);
    setDataArray(myFilter);
  }, [search]);

  return (
    <div className="container-fluid mt-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label py-3">
          Search
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter to search"
          id="exampleFormControlInput1"
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {isLoading ? (
          <ClipLoader color="#36D7B7" size={50} />
        ) : (
          <ShowData data={dataArray}></ShowData>
        )}
      </div>
    </div>
  );
}

export default UserData

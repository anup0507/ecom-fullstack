import { useState,useEffect } from "react";

function useWindowSize()
{
    let [windowsize,setWindowSize]=useState([window.innerWidth,window.innerHeight]);
    function setSize()
    {
        console.log("Resized");
        setWindowSize([window.innerWidth,window.innerHeight]);
    }
    useEffect(()=>{
    window.addEventListener("resize",setSize);
    return () => {
        window.removeEventListener("resize", setSize);
      };
    },[]);
    return windowsize;
}

export default useWindowSize;
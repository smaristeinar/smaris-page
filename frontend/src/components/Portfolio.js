import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { getPortFolioItems } from "../Helpers/getPortfolioItems";
import Card from "./common/Card";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([])

  useEffect(()=>{
  const data = getPortFolioItems()
   setPortfolioItems(data);
  
  },[])

  return (
    <section className="portfolio">
      <h1>hello world</h1>
      {portfolioItems?.data?.length ? portfolioItems.data.forEach(item => {
       return <p>shit</p>
      }) : <p>poops</p>}
    </section>
  );
}

import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { getPortFolioItems } from "../Helpers/getPortfolioItems";
import Card from "./common/Card";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const data = getPortFolioItems();
    setPortfolioItems(data);
  }, []);

  return (
    <section className="portfolio">
      {portfolioItems?.data?.length ? (
        portfolioItems.data.map((item) => {
          return <Card props={item} key={item.id} />;
        })
      ) : (
        <p>poops</p>
      )}
    </section>
  );
}

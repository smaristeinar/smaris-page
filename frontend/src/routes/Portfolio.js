import { useEffect, useState } from "react";
import { getPortFolioItems } from "../Helpers/getPortfolioItems";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const data = getPortFolioItems();
    setPortfolioItems(data);
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center pt-20 pb-20 lg:p-20 lg:gap-16 lg:items-start">
        <h1 className="text-3xl pb-10 font-bold lg:pb-0">Portfolio</h1>
        {portfolioItems?.data?.length ? (
          portfolioItems.data.map((item) => {
            return <Card props={item} key={item.id} />;
          })
        ) : (
          ""
        )}
      </div>
      <div className="pb-6">
      <Link to="/about">
        <Button content={"Get to know me"} />
      </Link>
      </div>
    </section>
  );
}

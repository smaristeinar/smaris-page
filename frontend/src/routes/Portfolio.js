import { useEffect, useState } from "react";
import { getPortFolioItems } from "../Helpers/getPortfolioItems";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const data = getPortFolioItems();
    setPortfolioItems(data);
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center pt-20 pb-20 lg:p-20 lg:gap-16 lg:items-start">
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
        <Button content={"Get to know me"} />
      </div>
    </section>
  );
}

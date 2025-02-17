import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

const { products } = useContext(ShopContext);

const [LimitedEdition, SetLimitedEdition] = useState([]);

useEffect(() => {
  SetLimitedEdition(
    products.filter((item) => item.category === "Limited-Edition")
  );
}, [products]);

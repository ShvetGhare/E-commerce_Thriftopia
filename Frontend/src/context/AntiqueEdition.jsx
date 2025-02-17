import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

const { products } = useContext(ShopContext);

const [AntiqueEdition, SetAntiqueEdition] = useState([]);

useEffect(() => {
  SetAntiqueEdition(products.filter((item) => item.category === "Antique"));
}, [products]);

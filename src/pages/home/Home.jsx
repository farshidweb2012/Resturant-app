import React, { useState } from "react";
import Header from "../../Component/header/Header";
import ExploreMenu from "../../Component/exploremenu/ExploreMenu";
import Fooddisplay from "../../Component/fooddisplay/Fooddisplay";
import { AppDownlaod } from "../../Component/Appdownload/AppDownlaod";

export default function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <AppDownlaod />
    </div>
  );
}

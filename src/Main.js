import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

class Main extends React.Component {

  render() {
    let beast = data.map((elem, idx) => {
      return (
        <HornedBeast
          imageUrl={elem.image_url}
          title={elem.title}
          description={elem.title}
          keyword={elem.keyword}
          key={elem.idx}
          horns={elem.horns}
        />
      )
    });

    return (
      <main>
        {beast}
      </main>
    )
  }
}

export default Main;
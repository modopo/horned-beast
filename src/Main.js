import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    let beast = this.props.data.map((elem) => {
      return (
        <HornedBeast
          imageUrl={elem.image_url}
          title={elem.title}
          description={elem.description}
          keyword={elem.keyword}
          horns={elem.horns}
          key={elem._id}
          openModal={this.props.openModal}
        />
      )
    });

    return (
      <main>
        {beast}
      </main>
    )
  };
}

export default Main;
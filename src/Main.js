import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    let beastToRender = this.props.data.filteredData.map(elem => {
      return (
        <HornedBeast
          imageUrl={elem.image_url}
          title={elem.title}
          description={elem.description}
          keyword={elem.keyword}
          horns={elem.horns}
          key={elem._id}
          modalInfo={this.props.modalInfo}
        />
      )
    });

    return (
      <>
        <main>
          {beastToRender}
        </main>
      </>
    )
  };
}

export default Main;
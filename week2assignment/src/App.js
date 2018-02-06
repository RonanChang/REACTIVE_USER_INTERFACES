import React, { Component } from "react";
import Article from "./article.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          date="Feb. 4, 2018"
          link="https://www.nytimes.com/2018/02/04/climate/trump-climate-nominee-white-withdraw.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=sectionfront"
          title="Trump to Withdraw Nomination of Climate Skeptic as Top Environmental Adviser"
          body="The White House is dropping Kathleen Hartnett White from consideration to lead the Council on Environmental Quality."
          name="lisa friedman"
          src="images/1.jpg"
        />
        <Article
          date="Feb. 4, 2018"
          link="https://www.nytimes.com/2018/02/04/us/amtrak-crash-south-carolina.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=2&pgtype=sectionfront"
          title="Amtrak Train Collision Kills at Least 2 and Injures Nearly 70 Others"
          body="A passenger train traveling from New York to Miami collided with a freight train Sunday in South Carolina, the second major crash involving the rail company in less than a week."
          name="yonette joseph"
          src="images/2.jpg"
        />
        <Article
          date="Feb. 3, 2018"
          link="https://www.nytimes.com/2018/02/03/arts/natalie-wood-drowning-robert-wagner.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=3&pgtype=sectionfronts"
          title="New Doubts in Natalie Wood’s Death: ‘I Don’t Think She Got in the Water by Herself’"
          body="The actress’s 1981 death at sea was recently reclassified as suspicious. Robert Wagner, her husband, is not a suspect but “more of a person of interest now,” the police said."
          name="maya salam"
          src="images/3.jpg"
        />
      </div>
    );
  }
}

export default App;

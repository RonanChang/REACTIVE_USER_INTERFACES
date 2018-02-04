import React, { Component } from "react";
import Article from "./article.js";
import Date from "./date.js";
import Content from "./content.js";
import Image from "./image.js";
import Heading from "./heading.js";
import Body from "./body.js";
import Author from "./author.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article>
          <Date mon="Feb" day="4" year="2018" />
          <Content>
            {" "}
            <Heading
              link="https://www.nytimes.com/2018/02/04/climate/trump-climate-nominee-white-withdraw.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=sectionfront"
              title="Trump to Withdraw Nomination of Climate Skeptic as Top Environmental Adviser"
            />
            <Body body="The White House is dropping Kathleen Hartnett White from consideration to lead the Council on Environmental Quality." />
            <Author name="LISA FREIDMAN" />{" "}
          </Content>
          <Image src="images/1.jpg" />
        </Article>
        <hr />
        <Article>
          <Date mon="Feb" day="4" year="2018" />
          <Content>
            {" "}
            <Heading
              link="https://www.nytimes.com/2018/02/04/us/amtrak-crash-south-carolina.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=2&pgtype=sectionfront"
              title="Amtrak Train Collision Kills at Least 2 and Injures Nearly 70 Others"
            />
            <Body body="A passenger train traveling from New York to Miami collided with a freight train Sunday in South Carolina, the second major crash involving the rail company in less than a week." />
            <Author name="YONETTE JOSEPH" />{" "}
          </Content>
          <Image src="images/2.jpg" />
        </Article>
        <hr />
        <Article>
          <Date mon="Feb" day="3" year="2018" />
          <Content>
            {" "}
            <Heading
              link="https://www.nytimes.com/2018/02/03/arts/natalie-wood-drowning-robert-wagner.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=stream&module=stream_unit&version=latest&contentPlacement=3&pgtype=sectionfronts"
              title="New Doubts in Natalie Wood’s Death: ‘I Don’t Think She Got in the Water by Herself’"
            />
            <Body body="The actress’s 1981 death at sea was recently reclassified as suspicious. Robert Wagner, her husband, is not a suspect but “more of a person of interest now,” the police said." />
            <Author name="MAYA SALAM" />{" "}
          </Content>
          <Image src="images/3.jpg" />
        </Article>
      </div>
    );
  }
}

export default App;

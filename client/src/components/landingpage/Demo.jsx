import React from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import team from "../../assets/landingpage/team.png";
import trust from "../../assets/landingpage/trust.png";
import team1 from "../../assets/landingpage/team1.png";
import ReactPlayer from "react-player";
import video from "../../assets/landingpage/video.mp4";
import footer from "../../assets/landingpage/illustartion.png";
import { Link } from "react-router-dom";
function Demo() {
  return (
    <div className="Demo">
      <div className="bg">
        <Jumbotron>
          <h1>Welcome To JUST4GIVING!</h1>
          <p>
          <Link to={"/signupneeder"}>
            <Button className="btn-sm">I Need Something</Button>
          </Link>
          <Link to={"/signupgiver"}>
            <Button className="btn-sm">I Want to donate Something</Button>
          </Link>
          </p>
        </Jumbotron>

        <CardDeck className="cards">
          <Card className="shadow-lg rounded card1">
            <Card.Body>
              <Card.Title id="card1h">Donate</Card.Title>
              <Card.Text id="card1p">
                Don't throw it away, give it away. Help others to have a better
                life.
              </Card.Text>
              <Card.Img
                style={{ width: "120px", height: "120px" }}
                src={team}
              />
            </Card.Body>
          </Card>
          <Card className="shadow-lg rounded card2">
            <Card.Body>
              <Card.Title id="card2h">Help</Card.Title>
              <Card.Text id="card2p">
                We know you are strong but accepting help is its own kind of
                strength.
              </Card.Text>
              <Card.Img
                style={{ width: "120px", height: "120px" }}
                src={trust}
              />
            </Card.Body>
          </Card>
          <Card className="shadow-lg rounded card3">
            <Card.Body>
              <Card.Title id="card3h">Connected</Card.Title>
              <Card.Text id="card3p">
                Stay connected. The world is full with nice people. If you can't
                find one Be One!
              </Card.Text>
              <Card.Img
                style={{ width: "120px", height: "120px" }}
                src={team1}
              />
            </Card.Body>
          </Card>
        </CardDeck>

        <div className="container">
          <div className="player-wrapper">
            <h2 id="videoh">Our Vision</h2>
            <ReactPlayer
              className="react-player"
              width="80%"
              height="650px"
              controls={true}
              url={video}
            />
          </div>
        </div>

        <div>
          <img className="bg2" src={footer} alt="bg2" />
        </div>
      </div>
    </div>
  );
}
export default Demo;

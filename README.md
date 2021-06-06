# Just4Giving

> A full-stack app used to connect people who want to donate goods (giver) to people in need (needer).
> ))

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Authors](#authors)

## General info

There are many people in Brussels who want to get rid of objects they no longer use, like furniture, clothes, books, electronics, PCs and so forth, and at the same time want to help the ones in need.
We call the first group `Needers` and the second `Givers`.
The idea of the application is to offer a tool to connect those who have items to donate with those in need. This app provides an easy and secure connection between Givers and Needers.

## Screenshots

![Example screenshot](https://cdn.jsdelivr.net/gh/hyf-Group2-fp/Just4Giving/img/just4giving.png)![just4giving_2](https://user-images.githubusercontent.com/979362/120942397-f8b28380-c728-11eb-9cf9-46a2d70ee7c8.png)
![just4giving_2b](https://user-images.githubusercontent.com/979362/120942400-fc460a80-c728-11eb-9dce-1e5f59ae56e7.png)


## Technologies

#### UX/UI

- Figma

#### Front-End

- HTML 5
- CSS 3
- BootStrap 4.6
- JavaScript
- React 17.0.2
- Axios 0.21.1
- Redux 4.1.0

#### Back-End

- Node.js 14.16.1
- Express 4.17.1
- Nodemon 2.0.3
- sequelize 6.6.2
- MySQL 2.2.5
- VSC 1.51
- Postman 8.3.0

#### Dev-OPs

- Heroku

## Setup

- `npm install` in the root folder.
- `cd client` && `npm install`
- `npm` run dev`

## Code Examples

```js
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

```

## Features

List of features ready and TODOs for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_

## Inspiration

## Authors

#### Project Coaches :

- [@Dirk Jacobs](https://github.com/dirk-jacobs)
- [@Anthony Meirlaen](https://github.com/Toinne)
- [@Jan Vanbuel](https://github.com/jvanbuel)

#### Project Owner :

- [@Samir M.](https://github.com/samirm00)

#### UX/UI designer :

- [@Anisya Purnama](https://github.com/AnisyaPurnama)

#### Front-End :

- [@Bermarte](https://github.com/bermarte) (Mentor)
- [@Samir M.](https://github.com/samirm00) (Mentor)
- [@Divya Sree](https://github.com/Divyasree345)
- [@Sharaf](https://github.com/sharafcs50)
- [@Peyman](https://github.com/peymanshahmarimikaeeldarehsi)

#### Back-End :

- [@Samir M.](https://github.com/samirm00) (Mentor)
- [@Bermarte](https://github.com/bermarte)
- [@Kemi](https://github.com/kemmy72)
- [@Brain Ketunze](https://github.com/Brainketunze)

#### Dev-OPs :

- [@Samir M.](https://github.com/samirm00)

---

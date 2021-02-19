import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './protry.style.css';

import spelling from '../../assets/img/projects/spellinggame.png'
import proedge from '../../assets/img/projects/proedge.png'
import portfolio from '../../assets/img/projects/portfolio.png'
import grocerylist from '../../assets/img/projects/grocerylist.png'
import expensetracker from '../../assets/img/projects/expensetracker.png'
import recipejavascript from '../../assets/img/projects/recipe_javascript.png'
import menu from '../../assets/img/projects/menu.png'

const ProjectsTry= () => {
    return (
        <div id="projectspro">
             <div className="pt-3 pb-3" id="skills">
                <div className='title'>
        <h2>Projects</h2>
        <div className='underline'></div>
      </div>
      <CardDeck>
        <Row className="d-flex justify-content-center mx-auto sectioncard">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-4">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">Spelling Game </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#FEDCD1"}}>
                  <Image src={spelling} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">Flutter & Firebase</p>
                    <a href="https://play.google.com/store/apps/details?id=com.tanzina.drag_drop" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>

             <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">Grocery Bud</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#957DAD"}}>
                  <Image src={grocerylist} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">React</p>
                    <a href="https://grocerylist-react.netlify.app" target="_blank"  class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
           

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-4 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Pro-edge Website</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#AFDDED"}} >
                  <Image src={proedge} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">PHP, jQuery, Bootstrap, MySQL</p>
                    <a href="https://proedge-asso.com/" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">Menu-card </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#E1C6C5"}} >
                  <Image src={menu} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">React</p>
                    <a href="https://menu-card.netlify.app" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">Portfolio with React</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#ACE9DD"}} >
                  <Image src={portfolio} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">ReactJS, ReactBootstrap</p>
                    <a href="https://tanzina-akter.netlify.app" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">Recipe App</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#ECA54C" }} >
                  <Image src={recipejavascript} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">JavaScript, HTML, CSS</p>
                    <a href="https://recipe-app-javascript.netlify.app" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
      </div>
        </div>
    )
}

export default ProjectsTry

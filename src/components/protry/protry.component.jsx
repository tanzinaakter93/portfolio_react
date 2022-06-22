import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './protry.style.css';

import beesecure_web_app from '../../assets/img/projects/beesecure_web_app.png'
import beesecure_mobile_app from '../../assets/img/projects/beesecure_mobile_app.png'
import rivercity_web from '../../assets/img/projects/rivercity_innovations.png'
import beesecure_web from '../../assets/img/projects/beesecure_web.png'
import tcp_server from '../../assets/img/projects/nodejs_server.png'
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
                <Card.Title className="text-center  card-title">BeeSecure Web App</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#dae0e5"}}>
                  <Image src={beesecure_web_app} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">Codeigniter, JavaScript, JQuery, SQL</p>
                    <a href="https://app.beesecure.ca/login" target="_blank"  class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">Rivercity Innovations Website</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#AFDDED" }} >
                  <Image src={rivercity_web} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">WordPress</p>
                    <a href="https://rivercityinnovations.ca/" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
           
          </Col>

          {/* Backend */}
          <Col md={4}>
           
            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">BeeSecure Mobile App</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#f1d582"}} >
                  <Image src={beesecure_mobile_app} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">Flutter, Codeingniter, SQL</p>
                    <a href="https://play.google.com/store/apps/details?id=com.rivercityinnovations.beesecure" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            
            <Card className="focus mt-2 mb-4 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Tcp Server</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "#81b1e5"}} >
                  <Image src={tcp_server} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">Node.Js</p>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          
   
          </Col>

          <Col md={4}>
            <Card className="focus mt-2 mb-4">
              <Card.Body>
                <Card.Title className="text-center  card-title">BeeSecure Website</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{backgroundColor: "rgb(237 196 144)"}} >
                  <Image src={beesecure_web} rounded className="proimage-style mx-auto"></Image>
                  <div class="card-img-overlay">
                    <h4 class="card-title text-center">Developed with</h4>
                     <p class="card-text text-center">WordPress</p>
                    <a href="https://beesecure.ca/" target="_blank" class="btn btn-lg" role="button">View</a>
                 </div>
                </Card.Text>
              </Card.Body>
            </Card>

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

            
          </Col>
        </Row>
      </CardDeck>
      </div>
        </div>
    )
}

export default ProjectsTry

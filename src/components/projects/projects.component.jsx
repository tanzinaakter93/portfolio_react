import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './projects.style.css'
import spelling from '../../assets/img/projects/spellinggame.png'
import proedge from '../../assets/img/projects/proedge.png'
import portfolio from '../../assets/img/projects/portfolio.png'
import grocerylist from '../../assets/img/projects/grocerylist.png'
import expensetracker from '../../assets/img/projects/expensetracker.png'
import recipejavascript from '../../assets/img/projects/recipe_javascript.png'
import menu from '../../assets/img/projects/menu.png'


const Projects=()=>{
    return (
        <div id="projects">
             <div className="pt-3 pb-3" id="skills">
                <div className='title'>
        <h2>Projects</h2>
        <div className='underline'></div>
      </div>
      <CardDeck>
        <Row className="d-flex justify-content-center mx-auto">
          {/* Frontend */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner" style={{backgroundColor: "#FEDCD1"}} >
            <Card.Img className="card-img-top img-fluid" src={spelling} />
            <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">Flutter & Firebase
               <a href="https://play.google.com/store/apps/details?id=com.tanzina.drag_drop" target="_blank" class="btn btn-fix text-center">View</a>
               </div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title" >Spelling Game Mobile App</Card.Title>
              </Card.Body>
            </Card>
          </Col>

         
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner" style={{backgroundColor: "#AFDDED"}}  >
            <Card.Img className="card-img-top img-fluid" src={proedge} />
            <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">PHP, jQuery, Bootstrap, MySQL
              <a href="https://proedge-asso.com/" target="_blank" class="btn btn-fix text-center">View</a></div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title">Pro-edge Associates Limited Website</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner"  style={{backgroundColor: "#ACE9DD"}} >
                <Card.Img className="card-img-top img-fluid" src={portfolio} />
                <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">ReactJS, ReactBootstrap
              <a href="https://proedge-asso.com/" target="_blank" class="btn btn-fix text-center">View</a>
              </div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title">Portfolio with React</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mx-auto">
          
          <Col md={3}>
            <Card className="focus mt-2 mb-2  card-inner" style={{backgroundColor: "#957DAD"}}>
            <Card.Img className="card-img-top img-fluid" src={grocerylist} />
            <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">React
               <a href="https://grocerylist-react.netlify.app" target="_blank" class="btn btn-fix text-center">View</a></div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title">Grocery Bud</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner" style={{backgroundColor: "#E1C6C5"}}  >
            <Card.Img className="card-img-top img-fluid" src={menu} />
            <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">React
              <a href="https://menu-card.netlify.app" target="_blank" class="btn btn-fix text-center">View</a></div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title">Menu-card</Card.Title>
              </Card.Body>
            </Card>
          </Col>

   
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner" style={{backgroundColor: "#ECA54C" }} >
                <Card.Img className="card-img-top img-fluid"  src={recipejavascript}  />
                <div className="image-overlay">
              <div className="image-title">Developed with</div>
              <div className="image-description">JavaScript, HTML, CSS
              <a href="https://recipe-app-javascript.netlify.app" target="_blank" class="btn btn-fix text-center">View</a></div>
            </div>
              <Card.Body style={{backgroundColor: "#F6F6F6"}}>
                <Card.Title className="text-center  card-title">Recipe App</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
      </div>
        </div>
    )

}

export default Projects
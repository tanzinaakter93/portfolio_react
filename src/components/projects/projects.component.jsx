import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './projects.style.css'
import spelling from '../../assets/img/projects/spellinggame.png'
import proedge from '../../assets/img/projects/proedge.png'
import portfolio from '../../assets/img/projects/portfolio.png'
import grocerylist from '../../assets/img/projects/grocerylist.png'
import expensetracker from '../../assets/img/projects/expensetracker.png'


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
            <Card className="focus mt-2 mb-2 card-inner">
            <Card.Img className="card-img-top img-fluid" style={{objectFit:"contain"}} src={spelling} />
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title" >Spelling Game Mobile App</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner">
            <Card.Img className="card-img-top img-fluid"  style={{objectFit:"contain"}}  src={proedge} />
              <Card.Body>
                <Card.Title className="text-center  card-title">Pro-edge Associates Limited Website</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner">
                <Card.Img className="card-img-top img-fluid"  style={{objectFit:"contain"}}  src={portfolio} />
              <Card.Body>
                <Card.Title className="text-center  card-title">Portfolio with React</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mx-auto">
          {/* Frontend */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2  card-inner">
            <Card.Img className="card-img-top img-fluid"  style={{objectFit:"contain"}}  src={grocerylist} />
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">Grocery Bud</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner">
            <Card.Img className="card-img-top img-fluid"  style={{objectFit:"contain"}}  src={expensetracker} />
              <Card.Body>
                <Card.Title className="text-center  card-title">Basic Expense Tracker</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={3}>
            <Card className="focus mt-2 mb-2 card-inner">
                <Card.Img variant="top" src="holder.js/100px160"  style={{objectFit:"contain"}} />
              <Card.Body>
                <Card.Title className="text-center  card-title">Online Result Publishing</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  
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

export default Projects
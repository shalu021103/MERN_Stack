import {Row,Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';
import { MdLocationPin } from "react-icons/md";
import {AiFillCar} from 'react-icons/ai';
import {SiYourtraveldottv} from 'react-icons/si';
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

function BasicExample() {
  return (
    <container >
      <div>
        <Row>
          <Col  md={12}>
          <Image style={{ paddingTop:'1%', width:'100%'}} src="https://img.freepik.com/free-photo/peaceful-cute-horses-nature_23-2149066264.jpg?w=1060&t=st=1689227400~exp=1689228000~hmac=c7652bbef6ee7941f6ea5374ab84d5e4c71503a6e5a28f2953762e694bbbd0b6" />
          </Col>
        </Row>
        <div className='sec-row'>
        <Row>
          <Col md={5}>
          <Image style={{width:'80%', padding:'10%', paddingleft:'30%'}} src="https://img.freepik.com/free-photo/peaceful-cute-horses-nature_23-2149066264.jpg?w=1060&t=st=1689227400~exp=1689228000~hmac=c7652bbef6ee7941f6ea5374ab84d5e4c71503a6e5a28f2953762e694bbbd0b6"/>
          </Col>
          <Col md={5}>
            <div style={{padding:'10%', textAlign:'left'}}>
            <h2>Nature</h2>
            <h4>Feel It</h4>
            <p>Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem.</p>
            <Button variant="success" size="sm">READ MORE</Button>{' '}
            </div>
          </Col>
        </Row>
        </div>
      </div>
      <div className='sec-row'>
      <Row>
        <Col>
        <div style={{padding:'10%', textAlign:'left'}}>
        <h3>Tourism</h3>
        <p> They're not just passive observers. Nature tourists are attracted to mountains and oceansides, wilderness and undisturbed areas, birds, trees and wildflowers, lakes and streams, wildlife, parks and rural areas.</p>
        </div>
        </Col>
        <Col>
        <div style={{padding:'10%'}}className='sec-row'>
        <MdLocationPin size={'70px'}/>
        <h5>Location</h5>
        </div>
        </Col>
        <Col>
        <div style={{padding:'10%'}}>
        <AiFillCar size={'70px'}/>
        <h5>Travel</h5>
        </div>
        </Col>
        <Col>
        <div style={{padding:'10%'}}>
        <SiYourtraveldottv size={'70px'}/>
        <h5>Tour</h5>
        </div>
        </Col>
      </Row>
      </div>
      <div style={{backgroundColor:'black'}}>
        <Row>
          <Col md={5}>
          <Image style={{width:'90%', padding:'10%'}} src="https://img.freepik.com/free-photo/whitetail-deer-standing-autumn-wood_167946-143.jpg?w=1060&t=st=1689245183~exp=1689245783~hmac=c835757c21be9c50215c49847af9a8b436f10e3ed1df9edf1546cf0a83cee5a8"/>
          </Col>
          <Col>
          <div style={{padding:'10%', textAlign:'left'}}>
          <h3 style={{color:'wheat'}}>Wild Animals</h3>
          <p style={{color:'white'}}>Wild animals are very important in balancing the environment. They provide stability to different natural processes of nature.</p>
          <Button href='https://en.wikipedia.org/wiki/Wildlife' target='blank' variant="success" size="sm">LEARN MORE</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div style={{padding:'10%', textAlign:'left'}}>
          <h3 style={{color:'wheat'}}>Sea Animals</h3>
          <p style={{color:'white'}}>Sea animals are the animals that live deep in the seas.</p>
          <Button href='https://en.wikipedia.org/wiki/Marine_life' target='blank' variant="success" size="sm">LEARN MORE</Button>{' '}
          </div>
          </Col>
          <Col md={5}>
          <Image style={{width:'80%', padding:'10%', paddingleft:'30%'}} src="https://img.freepik.com/free-photo/clownfish-ctenochaetus-tominiensis-blue-malawi-cichlids-swimming-near-coral-duncan_181624-20100.jpg?w=1380&t=st=1689246173~exp=1689246773~hmac=3ac1c83039c4babc16f4d932f4c67268968c5c7c01f79ac712578fe4dedb8f98"/>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
          <Image style={{width:'80%', padding:'10%', paddingleft:'30%'}} src="https://img.freepik.com/premium-photo/beautiful-blue-yellow-butterfly-illustration-generative-ai_115919-4300.jpg?w=1060"/>
          </Col>
          <Col>
          <div style={{padding:'10%', textAlign:'left'}}>
          <h3 style={{color:'wheat'}}>Butterfly</h3>
          <p style={{color:'white'}}>A butterfly is an insect with wings that are very beautiful and mesmerizing. We can observe different colors and patterns in the wings.</p>
          <Button href='https://en.wikipedia.org/wiki/Butterfly' target='blank' variant="success" size="sm">LEARN MORE</Button>
          </div>
          </Col>
        </Row>
      </div>
      <div style={{paddingTop:'5%'}}>
      <h3 style={{paddingLeft:'45%'}}>Best Tourism</h3>
      <Row style={{paddingLeft:'12%'}}>
          <Col md={2} style={{padding:'3%'}}>
          <Image style={{width:'120%'}} src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSge9h9IRg-oKPuPRpnfAtu6CdzYhzBWV6X7yUEtUI58JvSp-Tw0bS1Za2Dda4N59wc"/>
          <h6>Silent Valley National Park</h6>
          </Col>
          <Col md={2} style={{padding:'3%'}}>
          <Image style={{width:'130%'}} src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/11/Best-Time-To-Visit-Nehru-Zoological-Park.jpg"/>
          <h6>Nehru Zoological Park</h6>
          </Col>
          <Col md={2} style={{padding:'3%'}}>
          <Image style={{width:'120%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Collarwali_Tigress_of_Pench.jpg/1200px-Collarwali_Tigress_of_Pench.jpg"/>
          <h6>Pench National Park</h6>
          </Col>
          <Col md={2} style={{padding:'3%'}}>
          <Image style={{width:'120%'}} src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRn1FyNQmVN0YEpsQEH3Fp3eAev61s86C5XCFeohC5a0lwZFNfRjMEODB50N8IooDlx"/>
          <h6>Sundarbans</h6>
          </Col>
          <Col md={2} style={{padding:'3%'}}>
          <Image style={{width:'120%'}} src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQMPr13BobuybfaNr0nRY2RRKBzRHseo8MIzl6l0cI2gBdp5PhmlKKNaSXrOF0RaiTw"/>
          <h6>Periyar National Park</h6>
          </Col>
        </Row>
        </div>
        <div style={{paddingRight:'10%'}}>
        <Row>
          <Col md={6}>
          <Image style={{width:'50%', padding:'10%', alignContent:'right'}} src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982164812/a-history-of-wild-places-9781982164812_hr.jpg"/>
           </Col>
           <Col md={6}>
            <h3 style={{paddingTop:'20%'}}>History of Wild</h3>
            <p style={{textAlign:'left'}}>In this “riveting, atmospheric thriller that messes with your mind in the best way” (Laini Taylor, New York Times bestselling author), three residents of a secluded, seemingly peaceful commune investigate the disappearances of two outsiders.</p>
           </Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col>
          <Image style={{width:'100%', height:'100%'}} src="https://img.freepik.com/premium-photo/swan-black-two-close-heart-neck-lake_8353-3205.jpg"/>
          </Col>
          <Col>
          <Row>
            <Col md={6}>
            <Image style={{width:'110%'}} src="https://img.freepik.com/premium-photo/side-view-woman-holding-sheep-food_23-2149535214.jpg?w=1060"/>
            </Col>
            <Col style={{backgroundColor:'white'}} md={6}>
              <div style={{justifycontent: 'center', padding:'20%'}}> 
            <h4>Look at Range of Landscapes</h4>
            <Button href='https://www.freepik.com/premium-photo/side-view-woman-holding-sheep-food_29609042.htm' target='blank' variant="outline-success" size="sm">INTERESTING</Button>
            </div>
            </Col>
          </Row>
          <Row>
            <Col style={{backgroundColor:'white'}} md={6}>
            <div style={{justifycontent: 'center', padding:'20%'}}> 
            <h4>Take your creativity to the next level</h4>
            <Button href='https://www.freepik.com/premium-photo/full-shot-girl-running-nature_34303907.htm' target='blank' variant="outline-success" size="sm">INTERESTING</Button>
            </div>
            </Col>
            <Col md={6}>
            <Image style={{width:'110%', paddingRight:'10%'}} src="https://img.freepik.com/premium-photo/full-shot-girl-running-nature_23-2149913407.jpg?w=1060"/>
            </Col>
          </Row>
          </Col>
        </Row>
        </div>
        <div style={{padding:'10%'}}>
        <Row>
          <Col>
          <Row>
            <Col style={{textAlign:'left'}}>
            <h3>Best Place</h3>
            <p>Grand Southern Trunk Rd, Vandalur, Tamil Nadu 600048</p>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign:'left'}}>
            <h3>Follow Us</h3>
             <FaInstagram/> <FaFacebook/> <FaTwitter/> <FaLinkedin/>
            </Col>
          </Row>
          </Col>
          <Col>
          <Form>
            <h2 style={{textAlign:'left'}}>Contact Form</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="name" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Email ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Type your message" />
      </Form.Group>
      <Button style={{alignContent:'start'}} href='https://www.freepik.com/premium-photo/full-shot-girl-running-nature_34303907.htm' target='blank' variant="outline-success" size="sm">Submit</Button>
    </Form>
          </Col>
        </Row>
        </div>
        <footer style={{backgroundColor:'black', color:'GrayText', paddingLeft:'40%'}}>
          <br/><p>Enjoy your vacations with Nature!</p> <br/>
        </footer>
      </container>
  );
}

export default BasicExample;
import { Col, Container, Row } from 'reactstrap';
import Menubar from './Menubar';
import MyNavbar from './MyNavbar';
import MainContent from './MainContent';



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row  className='mt-1'>
          <Col xs="2" className='m-0 p-0'>
            <Menubar item1="Home" item2="About" item3="Pages" item4="Portfolio" item5="FAQ" item6="Contact"></Menubar>
          </Col>
          <Col xs="10" className='m-0 p-0' style={{
            backgroundColor:"#f0f0f0"
          }} >
            <MyNavbar></MyNavbar>
            <MainContent></MainContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

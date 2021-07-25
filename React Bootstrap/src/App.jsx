import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from './components/MyCard'

function App() {
  const data = [
    {
      movie: 'Dragon Ball',
      imgSource: 'https://picsum.photos/200/301'
    },
    {
      movie: 'Avenger',
      imgSource: 'https://picsum.photos/201/300'
    },
    {
      movie: 'Justice League',
      imgSource: 'https://picsum.photos/200/300'
    },
  ]
  return (
      <div>
        <h1 className="text-center text-danger my-5">Hello Usama To My Website</h1>
        <Container>
          <Row style={{marginTop: '50px'}}>
          {
            data.map((element,index) => {
              return(
                <Col key={index}>
                  <MyCard {...element}/>
                </Col>
              )
            })
          }
          </Row>
        </Container>
      </div>
  );
}

export default App;
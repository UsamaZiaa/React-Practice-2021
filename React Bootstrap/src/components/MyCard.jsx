import { Card, Button } from 'react-bootstrap'

const MyCard = ({movie, imgSource}) => {
  return(
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={imgSource} style={{ height: '200px'}}/>
      <Card.Body>
        <Card.Title>Title: {movie}</Card.Title>
        <Button variant="danger">Download</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard
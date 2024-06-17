import { Container, Row, Col, Card } from 'react-bootstrap';
import './NewsList.css';
import { Link } from 'react-router-dom';

const NewsList = ({newsList}) => {

    // f4f08702ff3f487fb62ee4cf6eb1760e
    //6d36a43e2ab643af9f2a95f64b8bf2cc
    return (
        <Container>
            <Row>
                {newsList && newsList.map((single, index) => (
                    <Col md={4} key={index} className='single-news'>
                        <Card className='box'>
                            <Card.Img variant="top" src={single.urlToImage ? 
                                single.urlToImage 
                                :"https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt="news" />
                            <Card.Body>
                                <Card.Title>
                                    {single.title && single.title.length > 100
                                        ? `${single.title.slice(0, 100)}...`
                                        : single.title}
                                </Card.Title>
                                <Card.Text>
                                    {single.description && single.description.length > 179
                                        ? `${single.description.slice(0, 100)}...`
                                        : single.description}
                                </Card.Text>
                                <Link to={`news/${index}`} className='btn btn-dark' >Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </Container>
    )
}

export default NewsList;
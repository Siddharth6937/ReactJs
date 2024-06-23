import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './NewsList/NewsList.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleNews = () => {
    let {id} = useParams();
    let newsList = useSelector(state => state.news.newsList);
    let singleNews = newsList && id && newsList[id];

    return (
        <Container>
            <Row>
                {singleNews && (
                    <Col md={{ span: '4', offset: '4' }} className='single-news'>
                <Card>
                    <Card.Img variant="top" src={singleNews.urlToImage ?
                        singleNews.urlToImage
                        : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt="news" />
                    <Card.Body>
                        <Card.Title>
                            {singleNews.title && singleNews.title.length > 100
                                ? `${singleNews.title.slice(0, 100)}...`
                                : singleNews.title}
                        </Card.Title>
                        <Card.Text>
                            {singleNews.description && singleNews.description.length > 179
                                ? `${singleNews.description.slice(0, 100)}...`
                                : singleNews.description}
                        </Card.Text>
                        <Button variant="dark">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
                )}

        </Row>
        </Container >
    )
}

export default SingleNews;
import {useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './Photo.css'

const Photo = () => {
    const [Photos, setPhotos] = useState([]);

    useEffect(() => {


        const photo = async () =>{

            try{
               const res =  await axios.get('https://picsum.photos/v2/list')
                setPhotos(res.data);
            }catch (err){
                console.log(err);
            }
        }

        photo();
    }, []);

   
    return (
        <Container>
            <Row>
                {Photos.map((photo) => (
                    <Col md={3} key={photo.id} className="single-photo">
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>{photo.author}</Card.Header>
                        <Card.Img variant="top" src={photo.download_url}/>
                        <Card.Body>
                          <Button variant="primary">View Source</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                        
                ))}
        </Row>
        </Container >
    )
}


export default Photo;
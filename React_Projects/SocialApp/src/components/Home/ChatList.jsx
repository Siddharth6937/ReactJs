import { Col, Badge, ListGroup } from 'react-bootstrap';
import { FaRegCircleUser } from "react-icons/fa6";

const ChatList = ({ posts }) => {
    return (
        <Col md={3}>
            <ListGroup as="ul" >
                {posts.map(post => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={post.id}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"> <FaRegCircleUser /> {post.author}</div>
                            <div style={{opacity: 0.7}}>{post.chats.message}</div>
                            
                        </div>
                        <Badge bg="primary" pill>
                        {post.chats.messageCount}
                        </Badge>
                    </ListGroup.Item>
                ))}

            </ListGroup>
        </Col>
    )
}

export default ChatList;
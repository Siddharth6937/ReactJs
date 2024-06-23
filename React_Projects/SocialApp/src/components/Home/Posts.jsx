import { Row, Col, Card, Spinner, Button, Badge } from 'react-bootstrap';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Posts = ({ posts, setPosts }) => {

    const toggleLikeCount = (postId) => {
        let updatedPost = posts.map(post => {
            if (postId === post.id) {
                if (post.isLikeByCurrentUser) {
                    post.likeCount = post.likeCount - 1;
                    post.isLikeByCurrentUser = false;

                } else {
                    post.likeCount = post.likeCount + 1;
                    post.isLikeByCurrentUser = true;
                }

            }
            return post;
        })

        setPosts(updatedPost);
    }

    const toggleCommentCount = (postId) => {
        let updatedPost = posts.map(post => {
            if (post.id === postId) {
                post.commentCount = post.commentCount + 1;
            }
            return post;
        })
        setPosts(updatedPost);
    }

    return (
        <Col md={6}>
            <Row>

                {posts.length ?
                    posts.map((posts) => (
                        <Col md={12} key={posts.id}
                            className="single-photo">
                            <Card>
                                <Card.Header className="post-header">
                                    <div>
                                        <FaRegCircleUser /> {' '}
                                        {posts.author}
                                    </div>

                                    <p className="post-time">
                                        {posts.time}
                                    </p>

                                </Card.Header>
                                <Card.Img variant="top" src={posts.download_url} className="photo-img" />
                                <p className="lead">
                                    {posts.text}
                                </p>

                                <Card.Body>

                                    <div className="action-btn-outer">
                                        <Button
                                            variant="light"
                                            onClick={() => toggleLikeCount(posts.id)}
                                        >
                                            {posts.isLikeByCurrentUser ? <AiFillLike /> : <AiOutlineLike />} {' '}
                                            <Badge pill bg="dark">
                                                {posts.likeCount}
                                            </Badge>
                                        </Button>
                                        <Button
                                            variant="light"
                                            onClick={() => toggleCommentCount(posts.id)}
                                        >
                                            <FaRegComment /> {' '}
                                            <Badge pill bg="dark">
                                                {posts.commentCount}
                                            </Badge>
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                    )) : <div className="spinner-wrapper">
                        <Spinner animation="border" role="status"></Spinner>
                    </div>
                }

            </Row>
        </Col>
    )
}

export default Posts;
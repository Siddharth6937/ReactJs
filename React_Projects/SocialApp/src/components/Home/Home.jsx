import { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import './Home.css'

import dummyPostText from "../../assets/dummyPostText.json";
import dummyPostTime from "../../assets/dummyPostTime.json";
import dummyChatListContent from "../../assets/dummyChatListContent";
import MemberActiveStatusList from "./MemberActiveStatusList";
import ChatList from "./ChatList";
import Posts from "./Posts";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {


        const getPhotos = async () => {

            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                let resPosts = [...res.data];
                let postsWithRandomLikesAndComments = resPosts.map(post => {
                    let likeCount = Math.ceil(Math.random() * 1000);
                    let commentCount = Math.ceil(Math.random() * 10);
                    let text = dummyPostText[Math.ceil(Math.random() * 3)];
                    let time = dummyPostTime[Math.ceil(Math.random() * 3)];
                    let isLikeByCurrentUser = false;
                    return {
                        ...post, likeCount, commentCount, text, time, isLikeByCurrentUser
                    }
                })
                setPosts(postsWithRandomLikesAndComments);
            } catch (err) {
                console.log(err);
            }
        }

        getPhotos();
    }, []);


    const randomChatList = posts.filter(post => Number(post.id) % 5 === 0).map(post => {
        post.chats = dummyChatListContent[Math.ceil(Math.random() * 5)];
        
        return post;
    })

    return (


        <Container className="post-container">
            <Row>
                <MemberActiveStatusList posts={posts} />

                <Posts posts={posts} setPosts={setPosts} />

                <ChatList posts={randomChatList} />
            </Row>

        </Container >
    )
}


export default Home;
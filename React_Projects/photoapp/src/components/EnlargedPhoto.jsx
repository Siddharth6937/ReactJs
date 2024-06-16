import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import axios from "axios";

const EnlargedPhoto = () => {
    const { id } = useParams();
    const [singlePhoto, setSinglePhoto] = useState({});

    useEffect(() => {
        const getSinglePhoto = async () => {
            try {
                const res = await axios.get(`https://picsum.photos/id/${id}/info`);
                setSinglePhoto(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getSinglePhoto();
    }, [id]);


    const imgStyle = {
        height: "85vh",
        width: "90vw",
        margin: "30px 0 0"
    }

    return (
        <>
            {Object.keys(singlePhoto).length ? (
                <img
                    src={singlePhoto.download_url}
                    style={imgStyle}
                    alt="img" />
            ) : (
                <div className="spinner-wrapper">
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            )
            }


        </>
    )
}

export default EnlargedPhoto;

const EnlargedPhoto = () => {
    const imgStyle = {
        height : "85vh",
        width : "90vw",
        margin : "30px 0 0"
    }
    return (
        <div>
            <img src="https://picsum.photos/id/10/2500/1667" style={imgStyle} alt="img" />
        </div>
    )
}

export default EnlargedPhoto;
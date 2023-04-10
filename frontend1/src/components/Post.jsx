const Post = ({gest}) => {
    console.log(gest)
    return (  
        <div>
            <h2>{gest.firstname}{gest.lastname} </h2>
            <a href={`mailto:${gest.email}`}>{gest.email}</a>
            <p>{gest.content}</p>
        </div>

    );
}
 
export default Post;
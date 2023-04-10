import "./Inputform.css"

const postObject = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "content": ""
    }

const Inputform = ({setPosts}) => {
const sendData = (e) => {
    e.preventDefault()
 
    fetch("http://localhost:6969/api/v1/getData", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(postObject)
    }) 
    .then(res => res.json())
    .then (data => setPosts(data))
} 

    return ( 
        <form onSubmit={sendData}>
           <input onChange={ (e) => {postObject.firstname=e.target.value }} type="text" placeholder="firstname" />
           <input onChange={ (e) => {postObject.lastname=e.target.value }}type="text" placeholder="lastname" />
           <input onChange={ (e) => {postObject.email=e.target.value }} type="email" placeholder="email" />
            <input onChange={ (e) => {postObject.content=e.target.value }} type="text"  placeholder=" content"/>
           <input  type="submit"  value="absenden" hidden/>

        </form>
        
     );
}
 
export default Inputform;
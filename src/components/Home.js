import {Link} from "react-router-dom"
function Home(){
    return(
        <div id="home">
          <Link style={{color:'black'}} to={'/home'}>HOME</Link>
          <Link style={{color:'black'}} to={'/student'}>STUDENT</Link>
          <Link style={{color:'black'}} to={'/contact'}>CONTACT</Link>
        </div>

    )
}
export default Home;

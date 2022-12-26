import {Link} from 'react-router-dom'
import { ShowData } from './ShowData'
export function Student(){
    return (
        <div>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px',marginBottom:'100px'}}>
        <h1>Student Details</h1>
        <Link to={'/addnew'} id="addnew">Add new student</Link>
        </div>
        <ShowData/>
        </div>
    )
}

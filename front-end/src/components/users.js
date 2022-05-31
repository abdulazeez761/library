import { useState , useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
//user profiles , what the user has posted
const UserBooks = () =>{
    const [users , setUsers] = useState([])
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(()=>{
      let isMounted = true;
      const controller = new AbortController(); //cancle req when the comounent unmounte

      const getUsers = async ()=>{
        try{
          await axiosPrivate.get('/users' , {
             signal:controller.signal //allows to cancle the req if it needs to 
             
         }).then((res)=>{  
            isMounted  && setUsers(res.data.data);  
            // console.log(users)  
         })
       
        }catch(err){
            console.log( err  )
             navigate('/login', { state: { from: location }, replace: true });
        }
      }
      getUsers()
     
      return ()=>{
          isMounted = false;
        //   controller.abort() //gonna cancele the pendding req when the compunent unmount 
          
          
            }
    } , [])
    return(

        <article>
            <h2>users list</h2>
                
            {
                
                users?.length
                ? (
                    <div>
                        <ul>
                        {users.map((user , i)=>{
                            return(
                            <li key={i}>
                                {user?.user_name}
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                ) : <p> no users to desplay</p>
            }
        </article>
    )
}
export default UserBooks
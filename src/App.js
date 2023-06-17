import { useState } from "react";
import Enquiryform from "./component/Enquiryform";
import Enquirylist from "./component/Enquirylist";

function App() {
const enquiryData=[
  {id:1,name:"anand",phnumber:"9791266990",email:"anandmunima@gmail.com",date:"10:46",course:"backend",passedout:2022,degree:"m.c.a"},
  {id:2,name:"sampath",phnumber:"9791268888",email:"sampath@gmail.com",date:"10:50",course:"full-stack",passedout:2019,degree:"mech"}
];

const addUser=(user)=>{
  user.id=users.length+1;
  setUsers([...users,user])
}

const deleteUser=(id)=>{
  setUsers(users.filter((user)=>user.id!==id))
}

const[users,setUsers]=useState(enquiryData);

  return (
    <div className="App">
     <Enquiryform addUser={addUser}/>
     <Enquirylist users={users} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;

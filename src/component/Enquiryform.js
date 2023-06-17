import React, { useState } from 'react'

const Enquiryform = (props) => {
 
  const initialFormState={id:null,name:"",phnumber:"",email:"",date:"",course:"",passedout:"",degree:""}
   
  const[user,setUser]=useState(initialFormState);

  const handleInputchange=(event)=>{
    const {name,value}=event.target
    setUser({...user,[name]:value})
    console.log({...user,[name]:value});
  }

  // const handleChange=(event)=>{
  //   const {name,value}=event.target
  //   setUser({...user,[name]:value})
  //   console.log(event.target.value);
  //   console.log({...user,[name]:value});
  // }
  
  return (
    <div className='form-container'>
        <h1>Welcome to Login360</h1>
        <div className="form-content">
          <div className="form-subcontent">
          <form onSubmit={
            event=>{
              event.preventDefault();
              if(!user.name||!user.phnumber||!user.email||!user.date||!user.passedout||!user.degree) return;
              props.addUser(user);
              setUser(initialFormState);
            }
          }>
       <h2>Enquiry Form</h2>
<label htmlFor='name'>Name</label>
<input type="text" name="name"  id='name' onChange={handleInputchange} value={user.name} />

<label htmlFor='phnumber'>phone Number</label>
<input type='number' name='phnumber'  id='phnumber' onChange={handleInputchange} value={user.phnumber}/>

<label htmlFor='email'>Email</label>
<input type="email" name='email'  id='email'onChange={handleInputchange} value={user.email} />

<label htmlFor="date">Current Date</label>
<input type="date" name='date' id='date' onChange={handleInputchange} value={user.date}/>

<label htmlFor="course">courses</label>
<select name="course" id="course" onChange={handleInputchange}>
<option name='noidea' value="No-Idea" >No-Idea</option>
   <option name='froent-end' value="Froent-End" >Froent-End</option>
   <option name='full-stack' value="Full-Stack" >Full-Stack</option>
   <option name='back-end' value="Back-End" >Back-End</option>
   <option name='database' value="Database" >DataBase</option>
   <option name='digital-marketing' value="Digital-Marketing" >Digital-marketing</option>
   <option name='software-testing' value="Software-Testing" >Software-Testing</option>
   <option name='cloud' value="Cloud">Cloud</option>
</select>

<label htmlFor="passedout">Year Of PassedOut</label>
<input type='number' name="passedout" id='passedout' onChange={handleInputchange} value={user.passedout}/>

<label htmlFor="degree">Degree</label>
<input type="text" name="degree" id='degree' onChange={handleInputchange} value={user.degree} />

<button>Submit</button>

</form>
          </div>
           
        </div>
    </div>
  )
}

export default Enquiryform
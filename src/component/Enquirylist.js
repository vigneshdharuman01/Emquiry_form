import React from 'react'

const Enquirylist = (props) => {
  return (
    <div>
        <div className="list-container">
        <h1>Enquiry List</h1>

          <div className="list-content">
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Date</th>
                <th>Course</th>
                <th>passed Out</th>
                <th>Degree</th>
              </tr>
              </thead>
              <tbody>
                {props.users.length>0?(
                  props.users.map((user)=>(
                    <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phnumber}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{user.course}</td>
                <td>{user.passedout}</td>
                <td>{user.degree}</td>
                <td><button onClick={()=>props.deleteUser(user.id)}>Delete</button></td>
              </tr>
                  ))
                )
              :(
                <tr>
                 <td colSpan={8}>No record</td>
                </tr>
              )}
              
              </tbody>
              
              
            </table>
          </div>
        </div>
    </div>
  )
}

export default Enquirylist
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Users = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers);
    console.log(loadedUsers);
    const handleDelete=id=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  // eslint-disable-next-line react/prop-types
                  const remaining=users.filter(user=>user._id!==id);
                setUsers(remaining);
                
            }
            
        })
              
            }
          });

    }
    return (
        <div className="container mx-auto my-10 p-20">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Email</th>
        <th>Time</th>
        <th>Last Login</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        users.map(user=>
            <tr key={user._id}>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
          </tr>
        )
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Users;
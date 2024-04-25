import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const DisplayCoffee = ({aCoffee,coffee,setCoffee}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,name,chef,supplier,taste,category,details,photo}=aCoffee;
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
                fetch(` https://coffee-store-server-73dfvxed9-stdjhalakgmailcoms-projects.vercel.app/coffee/${id}`,{
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
                  const remaining=coffee.filter(acoffee=>acoffee._id!==id);
                setCoffee(remaining);
                
            }
            
        })
              
            }
          });

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex-row justify-between">
  <figure className="pl-10 py-10">
    <img src={photo} alt="Shoes" className="rounded-xl h-60 w-72" />
  </figure>
  <div className="items-center flex">
    <div>
    <h2 className="card-title">{name}</h2>
    <p>Chef : {chef}</p>
    <p>Supplier : {supplier}</p>
    <p>Taste : {taste}</p>
    <p>Category : {category}</p>
    <p>Details : {details}</p>
    </div>
    <div className="card-actions px-2">
    <div className="join join-vertical space-y-3">
  <button className="btn join-item">View</button>
  <button className="btn join-item">
    <Link to={`/updateCoffee/${_id}`}>Update</Link>
  </button>
  <button onClick={()=>handleDelete(_id)} className="btn join-item bg-red-600 text-white">X</button>
</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DisplayCoffee;
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id,name,chef,supplier,taste,category,details,photo}=coffee;
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const coffeeUpdate={name,chef,supplier,taste,category,details,photo};
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "PUT", 
    
            headers: {
                 "Content-Type": "application/json",
      
            },
    
            body: JSON.stringify(coffeeUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount>0){
            Swal.fire({
                title: 'Succeess!',
                text: 'Successfully added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }
            
           
           
        })
    }
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl text-center my-10">Here is my coffee</h2>
            <form onSubmit={handleUpdate}>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="name">Name</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" defaultValue={name} type="text" name="name"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="chef">Chef</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={chef} name="chef"/>

                    </div>
                </div>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="supplier">Supplier</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={supplier} name="supplier"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="taste">Taste</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={taste} name="taste"/>

                    </div>
                </div>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="category">Category</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={category} name="category"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="details">Details</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={details} name="details"/>

                    </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="photo">Photo</label><br></br>
                  <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" defaultValue={photo} name="photo"/>

                </div>
                <input className="bg-green-600 text-white font-bold rounded w-full h-10" type="submit" value="Update Coffee" />
                

            </form>
            
        </div>
    );
};

export default UpdateCoffee;
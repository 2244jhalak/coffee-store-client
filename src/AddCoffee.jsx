import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const coffee={name,chef,supplier,taste,category,details,photo};
        console.log(coffee);
        fetch(' https://coffee-store-server-73dfvxed9-stdjhalakgmailcoms-projects.vercel.app/coffee',{
            method: "POST",
            headers: {
                   "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Succeess!',
                    text: 'Successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data)
        })
    }
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl text-center my-10">Here is my coffee</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="name">Name</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="name"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="chef">Chef</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="chef"/>

                    </div>
                </div>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="supplier">Supplier</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="supplier"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="taste">Taste</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="taste"/>

                    </div>
                </div>
                <div className="flex gap-12 mb-5">
                    <div className="flex-1">
                    <label htmlFor="category">Category</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="category"/>
                        
                    </div>
                    <div className="flex-1">
                    <label htmlFor="details">Details</label><br></br>
                        <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="details"/>

                    </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="photo">Photo</label><br></br>
                  <input className="bg-gray-200 border-2 rounded w-full h-10" type="text" name="photo"/>

                </div>
                <input className="bg-green-600 text-white font-bold rounded w-full h-10" type="submit" value="Add Coffee" />
                

            </form>
            
        </div>
    );
};

export default AddCoffee;
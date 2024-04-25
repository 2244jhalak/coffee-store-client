import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from './providers/AuthProvider';



const Register = () => {
  
  const [showPassword,setShowPassword]= useState(false);
  const {createUser} =useContext(AuthContext);
    
    const handleRegister=e=>{
      e.preventDefault();
      const name=e.target.name.value;
      const email=e.target.email.value;
      const photo=e.target.photo.value;
      const password=e.target.password.value;
      console.log(name,email,photo,password);
      
      if(password.length<6){
        toast('Password should be at least 6 characters');
        return;
      }
     
      else if(!/[A-Z]/.test(password)){
        toast('Password should have a uppercase');
        return;
      }
      else if(!/[a-z]/.test(password)){
        toast('Password should have a lowercase');
        return;
      }
      
      createUser(email,password)
      .then(result=>{
        console.log(result.user);
        const createdAt=result.user.metadata.creationTime;
        const user={email,createdAt};
        fetch('http://localhost:5000/users',{
            method: "POST",
            headers: {
                   "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Succeess!',
                    text: 'Successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data)
        })
       
      })
      
      .catch(error=>{
        console.log(error);
        toast('auth/email-already-in-use');
      })

    }
    
    return (
        <div>
            <div className="hero my-10">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 lg:w-[350px] md:w-[350px] w-[280px] shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" required />
        </div>
        <div className="relative">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
          <p className="absolute lg:bottom-[14px] md:bottom-[14px] bottom-[14px] right-5" onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </p>
         
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold text-white">Register</button>
        </div>
      </form>
      
      <p className="ml-8 mb-4">Already have an account? Please <Link className="underline" to="/login">Login</Link></p>
    </div>
    
    
  </div>
</div>
<ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Register;

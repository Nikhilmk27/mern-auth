import  {useState } from "react";
import { Link, json } from "react-router-dom";

export default function Signup() {
  const [formData,setFormData] = useState({})
  const[error,setError] = useState(false)
  const[loading,setLoading] = useState(false)
  
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
    
  }
  const handleSubmit = async (e) =>{
    e.preventDefault() 
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup',{
        method :'POST',
        headers :{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data)
      setLoading(false)
      if(data.sucess === false){
        setError(true);
        return;
      }
      
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    
     
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-200 p-3
      rounded-lg"
      onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-200 p-3
      rounded-lg"
      onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-200 p-3
      rounded-lg"
      onChange={handleChange}
        />
        <button disabled = {loading}
          className="bg-slate-900 text-white p-3 rounded-lg uppercase
      hover:opacity-90 disabled:opacity-70"
        >
         {loading ?'Loading':'signup'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">signin</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5">{error && "something went wrong!"}</p>
    </div>
  );
}

import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
const[isSignInForm, setIsSignInForm] =useState(true);

const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm)
};

    return(
        <div>
            <Header />
        <img className=" absolute w-[100%]" src="https://w0.peakpx.com/wallpaper/62/1005/HD-wallpaper-netflix-streaks-abstract-background-blue-colors-colour-colours-dark-neon-netflix.jpg" alt=""></img>
       
       <form className="w-5/12 absolute bg-black p-5 my-[110px] mx-auto left-0 right-0 rounded-2xl bg-opacity-80">
        <h1 className="mx-2 flex font-bold text-white text-2xl my-4 ">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
             <input type="text" placeholder="Full Name" className="text-white w-full my-5 p-4 bg-gray-500"></input>
        }
        <input type="text" placeholder="Email Address" className="text-white w-full my-5 p-4 bg-gray-500"></input>
       
        <input type="password" placeholder="Password" className=" text-white  w-full my-5 p-4  bg-gray-500 "></input>
        <button className=" p-[7px] text-white bg-red-700 w-full my-5 rounded-lg ">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-blue-700 py-2 flex cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New User? Sign Up Now" : "Already registered? Sign In Now"}</p>
        <img className="w-[200px] mx-40 " src="https://media1.tenor.com/m/ZQndYO4NwBcAAAAC/gojo-satoru.gif" alt="gojo"></img>
       </form>
       
        </div>
    )

    }

    export default Login;
import React from 'react';

export default function Login(){
  return(
     <div>
       <form>
         <div>
           <label>Email</label>
           <input type="email" name="email" placeholder="Email"/>
         </div>
         <div>
           <label>Password</label>
           <input type="password" name="password" placeholder="Password"/>
         </div>
         <button type="submit">
           Login
         </button>
       </form>
     </div> 
  )
}
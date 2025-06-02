import {useState} from 'react'

function useToken() {
   const getToken = () => {
  return localStorage.getItem('token');
};

const saveToken = userToken => {
  localStorage.setItem('token', userToken.token); 
  setToken(userToken.token);
};
    const [token,setToken]=useState(getToken());
    const removeToken=()=>{
        localStorage.removeItem('token')
        setToken(null);
    }
  return {
   setToken:saveToken,
   removeToken
   ,token
  }
}

export default useToken
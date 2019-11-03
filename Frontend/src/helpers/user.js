import axios from 'axios'
//const Url='http://localhost:3000/api'
const Url='http://44.226.29.163:3000/api'

export  function getUsers(){
   return axios.get(Url+'/users')
   .then(res=> {
      return res.data.data
    })     
}

export function postUser(){
    axios.post(Url+'/users',{
        name,
        password,
        phone
    })
    .then(res=> {
        let data=res.data.data
        //console.log(data)
     })  
 }
 
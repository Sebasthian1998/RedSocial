import axios from 'axios'
const Url='http://localhost:3000/api'
export function getPublications(){
   return axios.get(Url+'/publications')
   .then(res=> {
       return res.data.data
       
    })  
}

export function postPublication(){
    axios.post(Url+`/publication`)
    .then()
}
export function getPublication(){
    axios.get(Url+`/publication/${id}`)
}
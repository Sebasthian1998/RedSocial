import axios from 'axios'
const Url='http://localhost:3000/api'
export function getPerfil(){
   axios.get(Url+'/perfil')
   .then(res=> {
       let data=res.data.data
       console.log(data)
       return data
    })  
}

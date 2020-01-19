 const URL ='https://9162e1ee.ngrok.io'
 
 const URL_BASE =  URL + '/api/v1/'

 const headers = {
     'Content-Type':'application/json',
     Accept: 'application/json'
 }
 
 const POST_CONF = {
     method: 'POST',
     headers
}
 const DELETE_CONF = {
     method: 'DELETE',
     headers
}

export const DELETE_FETCH = (path)=>{
        return fetch(URL_BASE + path,DELETE_CONF)
                .then(res => res.json())
}
export const POST_FETCH = (path,body ={})=>{
    body= JSON.stringify(body)
    let config = {...POST_CONF,body}
        return fetch(URL_BASE + path,config)
                .then(res => res.json())
}


export const random_image = 'https://source.unsplash.com/random'

export {POST_CONF,URL_BASE,headers}
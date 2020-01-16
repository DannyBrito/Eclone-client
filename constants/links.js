 const URL ='https://c39a94c7.ngrok.io'
 
 const URL_BASE =  URL + '/api/v1/'

 const headers = {
     'Content-Type':'application/json',
     Accept: 'application/json'
 }
 
 const POST_CONF = {
     method: 'POST',
     headers
}

export const POST_FETCH = (path,body ={})=>{
    body= JSON.stringify(body)
    let config = {...POST_CONF,body}
        return fetch(URL_BASE + path,config)
                .then(res => res.json())
}


export const random_image = 'https://source.unsplash.com/random'

export {POST_CONF,URL_BASE,headers}
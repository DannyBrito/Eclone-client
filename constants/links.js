 const URL ='https://afa953e6.ngrok.io'
 
 const URL_BASE =  URL + '/api/v1/'

 const headers = {
     'Content-Type':'application/json',
     Accept: 'application/json'
 }
 
 const POST_CONF = {
     method: 'POST',
     headers
}


export const random_image = 'https://source.unsplash.com/random'

export {POST_CONF,URL_BASE,headers}
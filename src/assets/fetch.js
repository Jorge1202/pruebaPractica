class Fetch {
    async GET(obj){
        return await _Fetch(obj.url, 'GET');
    }
    async POST(obj){
        return await _Fetch(obj.url, 'POST', obj.obj);
    }
    async PUT(obj){
        return await _Fetch(obj.url, 'PUT', obj.obj);
    }
    async DELETE(obj){
        return await _Fetch(obj.url, 'DELETE', obj.obj);
    }
}

export default  Fetch;

async function _Fetch(url, type, parameters = null, async = true){

    let token = localStorage.getItem('token');
    let opcions = {
        async: async,
        crossDomain: true,
        method: type, 
        headers: {
            "authorization": token ? token : '',
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        }
    }
    if(type !== 'GET'){
        if(parameters) opcions.body= JSON.stringify(parameters);
    }
    console.log(url, opcions);
    
    let response = await fetch(
        url, 
        opcions
        );
        let result = await response.json();
    return result;
}
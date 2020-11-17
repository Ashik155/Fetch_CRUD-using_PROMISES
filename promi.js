class LoadData{
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then (data => resolve(data))
            .catch(err => reject(err))
        });
        
    }
    post(url,data){
        return new Promise((resolve, reject)=>{
            fetch (url, {
                method : 'post',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify(data),
            })
            .then(res => res.json())
            .then( dt => resolve(dt))
            .catch(err => reject(err))

        })
    }
    put(url,data){
        return new Promise((resolve, reject)=>{
            fetch (url, {
                method : 'put',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify(data),
            })
            .then(res => res.json())
            .then( dt => resolve(dt))
            .catch(err => reject(err))

        })
    }
delete(url){
        return new Promise((resolve, reject)=>{
            fetch (url, {
                method : 'delete',
                headers : {
                    'Content-type' : 'application/json',
                }
            })
            .then(res => res.json())
            .then( dt => resolve("The Resource Delete"))
            .catch(err => reject(err))

        })
    }
}
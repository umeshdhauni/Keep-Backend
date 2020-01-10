
const isBadRequest = (keys,data) =>{
    for(let key of keys){
        let index = Object.keys(data).indexOf(key);
        if(index < 0){
            return true;
        }
    }

    return false;
}

module.exports ={
    isBadRequest
}
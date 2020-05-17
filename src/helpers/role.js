
module.exports = {
    isLogged
}

function isLogged(){
    
    return !!localStorage.getItem("token")
}

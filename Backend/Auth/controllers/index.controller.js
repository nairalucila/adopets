//conexion con postgres

const {Pool} = require("pg");
new Pool({
    
})


const login = (req, res)=>{
    res.send('Sing in');
};

const register = (req, res)=>{
    res.send('Sing up');
};




module.exports = {
    login,
    register
}
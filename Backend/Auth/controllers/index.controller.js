//conexion con postgres


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
const jwt=require('jsonwebtoken');
const data={
    _id:"sgdgr29yrwef3249qwefh"
}
const token=jwt.sign(data,"random-secret-key",{expiresIn:"2d"});
console.log("Token:",token);

const decoded=jwt.verify(token,"random-secret-key");
console.log("Decoded:",decoded);
const bcrypt=require('bcrypt');

const password="John@1234"
const password2="John@1234"
const hashPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt:",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password:",hashedPassword);

    const isMatch=await bcrypt.compare("John@1234",hashedPassword);
    console.log("Is Match:",isMatch);
}

hashPassword(password);
// hashPassword(password2);
const express=require("express")
const app=express();
const PORT=3000

const logMiddleware=(req,res,next)=>{  //custom middleware
    console.log("Request Method:",req.method);
    console.log("Request URL:",req.url);
    next();
}

const apicheckMiddleware=(req,res,next)=>{  //custom middleware
    if(req.query.API_KEY=="1234"){
        console.log("API Key is valid");
        next();
    }else{
        res.status(401).send("Unauthorised:Invalid Api Key");
    }
}

// app.use(logMiddleware);  //global 
// app.use(apicheckMiddleware);

app.get("/",(req,res)=>{
    console.log("Hello World"); 
    res.send("Hello World");
})

app.get("/students",logMiddleware,apicheckMiddleware,(req,res)=>{
    console.log("Hello Students");
    res.send("Hello Students");
})


app.listen(PORT,()=>console.log("server is running"));
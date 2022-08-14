import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost/LoginRegisterdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", async(req, res)=> {
    console.log(req.body)
    const { name, email, password} = req.body
    const newUser = User.findOne({email: email}) 
        if(typeof newUser.name !== 'undefined'){
            console.log(newUser.name,newUser.email, newUser.password)
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            console.log(user)
            const newUser1 = await user.save()
            if(typeof newUser1 === 'undefined'){
                    console.log("error occured", newUser1)
                    res.send(err)
                } else {
                    console.log("Success", newUser1)
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            }
    })

app.listen(9002,() => {
    console.log("BE started at port 9002")
})
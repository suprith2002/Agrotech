const express = require('express');
const User = require('../modulesss/User');
const User2 = require('../modulesss/User2');

const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const fetchUser2 = require('../middleware/fetchUser2');

const Notes = require('../modulesss/Notes');
const JWT_SECRET = '$SHREESHABOY';


//ROUTE 1
router.post('/createuser', [

    //validation of entered data
    body('email', 'Enter a valid username').isEmail(),
    // body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),



], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });

    }

    // console.log(req.body);
    //Akasmaat Database Ge Connect Aaydilee Andre Adkaage try matte catch Balke Maadta


    //check whether the user with this email already exists
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, Kanda: 'O api ee user exists' })
        }
        //salting andre hashed password ge namde aada ondu charcter sersadu
        // const salt = await bcrypt.genSalt(10);
        //Hashing of password
        // const securepassword = await bcrypt.hash(req.body.password, salt);
        // Hosa User Create Aagta
        user = await User.create({
            name: req.body.name,
            // password: securepassword,
            email: req.body.email,
            number1:req.body.number1

        })
        //   .then(user => res.json(user)).catch(err => {console.log(err)
        //           res.json({error: 'Please enter a unique value for email'})})


        // const user =await User(req.body);
        // user.save().catch(err => {console.log(err)
        //      res.json({error: 'Please enter a unique value for email'})});

        const data = {
            user: {
                id: user.id
            }
        }
        const AUthtoken =  jwt.sign(data, JWT_SECRET);
        console.log(AUthtoken);
        success = true
        res.json({ success, apibodyy: req.body, authtoken: AUthtoken });

    }
    catch (error) {

        res.send(" Yaako Database Ge Connect Agta ille Api");
    }
})

//ROUTE 2
//Login of the Regidtered User no login required
router.post('/login', async (req, res) => {
    let success = false
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    //fetching email and password from body
    const { email, password } = req.body;
    try {
     
        // finding the user
        let user = await User.findOne({ email: req.body.email })
        const em = user.email
        if (!user) {
            success = false
            return res.status(400).json({ success, kanda: "enenaadru kalsada api" });
        }
        // comparing the given password with hashed password
        // const passwordCompare = await bcrypt.compare(password, user.password);
        // if (!passwordCompare) {
        //     success = false
        //     return res.status(400).json({success, kanda: "enenaadru kalsada api" });

        // }
        //Encrypted password bittu saada password compare maadale
        // const pas = await User.findOne({ password: req.body.password })
        // if (!pas) {

        //     return res.status(400).json({ kanda: "enenaadru kalsada api" });
        // }
        const data = {
            user: {
                id: user.id
            }
        }
        const AUthtoken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({ success, AUthtoken , em });
        
    }
    catch (error) {
        let success = false
        res.json({ success, kanda: "enenaadru kalsada api"});

    }




})

//Route 3 to get logged in users details login required

router.post('/getuser', 
     async (req, res) => {
    try {
        // const userID = req.user.id;
   
        // const user = await User.findById(userID).select("-password")
        // res.send(user)

        
        // my method AUthtoken entu ildange bari user email mele avana id kandu hididu adna notes schema dalli store aagira avana id ge match maadi aa notes na pattehachhadu
        // const nn = await User.findOne({email: req.body.email})
        // const notes = await Notes.findOne({user: nn._id})
        // res.send(notes.title)

        //filtering out the notes based on tag
        if(req.body.tag=="All"){
        const noteee = await Notes.find({})
       
        res.send(noteee)}
        else{
            const noteee = await Notes.find({ tag:req.body.tag})
            res.send(noteee)

        }

    }
    catch (error) {

        res.send(" Yaako eno aatu Router 3 dalli api");

    }
});

//useremail
router.post('/getuseremail', fetchUser,
     async (req, res) => {
    try {
        const userID = req.user.id;
   
        const user = await User.findById(userID).select("-password")
        res.json(user)

        
        // my method AUthtoken entu ildange bari user email mele avana id kandu hididu adna notes schema dalli store aagira avana id ge match maadi aa notes na pattehachhadu
        // const nn = await User.findOne({email: req.body.email})
        // const notes = await Notes.findOne({user: nn._id})
        // res.send(notes.title)

        //filtering out the notes based on tag
        // if(req.body.tag=="All"){
        // const noteee = await Notes.find({})
       
        // res.send(noteee)}
        // else{
        //     const noteee = await Notes.find({ tag:req.body.tag})
        //     res.send(noteee)

        // }

    }
    catch (error) {

        res.send(" Yaako eno aatu Router 3 dalli api");

    }
});

//creating user2
router.post('/createuser2', [

    //validation of entered data
    body('email', 'Enter a valid username').isEmail(),
    // body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),



], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });

    }

    // console.log(req.body);
    //Akasmaat Database Ge Connect Aaydilee Andre Adkaage try matte catch Balke Maadta


    //check whether the user with this email already exists
    try {
        let user2 = await User2.findOne({ email: req.body.email });
        if (user2) {
            return res.status(400).json({ success, Kanda: 'O api ee user exists' })
        }
        //salting andre hashed password ge namde aada ondu charcter sersadu
        // const salt = await bcrypt.genSalt(10);
        //Hashing of password
        // const securepassword = await bcrypt.hash(req.body.password, salt);
        // Hosa User Create Aagta
        user2 = await User2.create({
            name: req.body.name,
            // password: securepassword,
            email: req.body.email,
            number2:req.body.number2
        })
        //   .then(user => res.json(user)).catch(err => {console.log(err)
        //           res.json({error: 'Please enter a unique value for email'})})


        // const user =await User(req.body);
        // user.save().catch(err => {console.log(err)
        //      res.json({error: 'Please enter a unique value for email'})});

        const data = {
            user2: {
                id: user2.id
            }
        }
        const AUthtoken =  jwt.sign(data, JWT_SECRET);
        console.log(AUthtoken);
        success = true
        res.json({ success, apibodyy: req.body, authtoken: AUthtoken });

    }
    catch (error) {

        res.send(" Yaako Database Ge Connect Agta ille Api");
    }
})

//user2 login
router.post('/login2', async (req, res) => {
    let success = false
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });

    }
    //fetching email and password from body
    const { email, password } = req.body;
    try {
       
        // finding the user
        let user2 = await User2.findOne({ email: req.body.email })
        const em = user2.email
        if (!user2) {
            success = false
            return res.status(400).json({ success, kanda: "enenaadru kalsada api" });
        }
        // comparing the given password with hashed password
        // const passwordCompare = await bcrypt.compare(password, user.password);
        // if (!passwordCompare) {
        //     success = false
        //     return res.status(400).json({success, kanda: "enenaadru kalsada api" });

        // }
        //Encrypted password bittu saada password compare maadale
        // const pas = await User.findOne({ password: req.body.password })
        // if (!pas) {

        //     return res.status(400).json({ kanda: "enenaadru kalsada api" });
        // }
        const data2 = {
            user2: {
                id: user2.id
            }
        }
        const AUthtoken = jwt.sign(data2, JWT_SECRET);
        success = true
        res.json({ success, AUthtoken , em });
        
    }
    catch (error) {
        let success = false
        res.json({ success, kanda: "enenaadru kalsada api"});

    }




})

//useremail2 
router.post('/getuseremail2', fetchUser2,
     async (req, res) => {
    try {
        const userID = req.user2.id;
   
        const user2 = await User2.findById(userID).select("-password")
        res.json(user2.email)

        
        // my method AUthtoken entu ildange bari user email mele avana id kandu hididu adna notes schema dalli store aagira avana id ge match maadi aa notes na pattehachhadu
        // const nn = await User.findOne({email: req.body.email})
        // const notes = await Notes.findOne({user: nn._id})
        // res.send(notes.title)

        //filtering out the notes based on tag
        // if(req.body.tag=="All"){
        // const noteee = await Notes.find({})
       
        // res.send(noteee)}
        // else{
        //     const noteee = await Notes.find({ tag:req.body.tag})
        //     res.send(noteee)

        // }

    }
    catch (error) {

        res.send(" Yaako eno aatu Router 3 dalli api");

    }
});
//user2emailfororder
router.post('/getuseremail2order',
     async (req, res) => {
    try {
        const {id} = req.body;
   
        const user2 = await User2.findById(id).select("-password")
        res.json(user2)

        
        // my method AUthtoken entu ildange bari user email mele avana id kandu hididu adna notes schema dalli store aagira avana id ge match maadi aa notes na pattehachhadu
        // const nn = await User.findOne({email: req.body.email})
        // const notes = await Notes.findOne({user: nn._id})
        // res.send(notes.title)

        //filtering out the notes based on tag
        // if(req.body.tag=="All"){
        // const noteee = await Notes.find({})
       
        // res.send(noteee)}
        // else{
        //     const noteee = await Notes.find({ tag:req.body.tag})
        //     res.send(noteee)

        // }

    }
    catch (error) {

        res.json(error);

    }
});
router.post('/getuseremail240', fetchUser2,
     async (req, res) => {
    try {
        const userID = req.user2.id;
   
        const user2 = await User2.findById(userID).select("-password")
        res.json(user2)

        
        // my method AUthtoken entu ildange bari user email mele avana id kandu hididu adna notes schema dalli store aagira avana id ge match maadi aa notes na pattehachhadu
        // const nn = await User.findOne({email: req.body.email})
        // const notes = await Notes.findOne({user: nn._id})
        // res.send(notes.title)

        //filtering out the notes based on tag
        // if(req.body.tag=="All"){
        // const noteee = await Notes.find({})
       
        // res.send(noteee)}
        // else{
        //     const noteee = await Notes.find({ tag:req.body.tag})
        //     res.send(noteee)

        // }

    }
    catch (error) {

        res.send(" Yaako eno aatu Router 3 dalli api");

    }
});


module.exports = router;
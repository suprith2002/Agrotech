const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const fetchUser2 = require('../middleware/fetchUser2');
const User2 = require('../modulesss/User2');
const User = require('../modulesss/User');


const { body, validationResult } = require('express-validator');
const Notes = require('../modulesss/Notes');

//Route 1 get all notes 
router.get('/fetchallnotes',fetchUser,async (req, res) => {
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
   // find olage empty kotre ella notes uu fetch aagtu
   try {
    const notes = await Notes.find({  user:  req.user.id  });
    // const user2 = await User2.findById(notes.user2)
    res.json(notes);
  
   } catch (error) {
    res.send("Router 1 in notes.js api");
    
   } 
})

//ROUTE 2 addding a note login required
router.post('/addnote',fetchUser,[

    //validation of entered data
    body('title', 'Enter a valid username').isLength({ min: 5 }),
    body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),
    body('number3','Number Must Exist').isLength({min:10}).exists()


], async (req, res) => {

    // try {

        const {title, description, tag, order, number3, location, hour} = req.body;
        const errors = validationResult(req);
        //if the field required is empty returns error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
    
        }
        const note = new Notes({
            title, description, tag, user:req.user.id, order, number3, location, hour
    
    
        })
    
        const savedNote = await note.save();
        res.json(savedNote);
    // }
        
    
    // catch (error) {
    //     res.send("Router 2 in notes.js api");
    // } 
   
    // res.json(notes);
})

//ROUTE 3 UPDATE AN EXISTING NODE Login required
router.put('/updatenote/:id',fetchUser,
// [

//     //validation of entered data
//     body('title', 'Enter a valid username').isLength({ min: 5 }),
//     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// ], 
async (req, res) => {

const {title,description,tag, number3, location, hour} = req.body;
 const newNote = {};
if (title) {
    newNote.title=title
}
if (description) {
    newNote.description=description
}
if (tag) {
    newNote.tag=tag
}
if (number3){
    newNote.number3=number3
}
if (location){
    newNote.location=location
}
if (hour){
    newNote.hour=hour
}


//Route 4 FIND the note to be updated and update it
let note = await Notes.findById(req.params.id)
if(!note){
     return res.status(404).send("NOTE NOT FOUND")
}
if (note.user.toString () !== req.user.id) {

    return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
}
note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true})
    res.json({note})




});

   // Route 5 delete an existing Note using: POST "/api/notes/deletenote". Login required
   router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    
    try {
     
   
     // Find the note and delete it
     let note = await Notes.findById(req.params.id);
     if(!note){return res.status(404).send("Not Found")}
 
     if(note.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed");
     }
 
     note = await Notes.findByIdAndDelete(req.params.id)
     res.json({"success":"note has been deleted", DELETEDNOTE : note});
 } catch (error) {
     console.error(error.message);
     res.status(500).send("Internal Server Error");
 }
     })

     // my method to get all stored notes
     router.get('/fetchallnotesella',async (req, res) => {
        const errors = validationResult(req);
        //if the field required is empty returns error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
    
        }
       // find olage empty kotre ella notes uu fetch aagtu
       try {
        const notes = await Notes.find({});
        res.json(notes);
      
       } catch (error) {
        res.send("Router 1 in notes.js api");
        
       } 
    })


    //ROUTE 5 UPDATE AN EXISTING Note Order Login not required
router.put('/updatenoteorder/:id',
// [

//     //validation of entered data
//     body('title', 'Enter a valid username').isLength({ min: 5 }),
//     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// ], 
async (req, res) => {

const {order} = req.body;
 const newNote = {};
// if (title) {
//     newNote.title=title
// }
// if (description) {
//     newNote.description=description
// }
// if (tag) {
//     newNote.tag=tag
// }
if (order) {
    newNote.order=order
}


//Route 4 FIND the note to be updated and update it
let note = await Notes.findById(req.params.id)
if(!note){
     return res.status(404).send("NOTE NOT FOUND")
}
// if (note.user.toString () !== req.user.id) {

//     return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
// }
note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true})
    res.json(note)




});

//update user2 Log In Required
// router.put('/updatenoteuser2/:id',fetchUser2,
// // [

// //     //validation of entered data
// //     body('title', 'Enter a valid username').isLength({ min: 5 }),
// //     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// // ], 
// async (req, res) => {

// // const {title,description,tag,user2} = req.body;
//  const newNote = {};
// // if (title) {
// //     newNote.title=title
// // }
// // if (description) {
// //     newNote.description=description
// // }
// // if (tag) {
// //     newNote.tag=tag
// // }
// if (req.user2.id){
//     newNote.user2=req.user2.id

// }


// //Route 4 FIND the note to be updated and update it
// let note = await Notes.findById(req.params.id)
// if(!note){
//      return res.status(404).send("NOTE NOT FOUND")
// }
// // if (note.user.toString () !== req.user.id) {

// //     return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
// // }

//   note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true})

//     res.json(note)




// });

//deleteuser2
// router.put('/updatenotedeleteuser2/:id',
// // [

// //     //validation of entered data
// //     body('title', 'Enter a valid username').isLength({ min: 5 }),
// //     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// // ], 
// async (req, res) => {

// const {title,description,tag,user2} = req.body;
//  const newNote = {};
// // if (title) {
// //     newNote.title=title
// // }
// // if (description) {
// //     newNote.description=description
// // }
// // if (tag) {
// //     newNote.tag=tag
// // }
// // if (req.user2.id){
//     newNote.user2=null

// // }


// //Route 4 FIND the note to be updated and update it
// let note = await Notes.findById(req.params.id)
// if(!note){
//      return res.status(404).send("NOTE NOT FOUND")
// }
// if (note.user2.toString () !== req.user2.id) {

//     return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
// }
// note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true})
//     res.json({note})




// });

//fetchallnotesuser2
router.get('/fetchallnotesuser2',fetchUser2,async (req, res) => {
    const errors = validationResult(req);
    //if the field required is empty returns error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
   // find olage empty kotre ella notes uu fetch aagtu
   try {
    const notes = await Notes.find({  user2:  req.user2.id  });
    // const user2 = await User2.findById(notes.user2)
    res.json(notes);
  
   } catch (error) {
    res.send("Fetchallnotesuser2 1 in notes.js api");
    
   } 
})


//upadte the user2
router.put('/updatenote1234/:id',fetchUser2,
// [

//     //validation of entered data
//     body('title', 'Enter a valid username').isLength({ min: 5 }),
//     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// ], 
async (req, res) => {

const {title,description,tag} = req.body;
 const newNote = {};
if (title) {
    newNote.title=title
}
if (description) {
    newNote.description=description
}
if (tag) {
    newNote.tag=tag
}
newNote.user2=req.user2.id


//Route 4 FIND the note to be updated and update it
let note = await Notes.findById(req.params.id)
if(!note){
     return res.status(404).send("NOTE NOT FOUND")
}
// if (note.user.toString () !== req.user.id) {

//     return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
// }
note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true})
    res.json(note)




});
router.put('/du2',fetchUser,
// [

//     //validation of entered data
//     body('title', 'Enter a valid username').isLength({ min: 5 }),
//     body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }).exists(),



// ], 
async (req, res) => {

const {title,description,tag,user2,id} = req.body;
 const newNote = {};
// if (title) {
//     newNote.title=title
// }
// if (description) {
//     newNote.description=description
// }
// if (tag) {
//     newNote.tag=tag
// }
// if (req.user2.id){
    newNote.user2=null

// }


//Route 4 FIND the note to be updated and update it
let note = await Notes.findById(id)
if(!note){
     return res.status(404).send("NOTE NOT FOUND")
}
if (note.user.toString () !== req.user.id) {

    return res.status(401).send("KAND KANDAVRA NOTES UPDATE MAADALE BARTILLE")
    
}
note = await Notes.findByIdAndUpdate(id,{$set : newNote}, {new : true})
    res.json(note)




});


//Fetching User on note id
router.put('/sendU1',
 
async (req, res) => {

const {id} = req.body;

let note = await Notes.findById(id)
if(!note){
     return res.status(404).send("NOTE NOT FOUND")
}

 let u1 = await User.findById(note.user)
 res.json(u1.email)




});

module.exports = router;
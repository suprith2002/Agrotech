const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()



app.use(cors())




const port = 5001 
app.use(express.json())
 
app.use('/api/auth', require('./routesss/auth'))
app.use('/api/notes', require('./routesss/notes'))
app.use('/api/sendmail', require('./sendmail'))
app.get('/', (req, res) => {
  res.send('Ho Suprith !')
})
// app.get('/api/v1/login', (req, res) => {                 beda
//     res.send('Ho Login !')                               beda
//   })                                                     beda
//   app.get('/api/v1/signup', (req, res) => {              beda
//     res.send('Ho Signup !')                              beda
//   })                                                     beda
  
  
app.listen(port, () => {
  console.log(`Namma (Nanna) app listening on port ${port}`)
})
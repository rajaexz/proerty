const express =require('express');
const ejs = require('ejs')
const path =require('path')
const app = express();
const Port = process.env.Port || 8000;
// ejs set engine 
app.use(express.static('assets'))
// app.use(express.static('assets')); // this very simple way to render html
// app.use(expressLayouts);
// app.set('views' , path.join(__dirname,"./views"))//this is log process to find html laout systems
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(Port,()=>{
    console.log('ervr is working')
})
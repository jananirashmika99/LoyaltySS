const mongoose = require("mongoose");
mongoose.Connection("mongodb://localhost:27017/registration",
{
    useNewUrlParser:true,
    useUnifiedTopologytrue,
    useCreateIndextrue

}).then(() =>{
    console.log('connectuuuuuuuuuion successful');
}).catch((e)=>{
 console.log('no connection');

}

)
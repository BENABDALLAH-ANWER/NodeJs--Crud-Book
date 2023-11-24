


const mongoose  = require('mongoose'); 

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    imageUrl: { type: String, required: false },
    price: { type: Number, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author" ,
    },

    categs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"       
    }]   , 

    
    

} , {
    strictPopulate: false
});

module.exports = mongoose.model('Book' , bookSchema);
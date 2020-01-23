var mongoose = require("mongoose");


var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});



module.exports = mongoose.model("Author", AuthorSchema);

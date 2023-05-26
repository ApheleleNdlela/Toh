module.exports= mongoose=>{
    var schemaUser = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    strength:{
        type: String
    },
    weakness:{
        type: String
    }

    })
schemaUser.method("toJSON", function() {
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

let User = mongoose.model('User',schemaUser );
return User
}
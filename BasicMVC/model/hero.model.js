module.exports= mongoose=>{
    var schema = mongoose.Schema({
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
schema.method("toJSON", function() {
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

let  Hero = mongoose.model( 'heroes',schema );
return Hero
}
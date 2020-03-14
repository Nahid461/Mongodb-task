let mongoose = require("mongoose"); 

mongoose 
    .connect("mongodb://localhost/user", { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log("db got connected"))
    .catch(error => console.log("something went wrong", error.message));

    

    let userSchema = new mongoose.Schema({
        name: {type: String},
        author:{type: String},
        tags:{type:String},
        isPublished: { type: Boolean },
        price: {type:Number},
        date: {type: Date, default: Date.now()}
    });




    let UserModel = mongoose.model("users", userSchema);

    

 async function FetchCourses() {
    let course = await courseModel
    //.find({name:"Emma"})
    //.find({price: {$gt:100, $lte:600}})
   //  .find({price: {
   //      $in: [100,200,600]
   //  }})
   .find();
   // .and([{name:"Emma"},{price:200}])
   //  .sort("-name")
   //  .select("-price")
   //  .limit(2);
    console.log(course);
}

//FetchCourses();



 async function FetchUsers(){
     let user = await UserModel
        .find({isPublished:true})
        
        .sort("name")
    
        .select("name author -_id");
        console.log(user);

 }

 FetchUsers();

 async function FetchUsers(){
    let user = await UserModel
       .find()
       
       .sort("price desc")
   
       .select("name author -_id");
       console.log(user);

}

FetchUsers();


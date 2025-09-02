import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
    {
   avatar:{
    type: {
        url: String,
        localPath: String
    },
    default:{
        url:`https://placehold.co/200x200`,
        localPath:""
    }
   },
   username:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index:true
   },
   email:{
   type: String,
   required: true,
   unique: true,
   trim: true,
   lowercase: true,

   },
   fullName:{
    type: String,
    required: true,
    trim: true
   },
   password:{
    type: String,
    required: [true, "password is required"]
   },
   isEmailVerified:{
    type: Boolean,
    default: false 
   },
   refreshToken:{
    type: String
   },
   forgotPasswordToken:{
    type: String
   },
   forgotPasswordExpiry:{
    type: Date
   },
   emailVerificationToken:{
    type: String
},
   emailVerificationExpiry:{
    type: Date
   }

   

},{
    timestamps: true
    
}) 

// 13) Pre hook hashing the password
userSchema.pre("save", async function(next){
    if(!this.isModified("password"))  return next();// If password is not modified, skip hashing
    this.password = await bcrypt.hash(this.password,10)// Hash the password with a salt round of 10
    next();
})

// 14) Method to compare passwords
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)// Compare the provided password with the hashed password
}

export const User = mongoose.model({"User":userSchema});
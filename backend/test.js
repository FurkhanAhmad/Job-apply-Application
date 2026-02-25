// export const reqister=async(req,res)=>{
//     try{
//         const {fullname,email,phoneNumber,password,role}=req.body;
//          if(!fullname || !email || !phoneNumber || !password || !role){
//             return res.status(400).json({
//         message:"All Fields Are Required",
//         success:false
//         })
//     }

//     const user=await User.findOne({email})
//         if(user){
//             return res.status(400).json({
//                 message:"User is Already Registered with Email",
//                 success:false
//             })
//         }
//         const hashedPassword=await bcrypt.hash(password,10)
//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password,
//             role,
            
//         })
//         return res.status(201).json({
//             message:"Account Created Successfully",
//             status:true,
          
//         })
//     } catch(error){
//        console.log(error)
//     } 
// } 
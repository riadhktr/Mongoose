const ContactSchema = require('../model/Contact')



exports.GetContact = async(req,res)=>{

    try{
        /*  .find() will give us all the contacts existant in our database */
        const getContact = await ContactSchema.find()
        /* our request will be succesfull and the response will have a succesfull status(200) */
        res.status(200).send({message:"this is all user",getContact})
        }
        /* if we can't find any contact or there is a syntaxe mistake this error message will be displayed */
        catch(err){
         res.status(500).send("can t get the contacts")
    
        }
}

exports.PostNewContact = async(req,res)=>{
    try{
        /* we use await for waiting to finish this step then display the response message */

const addedUser = await new ContactSchema(req.body)
       /* .save() to store the model in our database */
addedUser.save();

       /* our request will be succesfull and the response will have a succesfull status(200) */

res.status(200).send({message:"New Contact added",addedUser})

    } catch(err){
      /* if we can't add a contact or there is a syntaxe mistake this error message will be displayed */
        res.status(500).send("can not add the new contact")
    }
}

exports.UpdateContact = async(req,res)=>{

    try{
        const {id} = req.params ; 

        /*  .findByIdAndUpdate(id) will give us the user with the specific id  in our database then update it */

        const UpdateContact = await ContactSchema.findByIdAndUpdate(id ,{$set:{...req.body}})

        /* our request will be succesfull and the response will have a succesfull status(200) */
        
        res.status(200).send({message:`${UpdateContact.name} updated`,UpdateContact})
        }
        /* if we can't find or update the contact or there is a syntaxe mistake this error message will be displayed */
        catch(err){
         res.status(500).send("can not update the contact")
    
        }
}

exports.DeleteContact = async(req,res)=>{
        const {id}=req.params;
    
        try{
        /*  .findByIdAndDelete(id) will give us the user with the specific id  in our database then delete it */

        const DeletedUser = await ContactSchema.findByIdAndDelete(id)

        /* our request will be succesfull (user deleted ) and the response will have a succesfull status(200) */

        res.status(200).send({message:"user  is deleted"})
        }catch(err){
        /* if we can't find or delete the contact or there is a syntaxe mistake this error message will be displayed */
         res.status(500).send("can not delete the contact")
    
        }
}

exports.GetContactById = async(req,res)=>{
    
        const {id}=req.params;
    
        try{
        /*  .findById(id) will give us the user with the specific id  in our database  */

        const GetUser = await ContactSchema.findById(id)

        /* our request will be succesfull (user exist in the database ) and the response will have a succesfull status(200) then diplay the user */
       
        res.status(200).send({message:"user finded",GetUser})

        }catch(err){

        /* if we can't find  the contact or there is a syntaxe mistake this error message will be displayed */

         res.status(500).send("can not find the contact")
    
        }
}
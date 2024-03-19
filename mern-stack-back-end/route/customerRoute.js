const express = require('express');

const customer = require('../modules/customer');

const router = express.Router();

router.post('/save/post',async(req,res)=>{

    try{
        const newCustomer = new customer(req.body);
        await newCustomer.save();
        return res.status(200).json({
            success: "Customer saved successfully"
        }) 

    }catch(error){
       return res.status(400).json({
        error: error.message || "Error saving post"
       })
    }
});

router.get('/getAll',async(req,res)=>{
    try{
        const newCustomer = await customer.find();
       return res.status(200).json(newCustomer);

    }catch(error){
        return res.status(500).json({
         error: error.message || "Error retrieving posts"
        });
    }
})

// router.delete('/delete', async (req, res) => {
//     try {
//         const { id } = req.body;
//
//         if (!id) {
//             return res.status(400).json({ error: "ID is required" });
//         }
//
//         const deletedCustomer = await customer.findOneAndDelete({id});
//
//         if (!deletedCustomer) {
//             return res.status(404).json({ error: "Customer not found" });
//         }
//
//         return res.status(200).json({ success: "Customer deleted successfully" });
//     } catch (error) {
//         return res.status(500).json({ error: error.message || "Error deleting customer" });
//     }
// });


router.delete('/delete',async(req,res)=>{

    try{

        const { id } = req.body;
        const deletCustomer  = await customer.findOneAndDelete({id});

        if(!deletCustomer){
            return res.status(400).json({
                error:"customer not found"
            })
        }

        return res.status(200).json({
            success: "Customer deleted successfully"
        })


    }catch(error){

        return res.status(500).json({
            error: error.message || "Error deleting post"
        });
    }
});



router.put('/update', async (req, res) => {
    try {
        const { id, ...updateData } = req.body; // Extracting id and other update data from the request body
        const updateCustomer = await customer.findOneAndUpdate({ id: id }, updateData, { new: true });

        if (!updateCustomer) {
            return res.status(404).json({
                error: "Customer not found"
            });
        }

        return res.status(200).json({
            success: "Customer updated",
            updatedCustomer: updateCustomer
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message || "Error updating customer"
        });
    }
});



module.exports = router;


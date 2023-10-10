import confirmb from "../models/confirmb.js";



export const createconfirmb = async(req,res,next)=>{
    const newConfirmb=new confirmb(req.body)
    try{
        const savedConfirmb=await newConfirmb.save()
        res.status(200).json(savedConfirmb);
    }catch(err){
        next("err")
    }

}
export const update = async (req, res, next) => {
  try {
    const updatedHotel = await confirmb.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const getConfirmb = async (req,res,next)=>{
    try {
      const user = await confirmb.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

export const getconfirmbAll = async(req,res,next)=>{
    try{
        const a=await confirmb.find()
        res.status(200).json(a);
    }catch(err){
        next(err)
    }

}
export const deleteconfirmb = async (req, res, next) => {
    try {
      await confirmb.findByIdAndDelete(req.params.id);
      res.status(200).json("confimb has been deleted.");
    } catch (err) {
      next(err);
    }
  };
import mongoose from "mongoose";
import Macros from "../models/Macros.js";

export const createMacro = async (req, res) => {
    const macro = new Macros(req.body);

    if (!macro.userId || !macro.calories || !macro.carbs || !macro.protein || !macro.fats || !macro.day) {
        return res.status(400).json({success: false, message: 'Fill out all required fields!'});
    }

    const newMacro = new Macros(macro);

    try {
        await newMacro.save();
        return res.status(201).json({success: true, macro: newMacro});
    } catch (error) {
        return res.status(400).json({success: false, message: "Error Adding Macros:"});
    }

}

export const updateMacro = async (req, res) => {
    const {id} = req.params;

    const macro = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false, message: 'Invalid Macro ID'});
    }

    try {
        const updatedMacro = await Macros.findByIdAndUpdate(id, macro, {new: true})
        res.status(200).json({success: true, macro: updatedMacro});
    } catch (error) {
        return res.status(400).json({success: false, message: "Error Updating Macros"});
    }
}

export const deleteMacro = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false, message: 'Invalid Macro ID'});
    }

    try {
        const deleted = await Macros.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Macro not found" });
        }
        res.status(200).json({success: true, message: 'Macros Deleted'});
    } catch (error) {
        return res.status(400).json({success: false, message: "Error Updating Macros"});
    }
}
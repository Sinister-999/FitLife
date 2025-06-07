import mongoose from "mongoose";

const macroSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    calories: {
        type: Number,
        required: true,
    },
    carbs: {
        type: Number,
        required: true,
    },
    fats: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    }
})

const Macros = mongoose.model("Macros", macroSchema);

export default Macros;
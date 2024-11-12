

import mongoose, { Schema } from 'mongoose'
import React from 'react'

const participantSchema = new Schema(
    {
        fullName: String
    },
    {
        timestamps: true
    }
)

const Participant = mongoose.models.Participant || mongoose.model("Participant", participantSchema);

export default Participant;
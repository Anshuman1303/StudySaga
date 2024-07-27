import mongoose, { Document, Model } from "mongoose";

export interface ISubject {
    subject_name: string;
    subject_id: string;
    artwork_id: string;
}

export interface ISubjectDocument extends ISubject, Document {
    createdAt: Date;
    updatedAt: Date;
}

const subjectSchema = new mongoose.Schema<ISubjectDocument>(
    {
        subject_name: {
            type: String,
            required: true,
            unique: true,
        },
        subject_id: {
            type: String,
            required: true,
            unique: true,
        },
        artwork_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Subject: Model<ISubjectDocument> =
    mongoose.models?.Subject ||
    mongoose.model<ISubjectDocument>("Subject", subjectSchema);

import mongoose, { Document, Model } from "mongoose";

export interface IStudent {
        firstName: string;
        lastName: string;
        regNo: string;
        profilePhoto?: string;
        standard?: string;
        section?: string;
        subjects: string[];
}

export interface IStudentDocument extends IStudent, Document {
        createdAt: Date;
        updatedAt: Date;
}

const studentSchema = new mongoose.Schema<IStudentDocument>(
        {
                firstName: {
                        type: String,
                        required: true,
                },
                lastName: {
                        type: String,
                        required: true,
                },
                regNo: {
                        type: String,
                        required: true,
                },
                profilePhoto: {
                        type: String,
                        default: "",
                },
                standard: {
                        type: String,
                        default: "",
                },
                section: {
                        type: String,
                        default: "",
                },
                subjects: {
                        type: [String],
                        required: true,
                },
        },
        { timestamps: true }
);

export const Student: Model<IStudentDocument> =
        mongoose.models?.Student ||
        mongoose.model<IStudentDocument>("Student", studentSchema);

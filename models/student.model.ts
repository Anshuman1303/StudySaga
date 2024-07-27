import mongoose, { Document, Model } from "mongoose";

export interface IStudent {
        firstName: string;
        lastName: string;
        username: string;
        regNo: string;
        profilePhoto?: string;
        standard?: string;
        section?: string;
        subjects: string[];
        exp?: number; // Experience in years
        level?: number; // Current level (e.g., 1, 2, 3)
        subjectExp?: number[]; // Array with experience points for each subject
        lessons_assigned?: number; // Number of lessons assigned
        assignment_assigned?: number; // Number of assignments assigned
        lessons_completed?: number; // Number of lessons completed
        assignment_completed?: number; // Number of assignments completed
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
                username: {
                        type: String,
                        required: true,
                        unique: true,
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
                exp: {
                        type: Number,
                        default: 0,
                },
                level: {
                        type: Number,
                        default: 1,
                },
                subjectExp: {
                        type: [Number],
                        validate: {
                                validator: function (v: number[]) {
                                        return (
                                                v.length ===
                                                this.subjects.length
                                        );
                                },
                                message: "subjectExp must have the same number of fields as subjects",
                        },
                        default: [],
                },
                lessons_assigned: {
                        type: Number,
                        default: 0,
                },
                assignment_assigned: {
                        type: Number,
                        default: 0,
                },
                lessons_completed: {
                        type: Number,
                        default: 0,
                },
                assignment_completed: {
                        type: Number,
                        default: 0,
                },
        },
        { timestamps: true }
);

export const Student: Model<IStudentDocument> =
        mongoose.models?.Student ||
        mongoose.model<IStudentDocument>("Student", studentSchema);

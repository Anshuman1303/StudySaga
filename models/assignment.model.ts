import mongoose, { Document, Model } from "mongoose";

export interface IAssignment {
    title: string;
    description: string;
    subject: string;
    dueDate: Date;
    // standard: string;
    // section: string;
    assignmentLink: string;
    status?: "Not Started" | "In Progress" | "Completed"; // Status of the assignment
    submissionLink?: string; // URL for submission
    totalMarks?: number; // Total marks/points
    submittedOn?: Date;
    // assignedTo?: string[]; // Array of student IDs
}

export interface IAssignmentDocument extends IAssignment, Document {
    createdAt: Date;
    updatedAt: Date;
}

const assignmentSchema = new mongoose.Schema<IAssignmentDocument>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        assignmentLink: {
            type: String,
            required: true,
        },
        // standard: {
        //     type: String,
        //     required: true,
        // },
        // section: {
        //     type: String,
        //     required: true,
        // },
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Completed"],
            default: "Not Started",
        },
        submissionLink: {
            type: String,
            default: "",
        },
        totalMarks: {
            type: Number,
            default: 0,
        },
        submittedOn: {
            type: Date || null,
            default: null,
        },
        // assignedTo: {
        //     type: [String],
        //     default: [],
        // },
    },
    { timestamps: true }
);

export const Assignment: Model<IAssignmentDocument> =
    mongoose.models?.Assignment ||
    mongoose.model<IAssignmentDocument>("Assignment", assignmentSchema);

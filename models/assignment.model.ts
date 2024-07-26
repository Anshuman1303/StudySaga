import mongoose, { Document, Model, ObjectId } from "mongoose";
import { IStudent } from "./student.model";
// import { IComment } from "./comment.model";
export interface IAssignment {
        description: string;
        user: IStudent;
        imageUrl?: string;
        likes?: string[];
        //   comments: IComment[];
}

export interface IAssignmentDocument extends IAssignment, Document {
        createdAt: Date;
        updatedAt: Date;
        _id: any;
}

const assignmentSchema = new mongoose.Schema<IAssignmentDocument>(
        {
                description: {
                        type: String,
                        required: true,
                },
                imageUrl: {
                        type: String,
                        default: "",
                },
                user: {
                        userId: {
                                type: String,
                                required: true,
                        },
                        profilePhoto: {
                                type: String,
                                required: true,
                        },
                        firstName: {
                                type: String,
                                required: true,
                        },
                        lastName: {
                                type: String,
                                required: true,
                        },
                },
                likes: {
                        type: [String],
                },
                //     comments: [
                //       {
                //         type: mongoose.Schema.Types.ObjectId,
                //         ref: "Comment",
                //       },
                //     ],
        },
        { timestamps: true }
);
export const Assignment: Model<IAssignmentDocument> =
        mongoose.models?.Post ||
        mongoose.model<IAssignmentDocument>("Post", assignmentSchema);

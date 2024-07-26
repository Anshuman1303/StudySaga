import mongoose, { Document, Model } from "mongoose";

export interface IVideo {
        title: string;
        standard: string;
        subject: string;
        link: string;
        tags?: string[];
}

export interface IVideoDocument extends IVideo, Document {
        createdAt: Date;
        updatedAt: Date;
}

const videoSchema = new mongoose.Schema<IVideoDocument>(
        {
                title: {
                        type: String,
                        required: true,
                },
                standard: {
                        type: String,
                        required: true,
                },
                subject: {
                        type: String,
                        required: true,
                },
                link: {
                        type: String,
                        required: true,
                },
                tags: [
                        {
                                type: String,
                        },
                ],
        },
        { timestamps: true }
);

export const Video: Model<IVideoDocument> =
        mongoose.models?.Video ||
        mongoose.model<IVideoDocument>("Video", videoSchema);

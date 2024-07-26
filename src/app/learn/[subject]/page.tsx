"use client";
import { useParams } from "next/navigation";

const sampleData = [
        {
                title: "Introduction to Algebra",
                standard: "9",
                subject: "mathematics",
                link: "https://www.youtube.com/watch?v=0V0GZjLOzj4",
                tags: ["algebra", "math", "beginner"],
        },
        {
                title: "Photosynthesis Explained",
                standard: "10",
                subject: "science",
                link: "https://www.youtube.com/watch?v=2P2kH4ufV3c",
                tags: ["biology", "photosynthesis", "plants"],
        },
        {
                title: "The Preamble of the Constitution",
                standard: "11",
                subject: "social science",
                link: "https://www.youtube.com/watch?v=XnT-O2LP-kE",
                tags: ["constitution", "history", "civics"],
        },
        {
                title: "Basic French Grammar",
                standard: "8",
                subject: "french",
                link: "https://www.youtube.com/watch?v=Z_rJ0BqVznY",
                tags: ["french", "grammar", "language"],
        },
        {
                title: "Introduction to Chemical Reactions",
                standard: "10",
                subject: "science",
                link: "https://www.youtube.com/watch?v=Zx3gMZfXK80",
                tags: ["chemistry", "reactions", "science"],
        },
        {
                title: "World War II Overview",
                standard: "12",
                subject: "history",
                link: "https://www.youtube.com/watch?v=AlJ-AV0L8Vg",
                tags: ["history", "world war ii", "overview"],
        },
        {
                title: "Understanding Fractions",
                standard: "7",
                subject: "mathematics",
                link: "https://www.youtube.com/watch?v=RzI9v_B4sxw",
                tags: ["math", "fractions", "basics"],
        },
        {
                title: "Fundamentals of Physics",
                standard: "9",
                subject: "science",
                link: "https://www.youtube.com/watch?v=Jg3oUfAn7LM",
                tags: ["physics", "fundamentals", "science"],
        },
];

const SubjectPage = () => {
        const { subject } = useParams();
        const decodedSubject = decodeURIComponent(subject);

        const filteredVideos = sampleData.filter(
                (video) => video.subject === decodedSubject
        );

        return (
                <div>
                        <h1>Learn {decodedSubject}</h1>
                        <div className="videos__wrapper">
                                {filteredVideos.map((video, index) => (
                                        <div key={index} className="video">
                                                <h2>{video.title}</h2>
                                                <a
                                                        href={video.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        Watch Video
                                                </a>
                                        </div>
                                ))}
                        </div>
                </div>
        );
};

export default SubjectPage;

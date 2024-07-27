"use client";
import Assignments from "@/components/assignments/Assignments";
import Lessons from "@/components/lessons/Lessons";
import { useState } from "react";
import "./subject.scss";
import Demo from "@/components/chats/chats";

const SubjectPage = () => {
        const [toggle, setToggle] = useState(1);
        const handleToggle = (value: number) => {
                setToggle(value);
        };
        return (
                <div className="page__container">
                        <div className="page__options">
                                <div
                                        className="page__option"
                                        onClick={() => handleToggle(1)}>
                                        Lessons
                                </div>
                                <div
                                        className="page__option"
                                        onClick={() => handleToggle(2)}>
                                        Assignments
                                </div>
                        </div>
                        {toggle == 1 && <Lessons />}
                        {toggle == 2 && <Assignments />}
                        <Demo />
                </div>
        );
};

export default SubjectPage;

"use client";
import React, { useState } from "react";
import "./learn.scss";
import Lessons from "@/components/lessons/Lessons";
import Assignments from "@/components/assignments/Assignments";
const LearnPage = () => {
        const [toggle, setToggle] = useState(1);
        const handleToggle = (value: number) => {
                setToggle(value);
        };
        return (
                <div className="learn__container">
                        <div className="learn__container__left">
                                <div className="buttons">
                                        <div onClick={() => handleToggle(1)}>
                                                Lessons
                                        </div>
                                        <div onClick={() => handleToggle(2)}>
                                                Assignments
                                        </div>
                                </div>
                                {toggle === 1 && <Lessons />}
                                {toggle === 2 && <Assignments />}
                        </div>
                </div>
        );
};

export default LearnPage;

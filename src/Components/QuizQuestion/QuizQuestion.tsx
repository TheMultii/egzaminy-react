import "./QuizQuestion.scss"
import {createElement} from "react";

interface props {
    question: string,
    answer: string,
    wrong_1: string,
    wrong_2: string,
    wrong_3: string,
    questionNumber: number,
    image?: string
}

const renderHTML = (rawHTML: string) => createElement("div", {dangerouslySetInnerHTML: {__html: rawHTML}});

export default function QuizQuestion({question, answer, wrong_1, wrong_2, wrong_3, questionNumber, image}: props) {

    const answer_letter = answer.charAt(0).toUpperCase();
    const answer_a = answer[0].toUpperCase() === "A" ? answer : (wrong_1[0].toUpperCase() === "A" ? wrong_1 : (wrong_2[0].toUpperCase() === "A" ? wrong_2 : wrong_3));
    const answer_b = answer[0].toUpperCase() === "B" ? answer : (wrong_1[0].toUpperCase() === "B" ? wrong_1 : (wrong_2[0].toUpperCase() === "B" ? wrong_2 : wrong_3));
    const answer_c = answer[0].toUpperCase() === "C" ? answer : (wrong_1[0].toUpperCase() === "C" ? wrong_1 : (wrong_2[0].toUpperCase() === "C" ? wrong_2 : wrong_3));
    const answer_d = answer[0].toUpperCase() === "D" ? answer : (wrong_1[0].toUpperCase() === "D" ? wrong_1 : (wrong_2[0].toUpperCase() === "D" ? wrong_2 : wrong_3));

    return (
        <div
            className="quiz_question
            mb-8
            last:mb-0
            px-[90px]
            py-[30px]
            rounded-md
            flex
            flex-col
            justify-center
            items-center">
            <div
                className="quiz_title max-w-[800px] sm:max-w-[90%] lg:max-w-[1280px] mx-auto my-0 text-center items-center flex flex-col">
                <span className="quiz_title_pre">Pytanie #{questionNumber}</span>
                <p className="quiz_question_p m-0">
                    {renderHTML(question)}
                </p>
            </div>
            {
                image &&
                <>
                    <img src={image}
                         className='quiz_image max-w-[100%] rounded mx-auto block object-cover select-none mt-5 px-7'
                         alt={"img_" + questionNumber}/>
                    <p className="opacity-80 text-white text-center text-sm m-0">Grafika do zadania</p>
                </>
            }
            <div className="quiz_answers mx-auto w-full my-0 pt-[40px] pb-[20px]">
                <ul className="m-0 p-0">
                    <li className="list-none w-full p-[7px]">
                        <div
                            className={"answer_div " + (answer_letter === "A" ? "correct" : "")}>
                            <span
                                className="letter rounded-md select-none text-center text-white w-[75px] h-[75px]">A</span>
                            <span className="answer_text ml-[20px] text-white">
                                {renderHTML(answer_a.slice(3))}
                            </span>
                        </div>
                    </li>
                    <li className="list-none w-full p-[7px]">
                        <div
                            className={"answer_div " + (answer_letter === "B" ? "correct" : "")}>
                            <span
                                className="letter rounded-md select-none text-center text-white w-[75px] h-[75px]">B</span>
                            <span className="answer_text ml-[20px] text-white">
                                {renderHTML(answer_b.slice(3))}
                            </span>
                        </div>
                    </li>
                    <li className="list-none w-full p-[7px]">
                        <div
                            className={"answer_div " + (answer_letter === "C" ? "correct" : "")}>
                            <span
                                className="letter rounded-md select-none text-center text-white w-[75px] h-[75px]">C</span>
                            <span className="answer_text ml-[20px] text-white">
                                {renderHTML(answer_c.slice(3))}
                            </span>
                        </div>
                    </li>
                    <li className="list-none w-full p-[7px]">
                        <div
                            className={"answer_div " + (answer_letter === "D" ? "correct" : "")}>
                            <span
                                className="letter rounded-md select-none text-center text-white w-[75px] h-[75px]">D</span>
                            <span className="answer_text ml-[20px] text-white">
                                {renderHTML(answer_d.slice(3))}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

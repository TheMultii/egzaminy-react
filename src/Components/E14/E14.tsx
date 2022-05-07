import QuizQuestion from "../QuizQuestion/QuizQuestion";
import "./E14.scss"
import {useEffect, useRef, useState} from "react";

export default function E14() {

    interface QuestionProps {
        IMG: string,
        P: string,
        Pytanie: string,
        B1: string,
        B2: string,
        B3: string
    }

    const mounted = useRef(false);
    const [questions, setQuestions] = useState([]);
    const [title] = useState("Egzamin EE.09 / INF.03 / E.14 (programowanie i bazy danych)");

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        mounted.current = true;
        const fetchData = async () => {
            const data_session = window.sessionStorage.getItem("e14_data");
            if (data_session) {
                setQuestions(JSON.parse(data_session));
            } else {
                const data = await fetch("https://v4.api.mganczarczyk.pl/v4/e14");
                if (mounted.current) {
                    setQuestions(await data.json());
                    window.sessionStorage.setItem("e14_data", JSON.stringify(await data.json()));
                }
            }
        };

        fetchData();

        return () => {
            mounted.current = false;
        }
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center my-[90px] lg:my[230px]">
                <header
                    className="text-center text-white text-4xl font-extralight relative inline-block lg:whitespace-pre-line w-[95%] lg:w-full">
                    {title.split("(").join("\n(")}
                </header>
            </div>
            <div className="flex justify-center items-center flex-col pb-[20px]">
                {
                    questions.map((question: QuestionProps, index) => (
                        <QuizQuestion key={index} image={question.IMG} answer={question.P}
                                      question={question.Pytanie} questionNumber={index + 1} wrong_1={question.B1}
                                      wrong_2={question.B2} wrong_3={question.B3}/>
                    ))
                }
            </div>
        </div>
    );
}

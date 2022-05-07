import QuizQuestion from "../QuizQuestion/QuizQuestion";
import "./E14.scss"
import {useEffect, useRef, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
    const [questionsDisplayed, setQuestionsDisplayed] = useState([]);
    const [title] = useState("Egzamin EE.09 / INF.03 / E.14 (programowanie i bazy danych)");
    const infiniteScrollAddItemsCount = 100;

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        mounted.current = true;
        const fetchData = async () => {
            const data_session = window.sessionStorage.getItem("e14_data");
            if (data_session) {
                setQuestions(JSON.parse(data_session));
                setQuestionsDisplayed(JSON.parse(data_session).slice(0, infiniteScrollAddItemsCount));
            } else {
                const data = await fetch("https://v4.api.mganczarczyk.pl/v4/e14");
                if (mounted.current) {
                    const json = await data.json();
                    setQuestions(json);
                    setQuestionsDisplayed(json.slice(0, infiniteScrollAddItemsCount));
                    window.sessionStorage.setItem("e14_data", JSON.stringify(json));
                }
            }
        };

        fetchData();

        return () => {
            mounted.current = false;
        }
    }, [title]);

    const addData = () => {
        setQuestionsDisplayed(questionsDisplayed.concat(questions.slice(questionsDisplayed.length + 1, questionsDisplayed.length + infiniteScrollAddItemsCount + 1)));
    }

    return (
        <div>
            <div className="flex justify-center items-center my-[90px] lg:my[230px]">
                <header
                    className="text-center text-white text-4xl font-extralight relative lg:whitespace-pre-line block w-[95%] lg:inline-block lg:w-[unset]">
                    {title.split("(").join("\n(")}
                </header>
            </div>
            <div className="flex justify-center items-center flex-col pb-[20px]">
                <InfiniteScroll
                    dataLength={questionsDisplayed.length}
                    next={addData}
                    hasMore={true}
                    loader={<></>}
                    endMessage={
                        <></>
                    }
                >
                    {
                        questionsDisplayed.map((question: QuestionProps, index) => (
                            <QuizQuestion key={index} image={question.IMG} answer={question.P}
                                          question={question.Pytanie} questionNumber={index + 1} wrong_1={question.B1}
                                          wrong_2={question.B2} wrong_3={question.B3}/>
                        ))
                    }
                </InfiniteScroll>
            </div>
        </div>
    );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card, CardGroup, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const cardData = [
  {
    title: "1. I feel more nervous and anxious than usual.",
    options: [
      { id: 1, label: "a) None or Little of the time." },
      { id: 2, label: "b) Some of the time" },
      { id: 3, label: "c) Good part of the time." },
      { id: 4, label: "d) Most or all the time." },
    ],
    correctAnswer: 2,
  },

  {
    title: "2. I feel afraid for no reason at all.",
    options: [
      { id: 5, label: "a) None or Little of the time." },
      { id: 6, label: "b) Some of the time" },
      { id: 7, label: "c) Good part of the time." },
      { id: 8, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },

  {
    title: "3. I get upset easily or feel panicky.",
    options: [
      { id: 9, label: "a) None or Little of the time." },
      { id: 10, label: "b) Some of the time" },
      { id: 11, label: "c) Good part of the time." },
      { id: 12, label: "d) Most or all the time." },
    ],
    correctAnswer: 0,
  },

  {
    title: "4. I feel like I'm falling apart and going to pieces.",
    options: [
      { id: 13, label: "a) None or Little of the time." },
      { id: 14, label: "b) Some of the time" },
      { id: 15, label: "c) Good part of the time." },
      { id: 16, label: "d) Most or all the time." },
    ],
    correctAnswer: 2,
  },

  {
    title: "5. I feel that everything is all right and nothing bad will happen",
    options: [
      { id: 17, label: "a) None or Little of the time." },
      { id: 18, label: "b) Some of the time" },
      { id: 19, label: "c) Good part of the time." },
      { id: 20, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "6. I am bothered of headaches, neck and back pains.",
    options: [
      { id: 21, label: "a) None or Little of the time." },
      { id: 22, label: "b) Some of the time" },
      { id: 23, label: "c) Good part of the time." },
      { id: 24, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "7. My arms and leg shake and tremble.",
    options: [
      { id: 25, label: "a) None or Little of the time." },
      { id: 26, label: "b) Some of the time" },
      { id: 27, label: "c) Good part of the time." },
      { id: 28, label: "d) Most or all the time." },
    ],
    correctAnswer: 2,
  },

  {
    title: "8. I feel weak and get tired easily.",
    options: [
      { id: 29, label: "a) None or Little of the time." },
      { id: 30, label: "b) Some of the time" },
      { id: 31, label: "c) Good part of the time." },
      { id: 32, label: "d) Most or all the time." },
    ],
    correctAnswer: 2,
  },

  {
    title: "9. I feel calm and can sit still easily.",
    options: [
      { id: 33, label: "a) None or Little of the time." },
      { id: 34, label: "b) Some of the time" },
      { id: 35, label: "c) Good part of the time." },
      { id: 36, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },

  {
    title: "10. I feel my heart beating fast.",
    options: [
      { id: 37, label: "a) None or Little of the time." },
      { id: 38, label: "b) Some of the time" },
      { id: 39, label: "c) Good part of the time." },
      { id: 40, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "11. I am bothered by dizzy spells.",
    options: [
      { id: 41, label: "a) None or Little of the time." },
      { id: 42, label: "b) Some of the time" },
      { id: 43, label: "c) Good part of the time." },
      { id: 44, label: "d) Most or all the time." },
    ],
    correctAnswer: 0,
  },

  {
    title: "12. I have fainting spells or feel faint.",
    options: [
      { id: 45, label: "a) None or Little of the time." },
      { id: 46, label: "b) Some of the time" },
      { id: 47, label: "c) Good part of the time." },
      { id: 48, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },

  {
    title: "13. I can breathe in and out easily.",
    options: [
      { id: 49, label: "a) None or Little of the time." },
      { id: 50, label: "b) Some of the time" },
      { id: 51, label: "c) Good part of the time." },
      { id: 52, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "14. I get feeling of numbness and tingling in my fingers and toes.",
    options: [
      { id: 53, label: "a) None or Little of the time." },
      { id: 54, label: "b) Some of the time" },
      { id: 55, label: "c) Good part of the time." },
      { id: 56, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "15. I am bothered by stomachaches or indigestion.",
    options: [
      { id: 57, label: "a) None or Little of the time." },
      { id: 58, label: "b) Some of the time" },
      { id: 59, label: "c) Good part of the time." },
      { id: 60, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },

  {
    title: "16. I have to empty my baldder often.",
    options: [
      { id: 61, label: "a) None or Little of the time." },
      { id: 62, label: "b) Some of the time" },
      { id: 63, label: "c) Good part of the time." },
      { id: 64, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "17. My hands are usually dry and warm.",
    options: [
      { id: 65, label: "a) None or Little of the time." },
      { id: 66, label: "b) Some of the time" },
      { id: 67, label: "c) Good part of the time." },
      { id: 68, label: "d) Most or all the time." },
    ],
    correctAnswer: 0,
  },

  {
    title: "18. My face gets hot and blushes.",
    options: [
      { id: 69, label: "a) None or Little of the time." },
      { id: 70, label: "b) Some of the time" },
      { id: 71, label: "c) Good part of the time." },
      { id: 72, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },

  {
    title: "19. I feel asleep easily and get a good night's rest",
    options: [
      { id: 73, label: "a) None or Little of the time." },
      { id: 74, label: "b) Some of the time" },
      { id: 75, label: "c) Good part of the time." },
      { id: 76, label: "d) Most or all the time." },
    ],
    correctAnswer: 1,
  },

  {
    title: "20. I have nightmares.",
    options: [
      { id: 77, label: "a) None or Little of the time." },
      { id: 78, label: "b) Some of the time" },
      { id: 79, label: "c) Good part of the time." },
      { id: 80, label: "d) Most or all the time." },
    ],
    correctAnswer: 3,
  },
];

function Forrm() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState({});

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    Array(cardData.length).fill(null)
  );
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch data from MongoDB or use an appropriate method to get the questions data
    // Set the questions data into the state
    const fetchData = async () => {
      try {
        const response = await fetch("/api/question"); // Replace with your API endpoint to fetch the questions data
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const handleAnswer = (questionIndex) => {
    setAnsweredQuestions([...answeredQuestions, questionIndex]);
    setActiveQuestion(activeQuestion + 1);
    setIsSubmitted(true);
  };

  const isQuestionAnswered = (questionIndex) => {
    return answeredQuestions.includes(questionIndex);
  };

  const handleOptionChange = (event, questionIndex) => {
    const optionValue = event.target.value;
    const updatedSelectedOptions = [...selectedOption];
    updatedSelectedOptions[questionIndex] = optionValue;
    setSelectedOption(updatedSelectedOptions);

    if (!isQuestionAnswered(questionIndex + 1)) {
      setAnsweredQuestions([...answeredQuestions, questionIndex]);
      setActiveQuestion(activeQuestion + 1);
    }
  };
  const isAllQuestionsAnswered = () => {
    // return answeredQuestions.length === cardData.length;
    // return selectedOption.every((option) => option !== null) && isSubmitted;
    return selectedOption.every((option) => option !== null);
  };
  const handleAnswerChange = (questionId, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId] = answerIndex;
    setAnswers(updatedAnswers);

    if (questionId === lastAnsweredQuestion + 1) {
      setLastAnsweredQuestion(questionId);
    }

    const isAllQuestionsAnswered = answeredQuestions.length === cardData.length;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the choices to the backend API endpoint for processing and storage
      await axios.post("/api/submit-answers", choices); // Replace with your backend API endpoint for submitting answers
      // Handle the response or perform any necessary actions
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Calculate total marks

  //   // if (selectedOption.length !== numberOfQuestions) {
  //   //   console.log('Please answer all questions');
  //   //   return;
  //   // }

  //   // try {
  //   //   const response = await axios.post('/submit', {
  //   //     selectedOption,
  //   //     score,
  //   //   });
  //   //   console.log(response.data);
  //   // } catch (error) {
  //   //   console.error('Error submitting form:', error);
  //   // }

  //   // let totalMarks = 0;
  //   // cardData.forEach((question, index) => {
  //   //   if (selectedOption[index] === question.correctAnswer) {
  //   //     totalMarks += 1; // Increment marks for each correct answer
  //   //   }
  //   // });

  //   //const allQuestionsAnswered = answers.length === cardData.length && answers.every((answer) => answer !== undefined);

  //   // if (allQuestionsAnswered) {
  //   //   // Perform the submission logic
  //   //   console.log('Submitting answers:', answers);
  //   // } else {
  //   //   console.log('Please answer all questions in chronological order');
  //   // }

  //    // Enable the next question if not already enabled
  // };
  // //const isAllQuestionsAnswered = answeredQuestions.length === cardData.length;

  // const isAllQuestionsAnswered = answeredQuestions.length === cardData.length;

  return (
    <>
      <Container className="context1">
        <div>
          <Row>
            {cardData.map((questionObj, questionIndex) => (
              <Col key={questionIndex} md={6}>
                <Card
                  key={questionIndex}
                  className={questionIndex < activeQuestion ? "muted-card" : ""}
                  id="cs"
                >
                  <Card.Body style={{ opacity: isQuestionAnswered ? 1 : 0.5 }}>
                    <Card.Title>{questionObj.title}</Card.Title>

                    <Form style={{ fontSize: "15px" }}>
                      {questionObj.options.map((option, optionIndex) => (
                        <Form.Check
                          key={option.id}
                          type="radio"
                          label={option.label}
                          value={option.label}
                          id={`question-${questionIndex}-option-${option.id}`}
                          disabled={
                            !isQuestionAnswered(questionIndex - 1) &&
                            questionIndex !== 0
                          }
                          checked={
                            selectedOption[questionIndex] === option.label
                          }
                          //checked={answers[cardData.id] === optionIndex}
                          onChange={(event) =>
                            handleOptionChange(event, questionIndex)
                          }
                          // onChange={() => handleAnswerChange(cardData.id, optionIndex)}
                          // disabled={index !== lastAnsweredQuestion + 1}
                        />
                      ))}
                    </Form>
                  </Card.Body>
                  {/* <div className="flex flex-row-reverse">
                  <img src="/Assets/6388586.jpg" alt="broke" className="h-32 w-32 p-1 opacity-50 "/>
                  </div> */}
                </Card>
              </Col>
            ))}{" "}
          </Row>
        </div>

        <div className="p-4 flex justify-center">
          <Popup
            trigger={
              <Button
                // disabled={answers.length !== cardData.length}
                disabled={
                  !isAllQuestionsAnswered() ||
                  (isSubmitted && activeQuestion === cardData.length)
                }
                onClick={() => handleAnswer(activeQuestion)}
                //onClick={() => handleAnswer(activeQuestion)}
                variant="outline-primary"
                style={{ fontSize: "18px", bordercolor: "rgb(155,43,120)" }}
                // onSubmit={handleSubmit}
              >
                Submit
              </Button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">Welcome to GFG!!!</div>
                <div>
                  <button onClick={() => close()}>Close modal</button>
                </div>
              </div>
            )}
          </Popup>{" "}
        </div>
      </Container>
    </>
  );
}

export default Forrm;

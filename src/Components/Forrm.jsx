import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card, CardGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TotalScoreContext from "./TotalScoreContext";

//import { Question } from '../Server/Server';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const validator = require("validator");

const cardData = [
  {
    id: 111,
    title: "1. I feel more nervous and anxious than usual.",
    options: [
      { id: 1, label: "a) None or Little of the time.", weightage: 1 },
      { id: 2, label: "b) Some of the time", weightage: 2 },
      { id: 3, label: "c) Good part of the time.", weightage: 3 },
      { id: 4, label: "d) Most or all the time.", weightage: 4 },
    ],
  },

  {
    id: 112,
    title: "2. I feel afraid for no reason at all.",
    options: [
      { id: 5, label: "a) None or Little of the time.", weightage: 1 },
      { id: 6, label: "b) Some of the time", weightage: 2 },
      { id: 7, label: "c) Good part of the time.", weightage: 3 },
      { id: 8, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 3,
  },

  {
    id: 113,
    title: "3. I get upset easily or feel panicky.",
    options: [
      { id: 9, label: "a) None or Little of the time.", weightage: 1 },
      { id: 10, label: "b) Some of the time", weightage: 2 },
      { id: 11, label: "c) Good part of the time.", weightage: 3 },
      { id: 12, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 0,
  },

  {
    id: 114,
    title: "4. I feel like I'm falling apart and going to pieces.",
    options: [
      { id: 13, label: "a) None or Little of the time.", weightage: 1 },
      { id: 14, label: "b) Some of the time", weightage: 2 },
      { id: 15, label: "c) Good part of the time.", weightage: 3 },
      { id: 16, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 2,
  },

  {
    id: 115,
    title: "5. I feel that everything is all right and nothing bad will happen",
    options: [
      { id: 17, label: "a) None or Little of the time.", weightage: 4 },
      { id: 18, label: "b) Some of the time", weightage: 3 },
      { id: 19, label: "c) Good part of the time.", weightage: 2 },
      { id: 20, label: "d) Most or all the time.", weightage: 1 },
    ],
    correctAnswer: 1,
  },

  {
    id: 116,
    title: "6. I am bothered of headaches, neck and back pains.",
    options: [
      { id: 21, label: "a) None or Little of the time.", weightage: 1 },
      { id: 22, label: "b) Some of the time", weightage: 2 },
      { id: 23, label: "c) Good part of the time.", weightage: 3 },
      { id: 24, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 1,
  },

  {
    id: 117,
    title: "7. My arms and leg shake and tremble.",
    options: [
      { id: 25, label: "a) None or Little of the time.", weightage: 1 },
      { id: 26, label: "b) Some of the time", weightage: 2 },
      { id: 27, label: "c) Good part of the time.", weightage: 3 },
      { id: 28, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 2,
  },

  {
    id: 118,
    title: "8. I feel weak and get tired easily.",
    options: [
      { id: 29, label: "a) None or Little of the time.", weightage: 1 },
      { id: 30, label: "b) Some of the time", weightage: 2 },
      { id: 31, label: "c) Good part of the time.", weightage: 3 },
      { id: 32, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 2,
  },

  {
    id: 119,
    title: "9. I feel calm and can sit still easily.",
    options: [
      { id: 33, label: "a) None or Little of the time.", weightage: 4 },
      { id: 34, label: "b) Some of the time", weightage: 3 },
      { id: 35, label: "c) Good part of the time.", weightage: 2 },
      { id: 36, label: "d) Most or all the time.", weightage: 1 },
    ],
    correctAnswer: 3,
  },

  {
    id: 120,
    title: "10. I feel my heart beating fast.",
    options: [
      { id: 37, label: "a) None or Little of the time.", weightage: 1 },
      { id: 38, label: "b) Some of the time", weightage: 2 },
      { id: 39, label: "c) Good part of the time.", weightage: 3 },
      { id: 40, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 1,
  },

  {
    id: 121,
    title: "11. I am bothered by dizzy spells.",
    options: [
      { id: 41, label: "a) None or Little of the time.", weightage: 1 },
      { id: 42, label: "b) Some of the time", weightage: 2 },
      { id: 43, label: "c) Good part of the time.", weightage: 3 },
      { id: 44, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 0,
  },

  {
    id: 122,
    title: "12. I have fainting spells or feel faint.",
    options: [
      { id: 45, label: "a) None or Little of the time.", weightage: 1 },
      { id: 46, label: "b) Some of the time", weightage: 2 },
      { id: 47, label: "c) Good part of the time.", weightage: 3 },
      { id: 48, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 3,
  },

  {
    id: 123,
    title: "13. I can breathe in and out easily.",
    options: [
      { id: 49, label: "a) None or Little of the time.", weightage: 4 },
      { id: 50, label: "b) Some of the time", weightage: 3 },
      { id: 51, label: "c) Good part of the time.", weightage: 2 },
      { id: 52, label: "d) Most or all the time.", weightage: 1 },
    ],
    correctAnswer: 1,
  },

  {
    id: 124,
    title: "14. I get feeling of numbness and tingling in my fingers and toes.",
    options: [
      { id: 53, label: "a) None or Little of the time.", weightage: 1 },
      { id: 54, label: "b) Some of the time", weightage: 2 },
      { id: 55, label: "c) Good part of the time.", weightage: 3 },
      { id: 56, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 1,
  },

  {
    id: 125,
    title: "15. I am bothered by stomachaches or indigestion.",
    options: [
      { id: 57, label: "a) None or Little of the time.", weightage: 1 },
      { id: 58, label: "b) Some of the time", weightage: 2 },
      { id: 59, label: "c) Good part of the time.", weightage: 3 },
      { id: 60, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 3,
  },

  {
    id: 126,
    title: "16. I have to empty my baldder often.",
    options: [
      { id: 61, label: "a) None or Little of the time.", weightage: 1 },
      { id: 62, label: "b) Some of the time", weightage: 2 },
      { id: 63, label: "c) Good part of the time.", weightage: 3 },
      { id: 64, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 1,
  },

  {
    id: 127,
    title: "17. My hands are usually dry and warm.",
    options: [
      { id: 65, label: "a) None or Little of the time.", weightage: 4 },
      { id: 66, label: "b) Some of the time", weightage: 3 },
      { id: 67, label: "c) Good part of the time.", weightage: 2 },
      { id: 68, label: "d) Most or all the time.", weightage: 1 },
    ],
    correctAnswer: 0,
  },

  {
    id: 128,
    title: "18. My face gets hot and blushes.",
    options: [
      { id: 69, label: "a) None or Little of the time.", weightage: 1 },
      { id: 70, label: "b) Some of the time", weightage: 2 },
      { id: 71, label: "c) Good part of the time.", weightage: 3 },
      { id: 72, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 3,
  },

  {
    id: 129,
    title: "19. I feel asleep easily and get a good night's rest",
    options: [
      { id: 73, label: "a) None or Little of the time.", weightage: 4 },
      { id: 74, label: "b) Some of the time", weightage: 3 },
      { id: 75, label: "c) Good part of the time.", weightage: 2 },
      { id: 76, label: "d) Most or all the time.", weightage: 1 },
    ],
    correctAnswer: 1,
  },

  {
    id: 130,
    title: "20. I have nightmares.",
    options: [
      { id: 77, label: "a) None or Little of the time.", weightage: 1 },
      { id: 78, label: "b) Some of the time", weightage: 2 },
      { id: 79, label: "c) Good part of the time.", weightage: 3 },
      { id: 80, label: "d) Most or all the time.", weightage: 4 },
    ],
    correctAnswer: 3,
  },
];

function Forrm() {
  const [answers, setAnswers] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    Array(cardData.length).fill(null)
  );
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState(-1);
  //const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const [totalScore, setTotalScore] = useState(1);
  //const [selectedOption, setSelectedOption] = useState(Array(cardData.length).fill(null));
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const { totalScore1, setTotalScore1 } = useContext(TotalScoreContext);
  const [updatedTotalScore1, setUpdatedTotalScore1] = useState(null);

  //const shouldEnableSubmit = answeredQuestions.length === cardData.length && formSubmitted;

  const navigate = useNavigate();

  const handleAnswer = (questionIndex) => {
    setAnsweredQuestions([...answeredQuestions, questionIndex]);
    setActiveQuestion(activeQuestion + 1);

    //     //new
    //     const selectedOption1 = selectedOption[questionIndex];
    //      const score = cardData[questionIndex].options.find((option) => option.label === selectedOption1)?.weightage || 0;
    //    // const score = 2
    //     setTotalScore(totalScore + score);

    // //new
    if (activeQuestion === cardData.length - 1) {
      setSubmitButtonClicked(true);
      // navigate.push(`/result?score=${updatedTotalScore}`)
    }
    setIsSubmitted(true);
  };

  const isQuestionAnswered = (questionIndex) => {
    return answeredQuestions.includes(questionIndex);
  };

  const handleButtonClick = () => {
    // window.location.href = `/result?score=${updatedTotalScore1}`;
    console.log("isSubmitted:", isSubmitted);
    console.log("isValidEmail:", isValidEmail);
    console.log("isValidPhoneNumber:", isValidPhoneNumber);
    console.log("updatedTotalScore1:", updatedTotalScore1);
    navigate(`/result?score=${encodeURIComponent(updatedTotalScore1)}`);
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

    const updatedTotalScore = updatedSelectedOptions.reduce(
      (score, option, index) => {
        const selectedOption = cardData[index].options.find(
          (o) => o.label === option
        );
        return score + (selectedOption ? selectedOption.weightage : 0);
      },
      0
    );

    setTotalScore(updatedTotalScore);
    //console.log(updatedTotalScore)

    //const updatedTotalScore1 = updatedTotalScore;

    setUpdatedTotalScore1(updatedTotalScore);
    //console.log(updatedTotalScore1)

    console.log("Updated Total Score:", updatedTotalScore);

    if (answeredQuestions.length === cardData.length) {
      //   console.log(updatedTotalScore1)

      handleButtonClick();
      //setIsSubmitted(true);
      //handleButtonClick();
      //navigate(`/result?score=${updatedTotalScore1}`);
      console.log("answeredQuestions:", answeredQuestions);
      console.log("cardData.length:", cardData.length);
      console.log("updatedTotalScore1:", updatedTotalScore1);
    } else {
      console.log("Please answer all questions");
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
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleButtonClick();
    const isValid = validator.isEmail(email);
    setIsValidEmail(isValid);

    if (isValid) {
      // Proceed with form submission or further processing
      console.log("Email address is valid:", email);
    } else {
      // Display an error message or handle the invalid email address case
      console.log("Invalid email address:", email);
    }

    const isPhoneNumberValid = validator.isMobilePhone(phoneNumber);
    setIsValidPhoneNumber(isPhoneNumberValid);

    if (isPhoneNumberValid) {
      // Proceed with form submission or further processing
      console.log("Phone number is valid:", phoneNumber);
    } else {
      // Display an error message or handle the invalid phone number case
      console.log("Invalid phone number:", phoneNumber);
    }

    if (
      isSubmitted &&
      isValidEmail &&
      isValidPhoneNumber &&
      updatedTotalScore1 !== null
    ) {
      handleButtonClick();
    } else {
      console.log("Please submit the form first");
    }
  };

  return (
    <>
      <Container className="context1 ">
        <Form onSubmit={handleSubmit}>
          <div>
            <Row>
              {cardData.map((questionObj, questionIndex) => (
                <Col key={questionIndex} md={6}>
                  <Card
                    key={questionIndex}
                    className={
                      questionIndex < activeQuestion ? "muted-card" : ""
                    }
                    id="cs"
                  >
                    <Card.Body
                      style={{ opacity: isQuestionAnswered ? 1 : 0.5 }}
                    >
                      <Card.Title>{questionObj.title}</Card.Title>

                      {questionObj.options.map((option, optionIndex) => (
                        <Form.Check
                          key={optionIndex}
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
                          onChange={(event) =>
                            handleOptionChange(event, questionIndex)
                          }
                        />
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className="p-4 flex justify-center">
            <Popup
              trigger={
                <Button
                  className="button"
                  disabled={
                    !isAllQuestionsAnswered() ||
                    (isSubmitted && activeQuestion === cardData.length)
                  }
                  onClick={() => {
                    handleAnswer(activeQuestion);
                    handleButtonClick();
                  }}
                  variant="outline-primary"
                  style={{ fontSize: "18px", bordercolor: "rgb(155,43,120)" }}
                >
                  Submit
                </Button>
              }
              modal
            >
              <Container className="">
                <div className="flex justify-center">
                  <img
                    src="/Assets/ezgif.com-webp-to-png.png"
                    alt="no-im"
                    className="h-28 p-1.5 m-4"
                  />
                </div>

                <div className="m-1">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-" id="name">
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={!isValidEmail}
                      size="sm"
                      className="border"
                    />

                    {!isValidEmail && (
                      <Form.Control.Feedback type="invalid">
                        Invalid email address.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </div>
                <div className="m-1">
                  <Form.Group className="mb-3" controlId="phone-number-input">
                    <Form.Label className="fs-6" id="name1">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      isInvalid={!isValidPhoneNumber}
                      size="sm"
                    />
                    {!isValidPhoneNumber && (
                      <Form.Control.Feedback type="invalid">
                        Invalid phone number.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </div>
                <div className="flex justify-center p-1 m-3">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleButtonClick}
                  >
                    {/* <Link to={updatedTotalScore1 !== undefined ? `/result?score=${encodeURIComponent(updatedTotalScore1)}` : "#"}>
                    Submit
                    </Link> */}
                    Submit
                  </Button>
                </div>
              </Container>
            </Popup>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Forrm;

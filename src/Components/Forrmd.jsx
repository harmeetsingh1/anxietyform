import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Forrmd = () => {
  const [answers, setAnswers] = useState([]);
  const questions = [
    { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    // Add more questions as needed
  ];

  const handleAnswerChange = (questionId, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all questions are answered
    const allQuestionsAnswered = answers.length === questions.length && answers.every((answer) => answer !== undefined);

    if (allQuestionsAnswered) {
      // Perform the submission logic
      console.log('Submitting answers:', answers);
    } else {
      console.log('Please answer all questions in chronological order');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={question.id}>
          <h5>{question.text}</h5>
          {question.options.map((option, optionIndex) => (
            <Form.Check
              type="radio"
              key={optionIndex}
              id={`question-${question.id}-option-${optionIndex}`}
              name={`question-${question.id}`}
              label={option}
              checked={answers[question.id] === optionIndex}
              onChange={() => handleAnswerChange(question.id, optionIndex)}
              disabled={index !== answers.length}
            />
          ))}
        </div>
      ))}
      <Button type="submit" disabled={answers.length !== questions.length}>
        Submit
      </Button>
    </Form>
  );
};

export default Forrmd;

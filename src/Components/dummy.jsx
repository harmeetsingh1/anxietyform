<Form onSubmit={handleSubmit} >
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
                      {/* </Form> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}{" "}
            </Row>
          </div>

          <div className="p-4 flex justify-center">
            <Popup
              trigger={
                <Button
                  className="button"
                  // disabled={answers.length !== cardData.length}
                  disabled={
                    !isAllQuestionsAnswered() ||
                    (isSubmitted && activeQuestion === cardData.length || submitButtonClicked)
                    ||answeredQuestions.length !== cardData.length
                  }
                 
                  onClick={() => {handleAnswer(activeQuestion); handleButtonClick()}}
                  onSubmit={handleSubmit}
                  //onClick={() => handleAnswer(activeQuestion)}
                  variant="outline-primary"
                  style={{ fontSize: "18px", bordercolor: "rgb(155,43,120)" }}
                  // onSubmit={handleSubmit}
                >
                  Submit
                  {/* {console.log(totalScore)} */}
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

                <Form onSubmit={handleSubmit}>
                  <div className=" m-1">
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
                      {/* <Form.Text className="text-muted">
             We'll never share your email with anyone else.
                  </Form.Text> */}

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
                    <Button variant="primary" type="submit" >
                    <Link to={`/result?score=${encodeURIComponent(updatedTotalScore1)}`} className="btn btn-primary">
                         Submit
                     </Link>
                    </Button>
                  </div>
                </Form>
              </Container>
            </Popup>{" "}
          </div>
        </Form>
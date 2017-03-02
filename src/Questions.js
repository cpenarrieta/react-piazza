import React, { Component } from 'react';
import logo from './img/Piazza_logo.png';
import _ from 'lodash';

let i = 0;
const emptyQuestion = { id: 0, title:"", description:"", showError: false, errMessage: "" };

class Questions extends Component {
  componentDidMount() {
    document.title = "Piazza - Questions";
  }

  constructor(props) {
    super(props);
    this.state = { questions: [], question: emptyQuestion };
  }

  handleDetailTitleChange = (e) => this.setState({ question: {...this.state.question, title: e.target.value }});
  handleDetailDescriptionChange = (e) => this.setState({ question: {...this.state.question, description: e.target.value }});

  handleSubmitNewQuestion = (e) => {
    const tmpQuest = this.state.questions;
    if (this.state.question.title.trim() === "") {
      this.setState({ showError: true });
      this.setState({ errMessage: "Empty Title" });
    } else if (this.state.question.description.trim() === "") {
      this.setState({ showError: true });
      this.setState({ errMessage: "Empty Description" });
    } else {
      i += 1;
      tmpQuest.push({ id: i, title: this.state.question.title, description: this.state.question.description });
      this.setState({ questions: tmpQuest });
      this.setState({ question: emptyQuestion });
      this.setState({ showError: false });
      this.setState({ errMessage: "" });
    }
  }

  handleNewQuestion = (e) => {
    this.setState({ question: emptyQuestion });
  }

  handleSelectQuestion = (e, q) => {
    e.preventDefault();
    this.setState({ question: q });
  }

  render() {
    const { questions, question, showError, errMessage } = this.state;
    const isNewQuestion = question.id === 0;
    const questionDetailClass = isNewQuestion ? "newQuestion" : "selected"
    const errClass = showError ? "show-error-message" : "";

    return (
      <div className="main-questions">
        <div>
          <img src={logo} alt="logo" width="200" />
        </div>
        <button className="button" name="button" onClick={this.handleNewQuestion}>New Question</button>
        <div className="question-main">
          <div className="question-list">
            {
              _.map(questions, (q, key) => {
                const selected = q.id === question.id ? "selected" : "";
                return (
                  <div key={key} className={`question-list-item ${selected}`} onClick={(e) => this.handleSelectQuestion(e, q)}>
                    {q.title}
                  </div>
                );
              })
            }
          </div>
          <div className={`question-detail ${questionDetailClass}`}>
            <div>Title</div>
            <input type="text" value={question.title} onChange={this.handleDetailTitleChange} id="titleTextField"/>
            <div>Description</div>
            <textarea rows="4" cols="50" value={question.description} onChange={this.handleDetailDescriptionChange} id="descriptionTextField" />
            <div>
              {
                isNewQuestion ? (<button onClick={this.handleSubmitNewQuestion} id="saveButton">Save</button>) : null
              }
            </div>
            <div className={`${errClass}`}>
              {errMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;

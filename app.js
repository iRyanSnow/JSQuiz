//Create Questions
var questions = [
    new Question("Who was the first President of the United States?", ["George Washington", "Thomas Jefferson", "Benjerman Frankland", "Thomas Biggit"], "George Washington"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi", "42", "34", "55"], "42"),
    new Question("This is a test", ["item1","item2","item3","item4"], "item3")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
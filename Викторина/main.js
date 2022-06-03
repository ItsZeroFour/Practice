const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
];

// Находим элементы
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitButton = document.querySelector("#submit");

// Переменные викторины
let score = 0; // Кол-во правильных отвтеов
let questionIndex = 0; // Текущий вопрос

// Объявление функции
clearPage();
showQuestion();
submitButton.onclick = checkAnswer;

// Очистка HTML контента
function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  // Вопрос
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  // Заменяем текущее предложение
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  console.log(title);

  // Вставляем полученный результат на страницу
  headerContainer.innerHTML = title;

  let answerNumber = 1;

  // Выводим варианты ответа
  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `
      <li>
        <label>
          <input value="%number%" type="radio" class="answer" name="answer" />
          <span>%answer%</span>
        </label>
      </li>
    `;

    // Заменяем определенное слово на подобранное из цикла for of
    const answerHTML = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", answerNumber);

    /*
     К существующему варианту ответа добавляем последующие,
     что бы не выбирался самый последний
    */
    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  // Выбираем кнопку, на которую нажал пользователь
  const checkRadio = listContainer.querySelector('input[type="radio"]:checked');

  // Если ответ не выбран - ничего не делаем, выходим из функции
  if (!checkRadio) {
    submitButton.blur();
    return;
  }

  // Получаем число выбранного ответа пользователем
  const userAnswer = parseInt(checkRadio.value);

  // Если пользователь ответил верно - увеличиваем счет
  questions[questionIndex]["correct"];

  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
    return;
  } else {
    clearPage();
    showResults();
  }
}

function showResults() {
  const resultsTemplate = `
    <h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result%</p>
  `;

  let title, message;

  // Варианты заголовка и текста
  if (score === questions.length) {
    title = "Поздравляем!";
    message = "Вы ответили верно на все вопросы!";
    // Получаем процентное соотношения вопросов к ответам
  } else if ((score * 100) / questions.length >= 50) {
    title = "Неплохой результат!";
    message = "Вы дали более половины правильных ответов!";
  } else {
    title = "Стоит постараться";
    message = "Пока у вас меньше половины правильных ответов";
  }

  // Результат
  let result = `${score} из ${questions.length}`;

  // Финальных ответ, подставляем данные в шаблон
  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  headerContainer.innerHTML = finalMessage;
}

// ----------------------
// PAGE NAVIGATION
// ----------------------

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    button.classList.add("active");

    const pageId = button.dataset.page;

    document
      .getElementById(pageId)
      .classList.add("active-page");

  });

});

// ----------------------
// THEMES + LIGHT/DARK MODE
// ----------------------

const themeButtons =
  document.querySelectorAll(".theme-btn");

const modeToggleBtn =
  document.getElementById("modeToggleBtn");

const modeText =
  document.getElementById("modeText");

const themes = {

  black: {
    light: {
      "--bg": "#f7f7f9",
      "--sidebar": "#ffffff",
      "--card": "#ffffff",
      "--text": "#2d2d33",
      "--secondary": "#7a7a85",
      "--accent": "#5f6473",
      "--border": "#e8e8ee",
      "--hover": "#f2f2f6",
      "--stat-bg": "#fafafd",
      "--shadow": "rgba(50, 50, 70, 0.06)"
    },
    dark: {
      "--bg": "#15161a",
      "--sidebar": "#1d1f25",
      "--card": "#22242b",
      "--text": "#f3f3f5",
      "--secondary": "#a8aab3",
      "--accent": "#9ca3b3",
      "--border": "#343741",
      "--hover": "#2b2e36",
      "--stat-bg": "#1c1e24",
      "--shadow": "rgba(0, 0, 0, 0.30)"
    }
  },

  red: {
    light: {
      "--bg": "#fdf7f7",
      "--sidebar": "#ffffff",
      "--card": "#ffffff",
      "--text": "#463434",
      "--secondary": "#9a7b7b",
      "--accent": "#d48a8a",
      "--border": "#f1dddd",
      "--hover": "#fbefef",
      "--stat-bg": "#fffafa",
      "--shadow": "rgba(180, 120, 120, 0.10)"
    },
    dark: {
      "--bg": "#1f1414",
      "--sidebar": "#281919",
      "--card": "#301f1f",
      "--text": "#f7eeee",
      "--secondary": "#c7a2a2",
      "--accent": "#e69a9a",
      "--border": "#4a2f2f",
      "--hover": "#3b2626",
      "--stat-bg": "#281919",
      "--shadow": "rgba(0, 0, 0, 0.35)"
    }
  },

  green: {
    light: {
      "--bg": "#f6fbf7",
      "--sidebar": "#ffffff",
      "--card": "#ffffff",
      "--text": "#30443a",
      "--secondary": "#7d9987",
      "--accent": "#8eb69b",
      "--border": "#dcece0",
      "--hover": "#edf6ef",
      "--stat-bg": "#fbfefb",
      "--shadow": "rgba(120, 160, 130, 0.10)"
    },
    dark: {
      "--bg": "#121c17",
      "--sidebar": "#18251e",
      "--card": "#1d2b23",
      "--text": "#eef8f1",
      "--secondary": "#9db9a7",
      "--accent": "#9ed0ad",
      "--border": "#2f4938",
      "--hover": "#263a2e",
      "--stat-bg": "#17231c",
      "--shadow": "rgba(0, 0, 0, 0.35)"
    }
  },

  blue: {
    light: {
      "--bg": "#f6f9fd",
      "--sidebar": "#ffffff",
      "--card": "#ffffff",
      "--text": "#31404f",
      "--secondary": "#7d91a8",
      "--accent": "#89a9c7",
      "--border": "#dde8f3",
      "--hover": "#edf3f9",
      "--stat-bg": "#fbfdff",
      "--shadow": "rgba(120, 150, 185, 0.10)"
    },
    dark: {
      "--bg": "#111923",
      "--sidebar": "#172230",
      "--card": "#1d2b3b",
      "--text": "#eef6ff",
      "--secondary": "#9fb6cf",
      "--accent": "#94bce2",
      "--border": "#2e4156",
      "--hover": "#26384b",
      "--stat-bg": "#162130",
      "--shadow": "rgba(0, 0, 0, 0.35)"
    }
  },

  purple: {
    light: {
      "--bg": "#faf7fc",
      "--sidebar": "#ffffff",
      "--card": "#ffffff",
      "--text": "#43384b",
      "--secondary": "#8f7c9b",
      "--accent": "#a67bbb",
      "--border": "#eadff0",
      "--hover": "#f4eef8",
      "--stat-bg": "#fcfafe",
      "--shadow": "rgba(150, 120, 180, 0.10)"
    },
    dark: {
      "--bg": "#1b1420",
      "--sidebar": "#241a2b",
      "--card": "#2c2134",
      "--text": "#f5eef8",
      "--secondary": "#baa2c8",
      "--accent": "#c48add",
      "--border": "#42304d",
      "--hover": "#382743",
      "--stat-bg": "#23192b",
      "--shadow": "rgba(0, 0, 0, 0.35)"
    }
  }

};

let selectedTheme =
  localStorage.getItem("selectedTheme") || "purple";

let selectedMode =
  localStorage.getItem("selectedMode") || "light";

function applyTheme() {

  const theme =
    themes[selectedTheme][selectedMode];

  Object.keys(theme).forEach(variable => {

    document.documentElement.style.setProperty(
      variable,
      theme[variable]
    );

  });

  localStorage.setItem("selectedTheme", selectedTheme);
  localStorage.setItem("selectedMode", selectedMode);

  themeButtons.forEach(button => {

    button.classList.remove("active-theme");

    if (button.dataset.theme === selectedTheme) {
      button.classList.add("active-theme");
    }

  });

  if (selectedMode === "dark") {
    modeText.textContent = "Dark Mode";
    modeToggleBtn.textContent = "Switch to Light";
  } else {
    modeText.textContent = "Light Mode";
    modeToggleBtn.textContent = "Switch to Dark";
  }

}

themeButtons.forEach(button => {

  button.addEventListener("click", () => {

    selectedTheme =
      button.dataset.theme;

    applyTheme();

  });

});

modeToggleBtn.addEventListener("click", () => {

  if (selectedMode === "light") {
    selectedMode = "dark";
  } else {
    selectedMode = "light";
  }

  applyTheme();

});

applyTheme();

// ----------------------
// GOALS
// ----------------------

const goalInput =
  document.getElementById("goalInput");

const addGoalBtn =
  document.getElementById("addGoalBtn");

const goalList =
  document.getElementById("goalList");

const dashboardGoals =
  document.getElementById("dashboardGoals");

const goalProgress =
  document.getElementById("goalProgress");

const goalProgressText =
  document.getElementById("goalProgressText");

const progressFill =
  document.getElementById("progressFill");

const notesContent =
  document.getElementById("notesContent");

const flashcardFront = document.getElementById("flashcardFront");
const flashcardBack = document.getElementById("flashcardBack");
const addFlashcardBtn = document.getElementById("addFlashcardBtn");
const flashcardList = document.getElementById("flashcardList");
const practiceFlashcardsBtn = document.getElementById("practiceFlashcardsBtn");
const closePracticeBtn = document.getElementById("closePracticeBtn");
const practicePanel = document.getElementById("practicePanel");

let goals =
  JSON.parse(localStorage.getItem("studyGoals")) || [];

let flashcards =
  JSON.parse(localStorage.getItem("flashcards")) || [];

let practiceIndex = 0;
let practiceShowingAnswer = false;

// ----------------------
// UNDO/REDO HISTORY
// ----------------------

let undoStack = [];
let redoStack = [];
const MAX_HISTORY = 50;

const notificationBar = document.getElementById("notificationBar");
const notificationText = document.getElementById("notificationText");
const recoverBtn = document.getElementById("recoverBtn");

let notificationTimeout;

function showNotification(goalText) {
  notificationText.textContent = `"${goalText}" deleted`;
  notificationBar.classList.add("show");
  
  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(() => {
    hideNotification();
  }, 5000);
}

function hideNotification() {
  notificationBar.classList.remove("show");
}

function saveToHistory() {
  undoStack.push(JSON.parse(JSON.stringify(goals)));
  if (undoStack.length > MAX_HISTORY) {
    undoStack.shift();
  }
  redoStack = [];
}

function undo() {
  if (undoStack.length === 0) return;
  
  redoStack.push(JSON.parse(JSON.stringify(goals)));
  goals = undoStack.pop();
  saveGoals();
  renderGoals();
  hideNotification();
}

function redo() {
  if (redoStack.length === 0) return;
  
  undoStack.push(JSON.parse(JSON.stringify(goals)));
  goals = redoStack.pop();
  saveGoals();
  renderGoals();
}

if (recoverBtn) {
  recoverBtn.addEventListener("click", undo);
}

document.addEventListener("keydown", event => {
  if (event.ctrlKey && event.key === "z" && !event.shiftKey) {
    event.preventDefault();
    undo();
  } else if ((event.ctrlKey && event.shiftKey && event.key === "Z") || (event.ctrlKey && event.key === "y")) {
    event.preventDefault();
    redo();
  }
});

goals = goals.map(goal => {

  if (typeof goal === "string") {
    return {
      text: goal,
      completed: false
    };
  }

  return {
    text: goal.text,
    completed: goal.completed
  };

});

function saveGoals() {

  localStorage.setItem(
    "studyGoals",
    JSON.stringify(goals)
  );

}

function updateGoalProgress() {

  if (goals.length === 0) {

    goalProgress.textContent = "0%";
    goalProgressText.textContent = "No goals yet.";
    progressFill.style.width = "0%";

    return;

  }

  const completedGoals =
    goals.filter(goal => goal.completed).length;

  const percent =
    Math.round((completedGoals / goals.length) * 100);

  goalProgress.textContent =
    `${percent}%`;

  goalProgressText.textContent =
    `${completedGoals} of ${goals.length} goals completed`;

  progressFill.style.width =
    `${percent}%`;

}

function renderGoals() {

  goalList.innerHTML = "";
  dashboardGoals.innerHTML = "";

  if (goals.length === 0) {

    dashboardGoals.innerHTML =
      "<p>No goals yet. Add one!</p>";

    updateGoalProgress();

    return;

  }

  goals.forEach((goal, index) => {

    const li =
      document.createElement("li");

    li.className =
      "goal-item";

    const leftSide =
      document.createElement("div");

    leftSide.className =
      "goal-left";

    const checkbox =
      document.createElement("input");

    checkbox.type =
      "checkbox";

    checkbox.className =
      "complete-checkbox";

    checkbox.checked =
      goal.completed;

    checkbox.addEventListener("change", () => {

      saveToHistory();
      goals[index].completed =
        checkbox.checked;

      saveGoals();
      renderGoals();

    });

    const goalText =
      document.createElement("span");

    goalText.className =
      "goal-text";

    if (goal.completed) {
      goalText.classList.add("completed-goal");
    }

    goalText.textContent =
      goal.text;

    leftSide.appendChild(checkbox);
    leftSide.appendChild(goalText);

    const deleteButton =
      document.createElement("button");

    deleteButton.className =
      "delete-btn";

    deleteButton.textContent =
      "Delete";

    deleteButton.addEventListener("click", () => {

      saveToHistory();
      const deletedGoal = goals[index].text;
      goals.splice(index, 1);

      saveGoals();
      renderGoals();
      showNotification(deletedGoal);

    });

    li.appendChild(leftSide);
    li.appendChild(deleteButton);

    goalList.appendChild(li);

    const card =
      document.createElement("div");

    card.className =
      "goal-card";

    const title =
      document.createElement("h3");

    title.textContent =
      goal.text;

    if (goal.completed) {
      title.classList.add("completed-goal");
    }

    const status =
      document.createElement("p");

    status.textContent =
      goal.completed ? "Completed" : "Study Goal";

    card.appendChild(title);
    card.appendChild(status);

    dashboardGoals.appendChild(card);

  });

  updateGoalProgress();

}

function addGoal() {

  const goal =
    goalInput.value.trim();

  if (goal === "") return;

  saveToHistory();
  goals.push({
    text: goal,
    completed: false
  });

  goalInput.value =
    "";

  saveGoals();
  renderGoals();

}

addGoalBtn.addEventListener("click", addGoal);

goalInput.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    addGoal();
  }

});

function saveNotes() {
  localStorage.setItem(
    "studyNotes",
    notesContent.value
  );
}

function loadNotes() {
  const savedNotes =
    localStorage.getItem("studyNotes") || "";

  if (notesContent) {
    notesContent.value = savedNotes;
  }
}

function saveFlashcards() {
  localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

function renderFlashcards() {
  if (!flashcardList) return;

  flashcardList.innerHTML = "";

  if (flashcards.length === 0) {
    flashcardList.innerHTML = "<p class='empty-message'>No flashcards yet. Add one to get started.</p>";
    return;
  }

  flashcards.forEach((card, index) => {
    const item = document.createElement("div");
    item.className = "goal-item";

    const info = document.createElement("div");
    info.innerHTML = `<strong>${card.front}</strong><br><span class="goal-text">${card.back}</span>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      flashcards.splice(index, 1);
      saveFlashcards();
      renderFlashcards();
    });

    item.appendChild(info);
    item.appendChild(deleteBtn);
    flashcardList.appendChild(item);
  });
}

function addFlashcard() {
  const front = flashcardFront.value.trim();
  const back = flashcardBack.value.trim();

  if (!front || !back) return;

  flashcards.push({ front, back });
  flashcardFront.value = "";
  flashcardBack.value = "";
  saveFlashcards();
  renderFlashcards();
}

function startPractice() {
  if (flashcards.length === 0) {
    practicePanel.innerHTML = "<p class='empty-message'>Add a flashcard first.</p>";
    practicePanel.classList.add("active");
    return;
  }

  practiceIndex = 0;
  practiceShowingAnswer = false;
  practicePanel.classList.add("active");
  renderPracticeCard();
}

function closePractice() {
  practicePanel.classList.remove("active");
  practicePanel.innerHTML = "";
}

function renderPracticeCard() {
  if (!flashcards.length) {
    practicePanel.innerHTML = "<p class='empty-message'>No flashcards to practice.</p>";
    return;
  }

  const card = flashcards[practiceIndex];
  practicePanel.innerHTML = "";

  const practiceBox = document.createElement("div");
  practiceBox.className = "practice-card";

  const counter = document.createElement("p");
  counter.className = "practice-counter";
  counter.textContent = `${practiceIndex + 1} / ${flashcards.length}`;

  const title = document.createElement("h2");
  title.textContent = practiceShowingAnswer ? "Answer" : "Question";

  const content = document.createElement("p");
  content.textContent = practiceShowingAnswer ? card.back : card.front;

  const actions = document.createElement("div");
  actions.className = "practice-actions";

  const revealBtn = document.createElement("button");
  revealBtn.id = "revealCardBtn";
  revealBtn.className = "action-btn";
  revealBtn.textContent = practiceShowingAnswer ? "Hide Answer" : "Reveal Answer";
  revealBtn.addEventListener("click", event => {
    event.stopPropagation();
    practiceShowingAnswer = !practiceShowingAnswer;
    renderPracticeCard();
  });

  const prevBtn = document.createElement("button");
  prevBtn.id = "prevCardBtn";
  prevBtn.className = "action-btn";
  prevBtn.textContent = "Previous";
  prevBtn.addEventListener("click", event => {
    event.stopPropagation();
    practiceIndex = (practiceIndex - 1 + flashcards.length) % flashcards.length;
    practiceShowingAnswer = false;
    renderPracticeCard();
  });

  const nextBtn = document.createElement("button");
  nextBtn.id = "nextCardBtn";
  nextBtn.className = "action-btn";
  nextBtn.textContent = "Next";
  nextBtn.addEventListener("click", event => {
    event.stopPropagation();
    practiceIndex = (practiceIndex + 1) % flashcards.length;
    practiceShowingAnswer = false;
    renderPracticeCard();
  });

  const closeBtn = document.createElement("button");
  closeBtn.id = "closePracticeBtn";
  closeBtn.className = "action-btn";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", event => {
    event.stopPropagation();
    closePractice();
  });

  actions.appendChild(prevBtn);
  actions.appendChild(revealBtn);
  actions.appendChild(nextBtn);
  actions.appendChild(closeBtn);

  practiceBox.appendChild(counter);
  practiceBox.appendChild(title);
  practiceBox.appendChild(content);
  practiceBox.appendChild(actions);

  practiceBox.addEventListener("click", () => {
    practiceShowingAnswer = !practiceShowingAnswer;
    renderPracticeCard();
  });

  practicePanel.appendChild(practiceBox);
}

if (notesContent) {
  notesContent.addEventListener("input", saveNotes);
}

if (addFlashcardBtn) {
  addFlashcardBtn.addEventListener("click", addFlashcard);
}

if (practiceFlashcardsBtn) {
  practiceFlashcardsBtn.addEventListener("click", startPractice);
}

if (closePracticeBtn) {
  closePracticeBtn.addEventListener("click", () => {
    closePractice();
  });
}

if (flashcardFront && flashcardBack) {
  [flashcardFront, flashcardBack].forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        addFlashcard();
      }
    });
  });
}

renderGoals();
loadNotes();
renderFlashcards();

// ----------------------
// TIMER
// ----------------------

const timerDisplay =
  document.getElementById("timerDisplay");

const timerStatus =
  document.getElementById("timerStatus");

const timerSubtext =
  document.getElementById("timerSubtext");

const focusInput =
  document.getElementById("focusMinutes");

const breakInput =
  document.getElementById("breakMinutes");

const startBtn =
  document.getElementById("startBtn");

const pauseBtn =
  document.getElementById("pauseBtn");

const resetBtn =
  document.getElementById("resetBtn");

let timer;
let timerMode = "focus";
let isRunning = false;

let timeLeft =
  Number(focusInput.value) * 60;

function getFocusSeconds() {

  return Number(focusInput.value) * 60;

}

function getBreakSeconds() {

  return Number(breakInput.value) * 60;

}

function updateTimerDisplay() {

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}

function updateTimerStatus() {

  if (timerMode === "focus") {

    timerStatus.textContent =
      "Work Time";

    timerSubtext.textContent =
      "Focus session, you can do this!!";

  } else {

    timerStatus.textContent =
      "Break Time!";

    timerSubtext.textContent =
      "Rest, reset, then come back stronger";

  }

}

function resetTimerToFocus() {

  clearInterval(timer);

  timerMode =
    "focus";

  isRunning =
    false;

  timeLeft =
    getFocusSeconds();

  updateTimerStatus();
  updateTimerDisplay();

}

function startTimer() {

  if (isRunning) return;

  isRunning =
    true;

  clearInterval(timer);

  timer = setInterval(() => {

    if (timeLeft > 0) {

      timeLeft--;
      updateTimerDisplay();

    } else {

      clearInterval(timer);

      isRunning =
        false;

      if (timerMode === "focus") {
        completeFocusSession();
      } else {
        completeBreakSession();
      }

    }

  }, 1000);

}

function pauseTimer() {

  clearInterval(timer);

  isRunning =
    false;

}

function completeFocusSession() {

  alert("🎉 Focus session complete! Time for a break.");

  let sessions =
    Number(localStorage.getItem("sessionsCompleted")) || 0;

  let minutes =
    Number(localStorage.getItem("totalFocusMinutes")) || 0;

  sessions++;
  minutes += Number(focusInput.value);

  localStorage.setItem("sessionsCompleted", sessions);
  localStorage.setItem("totalFocusMinutes", minutes);

  updateStats();

  timerMode =
    "break";

  timeLeft =
    getBreakSeconds();

  updateTimerStatus();
  updateTimerDisplay();

}

function completeBreakSession() {

  alert("✅ Break finished! Ready to lock in again?");

  timerMode =
    "focus";

  timeLeft =
    getFocusSeconds();

  updateTimerStatus();
  updateTimerDisplay();

}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimerToFocus);

switchModeBtn.addEventListener("click", () => {

  if (isRunning) return;

  if (timerMode === "focus") {
    timerMode = "break";
  } else {
    timerMode = "focus";
  }

  timeLeft = timerMode === "focus" ? getFocusSeconds() : getBreakSeconds();

  updateTimerStatus();
  updateTimerDisplay();

});

focusInput.addEventListener("change", () => {

  if (timerMode === "focus" && !isRunning) {

    timeLeft =
      getFocusSeconds();

    updateTimerDisplay();

  }

});

breakInput.addEventListener("change", () => {

  if (timerMode === "break" && !isRunning) {

    timeLeft =
      getBreakSeconds();

    updateTimerDisplay();

  }

});

updateTimerStatus();
updateTimerDisplay();

// ----------------------
// CALENDAR
// ----------------------

const calendarGrid =
  document.getElementById("calendarGrid");

const calendarMonthTitle =
  document.getElementById("calendarMonthTitle");

const prevMonthBtn =
  document.getElementById("prevMonthBtn");

const nextMonthBtn =
  document.getElementById("nextMonthBtn");

const eventTitleInput =
  document.getElementById("eventTitleInput");

const eventDateInput =
  document.getElementById("eventDateInput");

const eventRecurrenceInput =
  document.getElementById("eventRecurrenceInput");

const addEventBtn =
  document.getElementById("addEventBtn");

const selectedDateTitle =
  document.getElementById("selectedDateTitle");

const selectedDayEvents =
  document.getElementById("selectedDayEvents");

const upcomingEvents =
  document.getElementById("upcomingEvents");

let events =
  JSON.parse(localStorage.getItem("studyEvents")) || [];

let currentCalendarDate =
  new Date();

currentCalendarDate.setDate(1);

let selectedDate =
  formatDate(new Date());

eventDateInput.value =
  selectedDate;

function formatDate(date) {

  const year =
    date.getFullYear();

  const month =
    String(date.getMonth() + 1).padStart(2, "0");

  const day =
    String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;

}

function dateFromString(dateString) {

  const parts =
    dateString.split("-").map(Number);

  return new Date(parts[0], parts[1] - 1, parts[2]);

}

function readableDate(dateString) {

  return dateFromString(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

}

function saveEvents() {

  localStorage.setItem(
    "studyEvents",
    JSON.stringify(events)
  );

}

function renderCalendar() {

  calendarGrid.innerHTML =
    "";

  const year =
    currentCalendarDate.getFullYear();

  const month =
    currentCalendarDate.getMonth();

  const monthName =
    currentCalendarDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });

  calendarMonthTitle.textContent =
    monthName;

  const firstDayOfMonth =
    new Date(year, month, 1).getDay();

  const daysInMonth =
    new Date(year, month + 1, 0).getDate();

  const todayString =
    formatDate(new Date());

  for (let i = 0; i < firstDayOfMonth; i++) {

    const emptyCell =
      document.createElement("div");

    emptyCell.className =
      "calendar-empty";

    calendarGrid.appendChild(emptyCell);

  }

  for (let day = 1; day <= daysInMonth; day++) {

    const date =
      new Date(year, month, day);

    const dateString =
      formatDate(date);

    const dayButton =
      document.createElement("button");

    dayButton.className =
      "calendar-day";

    if (dateString === todayString) {
      dayButton.classList.add("today");
    }

    if (dateString === selectedDate) {
      dayButton.classList.add("selected");
    }

    const dayNumber =
      document.createElement("div");

    dayNumber.className =
      "day-number";

    dayNumber.textContent =
      day;

    dayButton.appendChild(dayNumber);

    const dayEvents =
      events.filter(event => eventOccursOn(event, dateString));

    if (dayEvents.length > 0) {

      const eventCount =
        document.createElement("span");

      eventCount.className =
        "event-count";

      eventCount.textContent =
        `${dayEvents.length} task${dayEvents.length > 1 ? "s" : ""}`;

      dayButton.appendChild(eventCount);

    }

    dayButton.addEventListener("click", () => {

      selectedDate =
        dateString;

      eventDateInput.value =
        selectedDate;

      renderCalendar();
      renderSelectedDayEvents();

    });

    calendarGrid.appendChild(dayButton);

  }

}

function renderSelectedDayEvents() {

  selectedDateTitle.textContent =
    readableDate(selectedDate);

  selectedDayEvents.innerHTML =
    "";

  const dayEvents =
    events.filter(event => eventOccursOn(event, selectedDate));

  if (dayEvents.length === 0) {

    const emptyMessage =
      document.createElement("p");

    emptyMessage.className =
      "empty-message";

    emptyMessage.textContent =
      "No tasks or events for this day.";

    selectedDayEvents.appendChild(emptyMessage);

    return;

  }

  dayEvents.forEach(event => {

    const eventItem =
      createEventItem(event);

    selectedDayEvents.appendChild(eventItem);

  });

}

function renderUpcomingEvents() {

  upcomingEvents.innerHTML =
    "";

  const today =
    formatDate(new Date());

  const upcoming =
    getOccurrencesForRange(today, formatDate(addDays(new Date(), 30)))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 6);

  if (upcoming.length === 0) {

    const emptyMessage =
      document.createElement("p");

    emptyMessage.className =
      "empty-message";

    emptyMessage.textContent =
      "No upcoming tasks or events yet.";

    upcomingEvents.appendChild(emptyMessage);

    return;

  }

  upcoming.forEach(event => {

    const eventItem =
      createEventItem(event);

    upcomingEvents.appendChild(eventItem);

  });

}

function createEventItem(event) {

  const eventItem =
    document.createElement("div");

  eventItem.className =
    "event-item";

  const eventInfo =
    document.createElement("div");

  eventInfo.className =
    "event-info";

  const title =
    document.createElement("h4");

  title.textContent =
    event.title;

  const date =
    document.createElement("p");

  const dateForDisplay =
    event.displayDate || event.date;

  date.textContent =
    readableDate(dateForDisplay);

  eventInfo.appendChild(title);
  eventInfo.appendChild(date);

  if (event.recurrence && event.recurrence !== "none") {
    const recurrenceLabel =
      document.createElement("p");

    recurrenceLabel.className =
      "recurrence-label";

    recurrenceLabel.textContent =
      `Repeats ${event.recurrence}`;

    eventInfo.appendChild(recurrenceLabel);
  }

  const deleteButton =
    document.createElement("button");

  deleteButton.className =
    "event-delete-btn";

  deleteButton.textContent =
    "Delete";

  deleteButton.addEventListener("click", () => {

    events =
      events.filter(item => item.id !== event.id);

    saveEvents();
    renderCalendar();
    renderSelectedDayEvents();
    renderUpcomingEvents();

  });

  eventItem.appendChild(eventInfo);
  eventItem.appendChild(deleteButton);

  return eventItem;

}

function eventOccursOn(event, dateString) {
  if (event.date === dateString) return true;

  if (!event.recurrence || event.recurrence === "none") {
    return false;
  }

  const eventDate = dateFromString(event.date);
  const checkDate = dateFromString(dateString);

  if (checkDate < eventDate) {
    return false;
  }

  if (event.recurrence === "daily") {
    return true;
  }

  if (event.recurrence === "weekly") {
    return eventDate.getDay() === checkDate.getDay();
  }

  if (event.recurrence === "monthly") {
    return eventDate.getDate() === checkDate.getDate();
  }

  return false;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getOccurrencesForRange(startDateString, endDateString) {
  const occurrences = [];
  const start = dateFromString(startDateString);
  const end = dateFromString(endDateString);

  for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
    const dateString = formatDate(day);

    events.forEach(event => {
      if (eventOccursOn(event, dateString)) {
        occurrences.push({
          ...event,
          date: dateString,
          displayDate: dateString
        });
      }
    });
  }

  return occurrences;
}

function addCalendarEvent() {

  const title =
    eventTitleInput.value.trim();

  const date =
    eventDateInput.value;

  if (title === "" || date === "") return;

  events.push({
    id: String(Date.now()),
    title: title,
    date: date,
    recurrence: eventRecurrenceInput ? eventRecurrenceInput.value : "none"
  });

  selectedDate =
    date;

  currentCalendarDate =
    dateFromString(date);

  currentCalendarDate.setDate(1);

  eventTitleInput.value =
    "";

  saveEvents();
  renderCalendar();
  renderSelectedDayEvents();
  renderUpcomingEvents();

}

addEventBtn.addEventListener("click", addCalendarEvent);

eventTitleInput.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    addCalendarEvent();
  }

});

eventDateInput.addEventListener("change", () => {

  if (eventDateInput.value === "") return;

  selectedDate =
    eventDateInput.value;

  currentCalendarDate =
    dateFromString(selectedDate);

  currentCalendarDate.setDate(1);

  renderCalendar();
  renderSelectedDayEvents();

});

prevMonthBtn.addEventListener("click", () => {

  currentCalendarDate.setMonth(
    currentCalendarDate.getMonth() - 1
  );

  renderCalendar();

});

nextMonthBtn.addEventListener("click", () => {

  currentCalendarDate.setMonth(
    currentCalendarDate.getMonth() + 1
  );

  renderCalendar();

});

renderCalendar();
renderSelectedDayEvents();
renderUpcomingEvents();

// ----------------------
// PROGRESS
// ----------------------

const sessionsCompleted =
  document.getElementById("sessionsCompleted");

const totalMinutes =
  document.getElementById("totalMinutes");

const resetStatsBtn =
  document.getElementById("resetStatsBtn");

function updateStats() {

  sessionsCompleted.textContent =
    localStorage.getItem("sessionsCompleted") || 0;

  totalMinutes.textContent =
    localStorage.getItem("totalFocusMinutes") || 0;

}

resetStatsBtn.addEventListener("click", () => {

  const confirmReset =
    confirm("Are you sure you want to reset your progress?");

  if (!confirmReset) return;

  localStorage.setItem("sessionsCompleted", 0);
  localStorage.setItem("totalFocusMinutes", 0);

  updateStats();

});

updateStats();

// ----------------------
// MINIGAMES
// ----------------------

// Tic Tac Toe
const tictacGrid = document.getElementById("tictacGrid");
const tictacResetBtn = document.getElementById("tictacResetBtn");
const tictacStatus = document.getElementById("tictacStatus");
const tictacDifficulty = document.getElementById("tictacDifficulty");
let tictacBoard = ["", "", "", "", "", "", "", "", ""];
let tictacGameActive = true;
let tictacMode = tictacDifficulty ? tictacDifficulty.value : "hard";

function initTicTacToe() {
  tictacBoard = ["", "", "", "", "", "", "", "", ""];
  tictacGameActive = true;
  tictacStatus.textContent = "Your turn (X)";
  tictacGrid.innerHTML = "";

  tictacBoard.forEach((cell, index) => {
    const cellBtn = document.createElement("button");
    cellBtn.className = "tictac-cell";
    cellBtn.textContent = cell;
    cellBtn.addEventListener("click", () => playTicTacToe(index));
    tictacGrid.appendChild(cellBtn);
  });
}

function checkTicTacWinner(board = tictacBoard) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of wins) {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      return board[combo[0]];
    }
  }
  return null;
}

function getBestTicTacMove() {
  const emptySpots = tictacBoard
    .map((cell, i) => (cell === "" ? i : null))
    .filter(v => v !== null);

  // Winning/blocking shortcuts
  for (let spot of emptySpots) {
    tictacBoard[spot] = "O";
    if (checkTicTacWinner(tictacBoard) === "O") {
      tictacBoard[spot] = "";
      return spot;
    }
    tictacBoard[spot] = "";
  }

  for (let spot of emptySpots) {
    tictacBoard[spot] = "X";
    if (checkTicTacWinner(tictacBoard) === "X") {
      tictacBoard[spot] = "";
      return spot;
    }
    tictacBoard[spot] = "";
  }

  if (tictacMode === "easy") {
    return emptySpots[Math.floor(Math.random() * emptySpots.length)];
  }

  let bestScore = -Infinity;
  let bestMove = emptySpots[0];

  function minimax(board, isMaximizing) {
    const winner = checkTicTacWinner(board);
    if (winner === "O") return 1;
    if (winner === "X") return -1;
    if (board.every(cell => cell)) return 0;

    if (isMaximizing) {
      let score = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "O";
          score = Math.max(score, minimax(board, false));
          board[i] = "";
        }
      }
      return score;
    } else {
      let score = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "X";
          score = Math.min(score, minimax(board, true));
          board[i] = "";
        }
      }
      return score;
    }
  }

  for (let spot of emptySpots) {
    tictacBoard[spot] = "O";
    const score = minimax(tictacBoard, false);
    tictacBoard[spot] = "";

    if (score > bestScore) {
      bestScore = score;
      bestMove = spot;
    }
  }

  return bestMove;
}

function playTicTacToe(index) {
  if (!tictacGameActive || tictacBoard[index]) return;

  tictacBoard[index] = "X";
  updateTicTacDisplay();

  let winner = checkTicTacWinner();
  if (winner) {
    tictacStatus.textContent = winner === "X" ? "🎉 You won!" : "😢 Computer won!";
    tictacGameActive = false;
    return;
  }

  if (tictacBoard.every(cell => cell)) {
    tictacStatus.textContent = "🤝 Draw!";
    tictacGameActive = false;
    return;
  }

  // Computer turn
  const computerMove = getBestTicTacMove();
  tictacBoard[computerMove] = "O";
  updateTicTacDisplay();

  winner = checkTicTacWinner();
  if (winner) {
    tictacStatus.textContent = winner === "X" ? "🎉 You won!" : "😢 Computer won!";
    tictacGameActive = false;
  } else if (tictacBoard.every(cell => cell)) {
    tictacStatus.textContent = "🤝 Draw!";
    tictacGameActive = false;
  }
}

function updateTicTacDisplay() {
  const cells = document.querySelectorAll(".tictac-cell");
  cells.forEach((cell, index) => {
    cell.textContent = tictacBoard[index];
  });
}

if (tictacDifficulty) {
  tictacDifficulty.addEventListener("change", () => {
    tictacMode = tictacDifficulty.value;
    if (tictacGameActive) {
      tictacStatus.textContent = `Your turn (X) - ${tictacMode === "hard" ? "Hard" : "Easy"}`;
    }
  });
}

tictacResetBtn.addEventListener("click", initTicTacToe);
initTicTacToe();

// Memory Match
const memoryGrid = document.getElementById("memoryGrid");
const memoryResetBtn = document.getElementById("memoryResetBtn");
const memoryScore = document.getElementById("memoryScore");
const memoryCards = ["🍎", "🍊", "🍋", "🍌", "🍓", "🍇", "🍒", "🥝"];
let memoryDeck = [];
let memoryFlipped = [];
let memoryMatched = 0;

function initMemoryMatch() {
  memoryDeck = [...memoryCards, ...memoryCards].sort(() => Math.random() - 0.5);
  memoryFlipped = [];
  memoryMatched = 0;
  memoryScore.textContent = "Score: 0/8";
  memoryGrid.innerHTML = "";

  memoryDeck.forEach((card, index) => {
    const cardBtn = document.createElement("button");
    cardBtn.className = "memory-card";
    cardBtn.textContent = "?";
    cardBtn.dataset.index = index;
    cardBtn.dataset.card = card;

    cardBtn.addEventListener("click", () => flipMemoryCard(cardBtn, index));
    memoryGrid.appendChild(cardBtn);
  });
}

function flipMemoryCard(cardBtn, index) {
  if (memoryFlipped.length >= 2 || cardBtn.classList.contains("flipped")) return;

  cardBtn.textContent = cardBtn.dataset.card;
  cardBtn.classList.add("flipped");
  memoryFlipped.push({ btn: cardBtn, card: cardBtn.dataset.card, index });

  if (memoryFlipped.length === 2) {
    setTimeout(() => {
      if (memoryFlipped[0].card === memoryFlipped[1].card) {
        memoryMatched++;
        memoryFlipped.forEach(f => f.btn.classList.add("matched"));
        memoryScore.textContent = `Score: ${memoryMatched}/8`;
        if (memoryMatched === 8) memoryScore.textContent += " 🎉 Won!";
      } else {
        memoryFlipped.forEach(f => {
          f.btn.textContent = "?";
          f.btn.classList.remove("flipped");
        });
      }
      memoryFlipped = [];
    }, 800);
  }
}

memoryResetBtn.addEventListener("click", initMemoryMatch);
initMemoryMatch();

// Wordle
const wordleWords = ["ABOUT", "BELOW", "BUILD", "CHART", "CHOSE", "CLEAN", "CLEAR", "CLIMB", "CLOSE", "COULD", "COUNT", "COURT", "COVER", "CRASH", "CREAM", "CRIME", "DANCE", "DEALT", "DELAY", "DOUBT", "DRAFT", "DRAIN", "DREAM", "DRESS", "DRINK", "DRIVE", "EARLY", "EARTH", "EIGHT", "ENJOY", "ENTER", "EQUAL", "ERROR", "EVENT", "EVERY", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FIELD", "FIFTH", "FIFTY", "FIGHT", "FINAL", "FIRST", "FIXED", "FLAME", "FLASH", "FLEET", "FLOOD", "FLOOR", "FOCUS", "FORCE", "FORTH", "FORTY", "FORUM", "FOUND", "FRAME", "FRAUD", "FRESH", "FRONT", "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GLORY", "GRACE", "GRADE", "GRAIN", "GRAND", "GRANT", "GRASS", "GRAVE", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD", "GUESS", "GUEST", "GUIDE", "GUILT", "HAPPY", "HARSH", "HEART", "HEAVY", "HENCE", "HENRY", "HORSE", "HOTEL", "HOUSE", "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "JAPAN", "JUDGE", "JUICE", "KNOWN", "KNIFE", "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", "LEARN", "LEASE", "LEAST", "LEAVE", "LEFT", "LEGAL", "LEMON", "LEVEL", "LIGHT", "LIMIT", "LOCAL", "LOGIC", "LOOSE", "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC", "MAJOR", "MAKER", "MARCH", "MARRY", "MATCH", "MAYBE", "MAYOR", "MEANT", "MEDIA", "METAL", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MONEY", "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVED", "MOVIE", "MUSIC", "NEEDS", "NEVER", "NEWLY", "NIGHT", "NINTH", "NOBLE", "NOISE", "NORTH", "NOTED", "NOVEL", "NURSE", "OCCUR", "OCEAN", "OFFER", "OFTEN", "ORDER", "ORGAN", "OTHER", "OUGHT", "OUTER", "PANEL", "PAPER", "PARTY", "PEACE", "PEARL", "PHASE", "PHONE", "PHOTO", "PIANO", "PIECE", "PILOT", "PITCH", "PIZZA", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "PLAYS", "PLAZA", "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE", "PULLED", "PULSE", "PUPIL", "QUEEN", "QUERY", "QUEST", "QUICK", "QUIET", "QUITE", "QUOTA", "QUOTE", "RADIO", "RAISE", "RANGE", "RAPID", "REACH", "REACT", "REALM", "REBEL", "REFER", "RELAX", "REPLY", "RESET", "RIDER", "RIDGE", "RIGHT", "RIVAL", "RIVER", "ROBIN", "ROMAN", "ROUGH", "ROUND", "ROUTE", "ROYAL", "RUGBY", "RULED", "RURAL", "SCALE", "SCARE", "SCENE", "SCOPE", "SCORE", "SENSE", "SERVE", "SETUP", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET", "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHOOT", "SHORE", "SHORT", "SHOWN", "SIGHT", "SINCE", "SIXTH", "SIZED", "SKILL", "SLEEP", "SLICE", "SLIDE", "SMALL", "SMART", "SMELL", "SMILE", "SMITH", "SMOKE", "SNAKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPARK", "SPEAK", "SPEED", "SPELL", "SPEND", "SPENT", "SPLIT", "SPOKE", "SPORT", "STAFF", "STAGE", "STAKE", "STAND", "START", "STATE", "STEAM", "STEEL", "STEEP", "STICK", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM", "STORY", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET", "TABLE", "TAKEN", "TASTE", "TEACH", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "THUMB", "TIGHT", "TIMER", "TIRED", "TITLE", "TODAY", "TOPIC", "TOTAL", "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TREND", "TRIAL", "TRIBE", "TRICK", "TRIED", "TRUCK", "TRULY", "TRUMP", "TRUST", "TRUTH", "TRYING", "TWICE", "UNCLE", "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL", "UPPER", "URBAN", "USUAL", "UTTER", "VALUE", "VIDEO", "VIRUS", "VISIT", "VITAL", "VOCAL", "VOICE", "WASTE", "WATCH", "WATER", "WEARY", "WHEAT", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE", "WIDEN", "WIDTH", "WOMAN", "WOMEN", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WRITE", "WRONG", "WROTE", "YIELD", "YOUNG", "YOURS", "YOUTH"];
const wordleBoard = document.getElementById("wordleBoard");
const wordleInput = document.getElementById("wordleInput");
const wordleSubmitBtn = document.getElementById("wordleSubmitBtn");
const wordleStatus = document.getElementById("wordleStatus");
let wordleGame = { word: "", attempts: 6, guesses: [], active: true };

function initWordle() {
  wordleGame.word = wordleWords[Math.floor(Math.random() * wordleWords.length)];
  wordleGame.attempts = 6;
  wordleGame.guesses = [];
  wordleGame.active = true;
  wordleStatus.textContent = "";
  wordleInput.value = "";
  wordleInput.focus();
  renderWordleBoard();
}

function renderWordleBoard() {
  wordleBoard.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.className = "wordle-row";

    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      cell.className = "wordle-cell";
      const letter = wordleGame.guesses[i] ? wordleGame.guesses[i][j] : "";
      cell.textContent = letter;

      if (wordleGame.guesses[i]) {
        const actualLetter = wordleGame.word[j];
        if (letter === actualLetter) {
          cell.classList.add("correct");
        } else if (wordleGame.word.includes(letter)) {
          cell.classList.add("present");
        } else {
          cell.classList.add("absent");
        }
      }

      row.appendChild(cell);
    }
    wordleBoard.appendChild(row);
  }
}

function submitWordleGuess() {
  if (!wordleGame.active) return;

  const guess = wordleInput.value.toUpperCase();

  if (guess.length !== 5) {
    wordleStatus.textContent = "Enter a 5-letter word!";
    return;
  }


  wordleGame.guesses.push(guess);
  wordleGame.attempts--;
  wordleInput.value = "";

  renderWordleBoard();

  if (guess === wordleGame.word) {
    wordleStatus.textContent = `🎉 You won! The word was ${wordleGame.word}`;
    wordleGame.active = false;
    wordleSubmitBtn.textContent = "New Game";
  } else if (wordleGame.attempts === 0) {
    wordleStatus.textContent = `😢 Game over! The word was ${wordleGame.word}`;
    wordleGame.active = false;
    wordleSubmitBtn.textContent = "New Game";
  } else {
    wordleStatus.textContent = `Attempts left: ${wordleGame.attempts}`;
  }
}

wordleSubmitBtn.addEventListener("click", () => {
  if (!wordleGame.active) {
    initWordle();
    wordleSubmitBtn.textContent = "Submit";
  } else {
    submitWordleGuess();
  }
});

wordleInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    if (!wordleGame.active) {
      initWordle();
      wordleSubmitBtn.textContent = "Submit";
    } else {
      submitWordleGuess();
    }
  }
});

initWordle();



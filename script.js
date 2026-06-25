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

let goals =
  JSON.parse(localStorage.getItem("studyGoals")) || [];

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

      goals.splice(index, 1);

      saveGoals();
      renderGoals();

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

renderGoals();

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
      "LOCK IN TIME";

    timerSubtext.textContent =
      "Focus session";

  } else {

    timerStatus.textContent =
      "BREAK TIME";

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
      events.filter(event => event.date === dateString);

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
    events.filter(event => event.date === selectedDate);

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
    events
      .filter(event => event.date >= today)
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

  date.textContent =
    readableDate(event.date);

  eventInfo.appendChild(title);
  eventInfo.appendChild(date);

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

function addCalendarEvent() {

  const title =
    eventTitleInput.value.trim();

  const date =
    eventDateInput.value;

  if (title === "" || date === "") return;

  events.push({
    id: String(Date.now()),
    title: title,
    date: date
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
interface taskCalendar {
  filtering(calendar: HTMLElement, request: string): Promise<HTMLElement[]>;

  post(
    calendar: HTMLElement,
    text: string,
    date: string,
    status: string,
    tag: string
  ): Promise<HTMLElement>;
  get(task: HTMLElement): Promise<HTMLElement>;
  put(update: string, task: HTMLElement): Promise<HTMLElement>;
  del(task: HTMLElement): void;
}

export const post: taskCalendar["post"] = async function Post(
  calendar,
  text,
  date,
  status,
  tag
) {
  const newTask = document.createElement("div");
  newTask.innerHTML = `<p class="text">${text}</p>
  <p class="date">${date}</p>
  <p class="status">${status}</p>
  <p class="tag">${tag}</p>`;
  calendar.appendChild(newTask);
  return calendar;
};

export const get: taskCalendar["get"] = async function Get(task) {
  return task;
};

export const putText: taskCalendar["put"] = async function PutText(
  newText,
  task
) {
  const text = task.querySelector(".text") as Element;
  text.innerHTML = `${newText}`;
  return task;
};

export const putDate: taskCalendar["put"] = async function PutDate(
  newDate,
  task
) {
  const date = task.querySelector(".date") as Element;
  date.innerHTML = `${newDate}`;
  return task;
};

export const putStatus: taskCalendar["put"] = async function PutStatus(
  newStatus,
  task
) {
  const status = task.querySelector(".status") as Element;
  status.innerHTML = `${newStatus}`;
  return task;
};

export const putTag: taskCalendar["put"] = async function PutTag(newTag, task) {
  const tag = task.querySelector(".tag") as Element;
  tag.innerHTML = `${newTag}`;
  return task;
};

export const del: taskCalendar["del"] = async function Del(task) {
  task.remove();
};

export const filterOfText: taskCalendar["filtering"] =
  async function FilterOfText(calendar, request) {
    const tasks = calendar.querySelectorAll(".tasks");
    const results = [];

    for (let i = 1; i <= tasks.length; i += 1) {
      if (calendar.querySelector(`.task-${i}-text`)?.textContent === request) {
        results.push(calendar.querySelector(`.task-${i}`));
      }
    }

    if (results.length === 1) {
      const [result] = results;
      return result;
    }
    return results;
  };

export const filterOfDate: taskCalendar["filtering"] =
  async function FilterOfDate(calendar, request) {
    const tasks = calendar.querySelectorAll(".tasks");
    const results = [];

    for (let i = 1; i <= tasks.length; i += 1) {
      if (calendar.querySelector(`.task-${i}-date`)?.textContent === request) {
        results.push(calendar.querySelector(`.task-${i}`));
      }
    }

    if (results.length === 1) {
      const [result] = results;
      return result;
    }
    return results;
  };

export const filterOfStatus: taskCalendar["filtering"] =
  async function FilterOfStatus(calendar, request) {
    const tasks = calendar.querySelectorAll(".tasks");
    const results = [];

    for (let i = 1; i <= tasks.length; i += 1) {
      if (
        calendar.querySelector(`.task-${i}-status`)?.textContent === request
      ) {
        results.push(calendar.querySelector(`.task-${i}`));
      }
    }

    if (results.length === 1) {
      const [result] = results;
      return result;
    }
    return results;
  };

export const filterOfTag: taskCalendar["filtering"] =
  async function FilterOfTag(calendar, request) {
    const tasks = calendar.querySelectorAll(".tasks");
    const results = [];

    for (let i = 1; i <= tasks.length; i += 1) {
      if (calendar.querySelector(`.task-${i}-tag`)?.textContent === request) {
        results.push(calendar.querySelector(`.task-${i}`));
      }
    }

    if (results.length === 1) {
      const [result] = results;
      return result;
    }
    return results;
  };
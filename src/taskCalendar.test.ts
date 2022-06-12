import {
  post,
  get,
  putText,
  putDate,
  putStatus,
  putTag,
  del,
  filterOfText,
  filterOfDate,
  filterOfStatus,
  filterOfTag,
} from "./taskCalendar";

describe("task calendar", () => {
  it("test of create", async () => {
    const calendar = document.createElement("div");
    const task = document.createElement("div");
    task.innerHTML = `<p class="text">homework</p>
    <p class="date">02.03.2022</p>
    <p class="status">inWork</p>
    <p class="tag">school</p>`;

    expect(
      await post(calendar, "homework", "02.03.2022", "inWork", "school")
    ).toBe(calendar);
  });

  it("test of read", async () => {
    const task = document.createElement("div");
    task.innerHTML = `<p class="text">homework</p>
    <p class="date">02.03.2022</p>
    <p class="status">inWork</p>
    <p class="tag">school</p>`;
    expect(await get(task)).toBe(task);
  });

  it("test of update", async () => {
    const task = document.createElement("div");
    task.innerHTML = `<p class="text">homework</p>
    <p class="date">02.03.2022</p>
    <p class="status">inWork</p>
    <p class="tag">school</p>`;

    const newTaskText = document.createElement("div");
    newTaskText.innerHTML = `<p class="text">learn english words</p>
    <p class="date">02.03.2022</p>
    <p class="status">inWork</p>
    <p class="tag">school</p>`;
    expect(await putText("learn english words", task)).toStrictEqual(
      newTaskText
    );

    const newTaskDate = document.createElement("div");
    newTaskDate.innerHTML = `<p class="text">learn english words</p>
    <p class="date">07.02.2021</p>
    <p class="status">inWork</p>
    <p class="tag">school</p>`;
    expect(await putDate("07.02.2021", task)).toStrictEqual(newTaskDate);

    const newTaskStatus = document.createElement("div");
    newTaskStatus.innerHTML = `<p class="text">learn english words</p>
    <p class="date">07.02.2021</p>
    <p class="status">completed</p>
    <p class="tag">school</p>`;
    expect(await putStatus("completed", task)).toStrictEqual(newTaskStatus);

    const newTaskTag = document.createElement("div");
    newTaskTag.innerHTML = `<p class="text">learn english words</p>
    <p class="date">07.02.2021</p>
    <p class="status">completed</p>
    <p class="tag">university</p>`;
    expect(await putTag("university", task)).toStrictEqual(newTaskTag);
  });

  it("test of delete", async () => {
    const calendar = document.createElement("div");
    calendar.innerHTML = `<div class="task-1">
    <p>homework</p>
    <p>02.03.2022</p>
    <p>inWork</p>
    <p>school</p>
    </div>
    <div class="task-2">
    <p>homework</p>
    <p>02.03.2022</p>
    <p>completed</p>
    <p>university</p>
    </div>`;
    const task2: HTMLElement | null = calendar.querySelector(".task-2");
    if (task2 != null) {
      expect(await del(task2)).toBe(undefined);
    }
  });

  it("test of text filter", async () => {
    const calendar = document.createElement("div");
    calendar.innerHTML = `<div class="tasks task-1">
    <p class="task-1-text">homework</p>
    <p class="task-1-date">02.03.2022</p>
    <p class="task-1-status">inWork</p>
    <p class="task-1-tag">school</p>
    </div>
    <div class="tasks task-2">
    <p class="task-2-text">homework</p>
    <p class="task-2-date">02.03.2022</p>
    <p class="task-2-status">completed</p>
    <p class="task-2-tag">university</p>
    </div>
    <div class="tasks task-3">
    <p class="task-3-text">swimming</p>
    <p class="task-3-date">03.15.2022</p>
    <p class="task-3-status">inWork</p>
    <p class="task-3-tag">sport</p>
    </div>`;
    expect(await filterOfText(calendar, "homework")).toStrictEqual([
      calendar.querySelector(".task-1"),
      calendar.querySelector(".task-2"),
    ]);
  });

  it("test of date filter", async () => {
    const calendar = document.createElement("div");
    calendar.innerHTML = `<div class="tasks task-1">
    <p class="task-1-text">homework</p>
    <p class="task-1-date">02.03.2022</p>
    <p class="task-1-status">inWork</p>
    <p class="task-1-tag">school</p>
    </div>
    <div class="tasks task-2">
    <p class="task-2-text">homework</p>
    <p class="task-2-date">15.11.2022</p>
    <p class="task-2-status">completed</p>
    <p class="task-2-tag">university</p>
    </div>
    <div class="tasks task-3">
    <p class="task-3-text">swimming</p>
    <p class="task-3-date">03.12.2022</p>
    <p class="task-3-status">inWork</p>
    <p class="task-3-tag">sport</p>
    </div>`;
    expect(await filterOfDate(calendar, "02.03.2022")).toStrictEqual(
      calendar.querySelector(".task-1")
    );
  });

  it("test of status filter", async () => {
    const calendar = document.createElement("div");
    calendar.innerHTML = `<div class="tasks task-1">
    <p class="task-1-text">homework</p>
    <p class="task-1-date">02.03.2022</p>
    <p class="task-1-status">inWork</p>
    <p class="task-1-tag">school</p>
    </div>
    <div class="tasks task-2">
    <p class="task-2-text">homework</p>
    <p class="task-2-date">15.11.2022</p>
    <p class="task-2-status">completed</p>
    <p class="task-2-tag">university</p>
    </div>
    <div class="tasks task-3">
    <p class="task-3-text">swimming</p>
    <p class="task-3-date">03.12.2022</p>
    <p class="task-3-status">inWork</p>
    <p class="task-3-tag">sport</p>
    </div>`;
    expect(await filterOfStatus(calendar, "inWork")).toStrictEqual([
      calendar.querySelector(".task-1"),
      calendar.querySelector(".task-3"),
    ]);
  });

  it("test of tag filter", async () => {
    const calendar = document.createElement("div");
    calendar.innerHTML = `<div class="tasks task-1">
    <p class="task-1-text">homework</p>
    <p class="task-1-date">02.03.2022</p>
    <p class="task-1-status">inWork</p>
    <p class="task-1-tag">school</p>
    </div>
    <div class="tasks task-2">
    <p class="task-2-text">homework</p>
    <p class="task-2-date">15.11.2022</p>
    <p class="task-2-status">completed</p>
    <p class="task-2-tag">university</p>
    </div>
    <div class="tasks task-3">
    <p class="task-3-text">swimming</p>
    <p class="task-3-date">03.12.2022</p>
    <p class="task-3-status">inWork</p>
    <p class="task-3-tag">sport</p>
    </div>`;
    expect(await filterOfTag(calendar, "school")).toStrictEqual(
      calendar.querySelector(".task-1")
    );
  });
});

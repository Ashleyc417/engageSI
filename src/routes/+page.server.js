import { parseHTML } from "linkedom";

const singleSchedules = ["Accounting", "Engineering", "Finance", "Kinesiology", "Physics", "Political Science", "Psychology"];

async function parseSchedule() {
  const url = "https://itwebstg.fullerton.edu/si-v5/schedule/ib-schedule.xml";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  const html = await response.text();

  const { document } = parseHTML(html);

  // All the information needed to scrape the schedule is inside <content> tags
  const contents = document.querySelectorAll("content");

  const schedules = [];
  for (const content of contents) {
    const schedule = {};

    // Check for department name (Accounting, Biology, Computer Science etc.)
    // If <content> does not have a p tag, then we can ignore it altogether
    const department = content.querySelector("p");
    if (!department) {
      continue;
    }


    const rows = [];

    // Get row data!
    const rowData = content.querySelectorAll("tr > td");
    if (singleSchedules.includes(department.innerHTML.substring(0, department.innerHTML.indexOf("Fall")))) {
      console.log(department.innerHTML);
    } else {
      let i = 0;
      let rowInfo = {};
      while (i < rowData.length) {
        const row = rowData.map(item => item.innerHTML);
        rowInfo = {
          classNumber: row[i],
          courseInstructor: row[i + 1],
          siLeader: row[i + 2],
          sessionDays: row[i + 3],
          sessionTimes: row[i + 4],
          location: row[i + 5],
        }
        rows.push(rowInfo);
        i += 6;
      }
    }
    schedule.department = department.innerHTML;
    schedule.rows = rows;
    schedules.push(schedule);
  }
  console.log(schedules[1]);
  return "Hello";
}

export const load = async () => {
  const tables = await parseSchedule();
  return { tables: tables };
}


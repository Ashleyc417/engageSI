import { parseHTML } from "linkedom";
import { writeFile } from "fs/promises";
import { join } from "path";
import fetch from "node-fetch";

const singleSchedules = [
  "Accounting",
  "Engineering",
  "Finance",
  "Kinesiology",
  "Physics",
  "Political Science",
  "Psychology",
];

function parseRegularTable(content) {
  const rowData = content.querySelectorAll("tr > td");
  const rows = [];
  let i = 0;
  const rowEntries = Array.from(rowData).map((item) => item.innerHTML);

  while (i < rowData.length) {
    const rowInfo = {
      classNumber: rowEntries[i],
      courseInstructor: rowEntries[i + 1],
      siLeader: rowEntries[i + 2],
      sessionDays: rowEntries[i + 3],
      sessionTimes: rowEntries[i + 4],
      location: rowEntries[i + 5],
    };
    rows.push(rowInfo);
    i += 6;
  }
  return rows;
}

function parseSmallerTable(content) {
  const rowData = content.querySelectorAll("tr > td");
  const rows = [];
  let i = 0;
  const rowEntries = Array.from(rowData).map((item) => item.innerHTML);

  while (i < rowData.length) {
    const rowInfo = {
      classTitle: rowEntries[i],
      classNumber: rowEntries[i + 1],
      courseInstructor: rowEntries[i + 2],
      siLeader: rowEntries[i + 3],
      sessionDays: rowEntries[i + 4],
      sessionTimes: rowEntries[i + 5],
      location: rowEntries[i + 6],
    };
    rows.push(rowInfo);
    i += 7;
  }
  return rows;
}

async function parseSchedule() {
  const url = "https://itwebstg.fullerton.edu/si-v5/schedule/ib-schedule.xml";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  const html = await response.text();
  const { document } = parseHTML(html);
  const contents = document.querySelectorAll("content");

  const schedules = [];
  for (const content of contents) {
    const schedule = {};
    const department = content.querySelector("p");
    if (!department) continue;

    const departmentTitle = department.innerHTML;
    const departmentName = departmentTitle.substring(
      0,
      departmentTitle.indexOf(" Fall")
    );

    const rows = singleSchedules.includes(departmentName)
      ? parseSmallerTable(content)
      : parseRegularTable(content);

    schedule.department = departmentName;
    schedule.rows = rows;
    schedules.push(schedule);
  }

  console.log(schedules);

  // Write the JSON data to ../frontend/src/lib/schedules/schedules.json
  const filePath = join(process.cwd(), '../frontend/src/lib/schedules/schedules.json');
  await writeFile(filePath, JSON.stringify(schedules, null, 2), 'utf-8');
  console.log('Schedules saved to ../frontend/src/lib/schedules/schedules.json');
  return schedules;
}

// Execute the function when the script is run
parseSchedule().catch(console.error);

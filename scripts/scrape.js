import { parseHTML } from "linkedom";
import { writeFile } from "fs/promises";
import { join } from "path";
import fetch from "node-fetch";

// NOTE: as of right now, Political Science and Kiniesiology are interesting
// exceptions and it requires to manually remove the first row out
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
  const tables = content.querySelectorAll("table");
  const rows = {};

  tables.forEach((table) => {
    // E.g. "Schedule for BIOL 151" -> "BIOL 151"
    const classTitleElem = table.querySelector("caption").innerHTML.split(" ");
    const classTitle = classTitleElem[2] + " " + classTitleElem[3];

    const rowData = table.querySelectorAll("tbody tr");
    rows[classTitle] = [];

    rowData.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowInfo = {
        classNumber: cells[0].innerHTML,
        courseInstructor: cells[1].innerHTML,
        siLeader: cells[2].innerHTML,
        sessionDays: cells[3].innerHTML,
        sessionTimes: cells[4].innerHTML,
        location: cells[5].innerHTML,
      };
      rows[classTitle].push(rowInfo);
    });
  });

  return rows;
}

function parseSmallerTable(content) {
  const rowData = content.querySelectorAll("tr > td");
  const rows = {};
  let i = 0;
  const rowEntries = Array.from(rowData).map((item) => item.innerHTML);

  while (i < rowData.length) {
    const classTitle = rowEntries[i];
    const rowInfo = {
      classNumber: rowEntries[i + 1],
      courseInstructor: rowEntries[i + 2],
      siLeader: rowEntries[i + 3],
      sessionDays: rowEntries[i + 4],
      sessionTimes: rowEntries[i + 5],
      location: rowEntries[i + 6],
    };

    if (!rows[classTitle]) {
      rows[classTitle] = [];
    }
    rows[classTitle].push(rowInfo);
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

  for (const content of contents) {
    const schedule = {};
    const department = content.querySelector("p");
    if (!department) continue;

    const departmentTitle = department.innerHTML;
    const departmentName = departmentTitle.substring(
      0,
      departmentTitle.indexOf(" Fall"),
    );

    const rows = singleSchedules.includes(departmentName)
      ? parseSmallerTable(content)
      : parseRegularTable(content);

    schedule.department = departmentName;
    schedule.sessionsOffered = rows;

    const departmentFileName = departmentName
      .split(" ")
      .join("-")
      .toLowerCase();

    const pathString = `../src/lib/schedules/${departmentFileName}.json`;
    const filePath = join(process.cwd(), pathString);
    await writeFile(filePath, JSON.stringify(schedule, null, 2), "utf-8");
  }
  console.log("Finish scraping! :)");
}

// Execute the function when the script is run
parseSchedule().catch(console.error);

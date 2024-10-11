import { parseHTML } from "linkedom";

async function parseSchedule() {
  const url = "https://itwebstg.fullerton.edu/si-v5/schedule/ib-schedule.xml";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  const html = await response.text();

  const { document } = parseHTML(html);

  const tables = document.querySelectorAll("content");

  const schedules = [];
  for (const table of tables) {
    const schedule = [];
    const data = table.querySelectorAll("tr > td");
    for (const info of data) {
      schedule.push(info.innerHTML);
    }
    schedules.push(schedule);
  }

  console.log(schedules);
  return "Hello";
}

export const load = async () => {
  const tables = await parseSchedule();
  return { tables: tables };
}


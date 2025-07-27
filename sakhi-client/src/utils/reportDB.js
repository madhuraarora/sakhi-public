import { openDB } from "idb";


const DB_NAME = "sakhi-reports";
const STORE_NAME = "reports";

export async function initDB(){
    return await openDB(DB_NAME, 1, {
        upgrade(db){
            if(!db.objectStoreNames.contains(STORE_NAME)){
                db.createObjectStore(STORE_NAME, {keyPath:"id", autoIncrement: true});
            }
        }
    });
}

export async function saveReportOffline(report) {
    const db = await initDB;
    await db.add(STORE_NAME, {...report, synced: false});
    console.log("Saved report offline: ", report);
}

export async function getUnsyncedReports() {
  const db = await initDB();
  return await db.getAllFromIndex(STORE_NAME, "synced") || [];
}

export async function getAllReports() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

export async function clearReports() {
  const db = await initDB();
  await db.clear(STORE_NAME);
}

export async function getAllUnsyncedReports() {
  const db = await initDB();
  const all = await db.getAll(STORE_NAME);
  return all.filter((report) => !report.synced);
}

export async function markReportsAsSynced() {
  const db = await initDB();
  const all = await db.getAll(STORE_NAME);
  for (let item of all) {
    await db.put(STORE_NAME, { ...item, synced: true });
  }
}
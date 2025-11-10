// MEGA-ERIC Initialization Script
import fs from "fs";
import path from "path";

const contextPath = path.resolve("./CommandCenter/AI_Agents/ERIC/context/ERIC_Context.json");

if (fs.existsSync(contextPath)) {
  const data = JSON.parse(fs.readFileSync(contextPath, "utf8"));
  console.log("\n🟢 MEGA-ERIC INITIALIZATION SUCCESSFUL");
  console.log("Role:", data.role);
  console.log("Linked To:", data.linkedTo);
  console.log("Context Sources:", data.contextSources);
  console.log("Last Sync:", data.lastSync);
  console.log("\nSystem Status:", data.status.toUpperCase());
  console.log("==========================================\n");
} else {
  console.error("❌ Context file not found:", contextPath);
  process.exit(1);
}

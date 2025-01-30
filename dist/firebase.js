import fetch from "node-fetch";
const BACKEND_URL = "https://api.cyn.ai/";
export async function checkAgentExists(agentName) {
    try {
        const response = await fetch(`${BACKEND_URL}/check-agent/${agentName}`);
        if (!response.ok) {
            throw new Error(`Error checking agent existence: ${response.statusText}`);
        }
        const data = (await response.json());
        return data.exists;
    }
    catch (error) {
        console.error("Error communicating with backend:", error.message);
        return false;
    }
}
export async function storeAgent(agentName, agentDetails) {
    try {
        const response = await fetch(`${BACKEND_URL}/store-agent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ agentName, agentDetails }),
        });
        if (!response.ok) {
            throw new Error(`Error storing agent details: ${response.statusText}`);
        }
        console.log(`Agent "${agentName}" successfully stored.`);
    }
    catch (error) {
        console.error("Error storing agent details through backend:", error.message);
    }
}
export async function getAgentData(agentName) {
    try {
        const response = await fetch(`https://api.cyn.ai/api/agent/${agentName}`);
        if (!response.ok) {
            throw new Error(`Error fetching agent data: ${response.statusText}`);
        }
        const data = (await response.json());
        return data;
    }
    catch (error) {
        console.error("Error fetching agent data from api.cyn.ai:", error.message);
        return null;
    }
}

// firebase-config-manager.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfigs = [
    { // Configuration for Database 1 (e.g., for days 1-...)
        databaseURL: "https://cyber-campus-2706f-default-rtdb.firebaseio.com"
    },
    { // Configuration for Database 2 (e.g., for days ...-...)
        databaseURL: "https://cyber1-9c84f-default-rtdb.firebaseio.com"
    },
    { // Configuration for Database 3 (e.g., for days ...-...)
        databaseURL: "https://cyber2-8ca5c-default-rtdb.firebaseio.com"
    },
    { // Configuration for Database 3 (e.g., for days ...-...)
        databaseURL: "https://cyber3-95820-default-rtdb.firebaseio.com"
    },
    {
  databaseURL: "https://bonjour-75278-default-rtdb.firebaseio.com"
}
    // Add more configurations as needed, following the same structure
];

let app;
let db;
let currentDatabaseIndex = -1; // To track the currently active database index
let initializationPromise; // To ensure initialization completes before db is used

function initializeAppWithIndex(index) {
    app = initializeApp(firebaseConfigs[index]);
    db = getDatabase(app);
    console.log(`Firebase initialized with database ${index + 1}`);
}

// Function to synchronize data from the old database to the new one (if needed)
async function synchronizeDataIfNeeded(oldIndex, newIndex) {
    if (oldIndex === -1) return; // No need to synchronize if it's the first initialization

    console.log("Starting database synchronization...");

    const oldDb = getDatabase(initializeApp(firebaseConfigs[oldIndex])); // Initialize app with old config
    const newDb = getDatabase(initializeApp(firebaseConfigs[newIndex])); // Initialize app with new config

    const dataPathsToSync = ['TicketsTotal', 'TicketsVendus', 'TicketsTransit', 'TicketConnecté', 'admin/subscription'];

    for (const path of dataPathsToSync) {
        try {
            const oldDataRef = ref(oldDb, path);
            const newDataRef = ref(newDb, path);
            const snapshot = await get(oldDataRef);
            const dataToSync = snapshot.val();

            if (dataToSync) {
                await set(newDataRef, dataToSync);
                console.log(`Data synchronized for path: ${path}`);
            }
        } catch (error) {
            console.error(`Error synchronizing path ${path}:`, error);
            throw new Error(`Error during synchronization: ${error.message}`);
        }
    }
    console.log("Database synchronization complete.");
}


// Function to select the Firebase database based on the day of the month and number of databases
async function selectDatabase() {
    const dayOfMonth = new Date().getDate();
    const numDatabases = firebaseConfigs.length; // Get the number of database configurations

    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(); // Get days in current month
    const daysPerDatabase = Math.floor(daysInMonth / numDatabases);  // Integer division
    let remainderDays = daysInMonth % numDatabases; // Remaining days after even distribution.

    let databaseIndex;
    let dayThreshold = 0; // Keep track of the day cut-off for each database.

    for (let i = 0; i < numDatabases; i++) {
        dayThreshold += daysPerDatabase;
        if (remainderDays > 0) { // Distribute remaining days one by one.
            dayThreshold++;
            remainderDays--;
        }
        if (dayOfMonth <= dayThreshold) {
            databaseIndex = i;
            break; // Important: Stop once we've found the correct database.
        }
    }

    if (databaseIndex !== currentDatabaseIndex) {
        console.log(`Switching to database index: ${databaseIndex}`);
        await synchronizeDataIfNeeded(currentDatabaseIndex, databaseIndex)
            .catch(error => {
                console.error("Synchronization failed:", error);
                throw error;
            });

        initializeAppWithIndex(databaseIndex);
        currentDatabaseIndex = databaseIndex;
        localStorage.setItem('currentDatabaseIndex', databaseIndex.toString());
    } else if (!db) {
        initializeAppWithIndex(databaseIndex); // Initialize if db is not yet set
    }
}

// Export an async function that initializes and returns the database
export async function getActiveDatabase() {
    if (!initializationPromise) {
        initializationPromise = selectDatabase(); // Start initialization promise
    }
    await initializationPromise; // Wait for initialization to complete
    return db;
}

// Immediately trigger initial database selection and initialization on module load (optional, can be done in login.html as well)
// selectDatabase().catch(error => console.error("Initial database selection error:", error));
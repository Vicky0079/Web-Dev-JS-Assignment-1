const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

let sampleEvent = [
    {
        title: "Web dev",
        date: "2026-12-04",
        category: "Workshop",
        description: "Sample workshop description!"
    },
    {
        title: "Web dev2",
        date: "2026-12-05",
        category: "Conference",
        description: "Sample conference description!"
    }
];

// Add sample events
addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
});

// Create event card
function createEventCard(eventData){
    const card = document.createElement("div");
    card.className = 'event-card';
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    return card;
}

// Add event card inside eventContainer
function addEvent(eventData){
    const emptyState = document.querySelector(".empty-state");
    if(emptyState) emptyState.remove();
    eventContainer.appendChild(createEventCard(eventData));
}

// Delete individual event using event delegation
eventContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")){
        const card = e.target.closest(".event-card");
        card.remove();
        if(eventContainer.children.length === 0){
            eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
        }
    }
});

// Clear All Events
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
});

// Form submit
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset();
});

// DOM Manipulation Keyboard Demo
document.addEventListener("keydown", (event) => {
    demoContent.textContent = `You Pressed: "${event.key}"`;
});

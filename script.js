document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const lmpInput = document.getElementById('lmp');
    const cycleInput = document.getElementById('cycle');
    const cycleMinusBtn = document.getElementById('cycle-minus');
    const cyclePlusBtn = document.getElementById('cycle-plus');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const dueDateDisplay = document.getElementById('due-date-display');
    const currentWeekDisplay = document.getElementById('current-week');
    const trimesterDisplay = document.getElementById('trimester');
    const daysLeftDisplay = document.getElementById('days-left');

    // Cycle length controls
    cycleMinusBtn.addEventListener('click', () => {
        let val = parseInt(cycleInput.value) || 28;
        if (val > 20) cycleInput.value = val - 1;
    });

    cyclePlusBtn.addEventListener('click', () => {
        let val = parseInt(cycleInput.value) || 28;
        if (val < 45) cycleInput.value = val + 1;
    });

    // Calculate Handler
    calculateBtn.addEventListener('click', calculateDueDate);

    function calculateDueDate() {
        const lmpDate = new Date(lmpInput.value);
        if (isNaN(lmpDate.getTime())) {
            // Simple validation feedback
            lmpInput.style.borderColor = '#FF6B6B';
            setTimeout(() => lmpInput.style.borderColor = 'transparent', 2000);
            return;
        }

        const cycleLength = parseInt(cycleInput.value) || 28;
        const correction = cycleLength - 28;

        // Naegele's Rule: LMP + 280 days + correction
        const dueDate = new Date(lmpDate);
        dueDate.setDate(dueDate.getDate() + 280 + correction);

        // Current Progress
        const today = new Date();
        const diffTime = today - lmpDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Calculate weeks and days
        // Pregnancy is usually counted from LMP
        // Current gestational age adjustment for cycle length is debated,
        // but typically the due date shifts, implying the "effective" LMP shifts.
        // For simplicity in this UI, we stick to LMP-based age, 
        // but let's align it with the due date for consistency.
        // If due date moves +2 days, effectively ovulation was later, so baby is younger.
        // So we subtract correction from the age.

        let gestationalDays = diffDays - correction; // Adjust age based on cycle
        if (gestationalDays < 0) gestationalDays = 0;

        const currentWeeks = Math.floor(gestationalDays / 7);
        const currentDaysRemainder = gestationalDays % 7;

        // Trimester
        let trimester = 'First';
        if (currentWeeks >= 13 && currentWeeks < 27) trimester = 'Second';
        if (currentWeeks >= 27) trimester = 'Third';

        // Days Left
        const daysLeft = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

        // Format Date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dueDate.toLocaleDateString('en-US', options);

        // Update DOM - Basic Results
        dueDateDisplay.textContent = formattedDate;
        currentWeekDisplay.textContent = `${currentWeeks}w ${currentDaysRemainder}d`;
        trimesterDisplay.textContent = trimester;
        daysLeftDisplay.textContent = daysLeft > 0 ? daysLeft : '0';

        // --- Update Timeline View ---
        const timelineContainer = document.getElementById('timeline-container');
        timelineContainer.innerHTML = ''; // Clear previous

        // Calculate current week index (1-based)
        // "In your Xth week" means weeks completed + 1
        let currentWeekIndex = currentWeeks + 1;
        if (currentWeekIndex < 1) currentWeekIndex = 1;

        let targetScrollElement = null;

        // Generate Loop using data.js
        for (let w = 1; w <= 42; w++) {
            // Handle data fallback
            const data = pregnancyWeeklyData[w] || pregnancyWeeklyData[40]; // Fallback to week 40 data if out of range, or handle empty? 
            // Actually for post 42 we might not have data in keys, let's just use 42's data if missing for now.

            // Determine Trimester
            let triLabel = '1st Trimester';
            if (w >= 14) triLabel = '2nd Trimester';
            if (w >= 28) triLabel = '3rd Trimester';

            const card = document.createElement('div');
            card.className = 'week-card';

            // Check if current
            if (w === currentWeekIndex) {
                card.classList.add('current-week');
                targetScrollElement = card;
            }

            // Build Inner HTML
            // Tests Tags
            const testTags = data.tests
                .filter(t => t !== 'None')
                .map(t => `<span class="tag test">🩺 ${t}</span>`)
                .join('');

            // Symptoms Tags (Limit to 3 for space)
            const symptomTags = data.symptoms
                .slice(0, 3)
                .map(s => `<span class="tag symptom">🤧 ${s}</span>`)
                .join('');

            card.innerHTML = `
                <div class="week-visual">
                    <img src="${data.image}" alt="Week ${w}">
                </div>
                <div class="week-content">
                    <div class="week-header">
                        <h3>Week ${w}</h3>
                        <span class="trimester-tag">${triLabel}</span>
                    </div>
                    <p class="week-desc">${data.development}</p>
                    <div class="week-extras">
                        ${testTags}
                        ${symptomTags}
                    </div>
                </div>
             `;

            timelineContainer.appendChild(card);
        }

        // Show Result
        resultContainer.classList.remove('hidden');
        timelineContainer.classList.remove('hidden');

        // Force reflow
        void resultContainer.offsetWidth;
        resultContainer.classList.add('visible');

        // Scroll to current week after short delay for transition
        if (targetScrollElement) {
            setTimeout(() => {
                targetScrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    }
});

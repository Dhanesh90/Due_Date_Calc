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

    // Modal Elements
    const modal = document.getElementById('week-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalWeekNum = document.getElementById('modal-week-num');
    const modalSizeIcon = document.getElementById('modal-size-icon');
    const modalSizeName = document.getElementById('modal-size-name');
    const modalDevInfo = document.getElementById('modal-dev-info');
    const modalTipsList = document.getElementById('modal-tips-list');
    const modalTestsList = document.getElementById('modal-tests-list');

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

    // Modal Interaction
    function openModal(week) {
        // Get data safely
        const data = pregnancyWeeklyData[week] || pregnancyWeeklyData[40];

        // Populate Modal
        modalWeekNum.textContent = week;
        modalImg.src = data.visual || data.image; // Use specific visual if available, else standard image
        modalSizeIcon.textContent = data.sizeIcon || '👶';
        modalSizeName.textContent = data.sizeComparison || 'Size of a Baby';
        modalDevInfo.textContent = data.detailedInfo || data.development;

        // Clear and Populate Lists
        modalTipsList.innerHTML = '';
        const tips = data.medicalTips || ["Relax and stay hydrated!"];
        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            modalTipsList.appendChild(li);
        });

        modalTestsList.innerHTML = '';
        // Combine tests and symptoms for the list
        const tests = data.tests && data.tests.length && data.tests[0] !== 'None' ? data.tests : [];
        const symptoms = data.symptoms || [];

        const combinedItems = [
            ...tests.map(t => ({ text: t, type: 'test' })),
            ...symptoms.map(s => ({ text: s, type: 'symptom' }))
        ];

        if (combinedItems.length === 0) {
            const li = document.createElement('li');
            li.textContent = "No specific tests or new symptoms this week.";
            modalTestsList.appendChild(li);
        } else {
            combinedItems.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item.type === 'test' ? `<strong>Test:</strong> ${item.text}` : `<strong>Symptom:</strong> ${item.text}`;
                modalTestsList.appendChild(li);
            });
        }

        // Show Modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Modal Event Listeners
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });


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
        let currentWeekIndex = currentWeeks + 1;
        if (currentWeekIndex < 1) currentWeekIndex = 1;

        let targetScrollElement = null;

        // Generate Loop using data.js
        for (let w = 1; w <= 42; w++) {
            const data = pregnancyWeeklyData[w] || pregnancyWeeklyData[40];

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

            // Valid Tests & Symptoms for Preview
            const testTags = (data.tests || [])
                .filter(t => t !== 'None')
                .map(t => `<span class="tag test">🩺 ${t}</span>`)
                .join('');

            const symptomTags = (data.symptoms || [])
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
                <div class="click-hint">Tap for details</div> 
            `;

            // Add Click Event for Modal
            card.addEventListener('click', () => openModal(w));

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

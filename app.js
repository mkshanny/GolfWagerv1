document.addEventListener('DOMContentLoaded', () => {
    const rulesContainer = document.getElementById('rules-container');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createRuleCard(rule) {
        const card = document.createElement('div');
        card.classList.add('rule-card');
        card.innerHTML = `
            <div class="rule-card-content">
                <div class="emoji">${rule.emoji || '⛳'}</div>
                <div class="title">${rule.title}</div>
                <div class="category">${rule.category}</div>
                <div class="question">${rule.scenario || rule.question}</div>
                <div class="answer">${rule.explanation || rule.answer}</div>
            </div>
        `;
        return card;
    }

    function renderRules(rules) {
        rulesContainer.innerHTML = '';
        rules.forEach(rule => {
            rulesContainer.appendChild(createRuleCard(rule));
        });
    }

    function filterRules(category, searchTerm = '') {
        let filteredRules = golfRules;

        if (category !== 'all') {
            filteredRules = filteredRules.filter(rule => rule.category === category);
        }

        if (searchTerm) {
            const lowerSearchTerm = searchTerm.toLowerCase();
            filteredRules = filteredRules.filter(rule => 
                rule.title.toLowerCase().includes(lowerSearchTerm) ||
                (rule.scenario || rule.question || '').toLowerCase().includes(lowerSearchTerm) ||
                (rule.explanation || rule.answer || '').toLowerCase().includes(lowerSearchTerm)
            );
        }

        renderRules(filteredRules);
    }

    // Initial render
    renderRules(golfRules);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterRules(button.dataset.category);
        });
    });

    // Search input event listener
    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        filterRules(activeCategory, e.target.value);
    });

    // Ensure the first filter button is active by default
    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }
});

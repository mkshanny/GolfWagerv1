// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!golfRules) {
            console.error('golfRules not defined');
            return;
        }

        console.log('Rules loaded successfully');
        debugRules();

        const rulesContainer = document.getElementById('rulesContainer');
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');

        if (!rulesContainer) {
            console.error('Rules container not found');
            return;
        }
        if (!searchInput) {
            console.error('Search input not found');
            return;
        }
        if (filterButtons.length === 0) {
            console.error('No filter buttons found');
            return;
        }

        function createRuleCard(rule) {
            const card = document.createElement('div');
            card.className = 'rule-card';

            const content = document.createElement('div');
            content.className = 'rule-card-content';

            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.alignItems = 'center';

            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = rule.emoji || '⛳';

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = rule.title;

            header.appendChild(emoji);
            header.appendChild(title);
            content.appendChild(header);

            const category = document.createElement('div');
            category.className = 'category';
            category.textContent = rule.category;
            content.appendChild(category);

            const question = document.createElement('div');
            question.className = 'question';
            question.textContent = rule.scenario || rule.question;
            content.appendChild(question);

            const answer = document.createElement('div');
            answer.className = 'answer';
            answer.textContent = rule.explanation || rule.answer;
            content.appendChild(answer);

            card.appendChild(content);

            if (rule.details) {
                const detailsSection = document.createElement('div');
                detailsSection.className = 'rule-details';

                const toggle = document.createElement('div');
                toggle.className = 'details-toggle';
                toggle.innerHTML = `
                    <span>Show Details</span>
                    <span class="material-icons">expand_more</span>
                `;

                const detailsContent = document.createElement('div');
                detailsContent.className = 'details-content';

                Object.entries(rule.details).forEach(([key, value]) => {
                    const section = document.createElement('div');
                    section.className = 'details-section';

                    const heading = document.createElement('h4');
                    heading.textContent = key;
                    section.appendChild(heading);

                    if (Array.isArray(value)) {
                        const list = document.createElement('ul');
                        value.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            list.appendChild(li);
                        });
                        section.appendChild(list);
                    } else {
                        const paragraph = document.createElement('p');
                        paragraph.textContent = value;
                        section.appendChild(paragraph);
                    }

                    detailsContent.appendChild(section);
                });

                toggle.addEventListener('click', () => {
                    toggle.classList.toggle('active');
                    detailsContent.classList.toggle('active');
                    toggle.querySelector('span:first-child').textContent = 
                        toggle.classList.contains('active') ? 'Hide Details' : 'Show Details';
                });

                detailsSection.appendChild(toggle);
                detailsSection.appendChild(detailsContent);
                card.appendChild(detailsSection);
            }

            return card;
        }

        function renderRules(rules) {
            if (!rulesContainer) {
                console.error('Rules container not found');
                return;
            }

            rulesContainer.innerHTML = '';
            rules.forEach(rule => {
                rulesContainer.appendChild(createRuleCard(rule));
            });
        }

        function filterRules(category = 'all', searchTerm = '') {
            if (!golfRules) {
                console.error('golfRules not defined');
                return;
            }

            let filteredRules = golfRules;

            if (searchTerm) {
                const lowerSearchTerm = searchTerm.toLowerCase();
                filteredRules = filteredRules.filter(rule => 
                    rule.title.toLowerCase().includes(lowerSearchTerm) ||
                    (rule.scenario || rule.question || '').toLowerCase().includes(lowerSearchTerm) ||
                    (rule.explanation || rule.answer || '').toLowerCase().includes(lowerSearchTerm) ||
                    (rule.category || '').toLowerCase().includes(lowerSearchTerm)
                );
            } else if (category !== 'all') {
                filteredRules = filteredRules.filter(rule => rule.category === category);
            }

            renderRules(filteredRules);
        }

        const bettingButton = document.querySelector('[data-category="Betting Games"]');
        if (bettingButton) {
            bettingButton.classList.add('active');
            filterRules('Betting Games', '');
        } else {
            renderRules(golfRules);
        }

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            filterRules('all', searchTerm);
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const category = button.dataset.category;
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    filterRules('all', searchTerm);
                } else {
                    filterRules(category, '');
                }
            });
        });
    }, 100);
});

function debugRules() {
    if (golfRules) {
        console.log('Rules array:', golfRules);
        console.log('Rules array length:', golfRules.length);
        console.log('First rule:', golfRules[0]);
        console.log('Rules container:', document.getElementById('rulesContainer'));
        console.log('Search input:', document.getElementById('searchInput'));
        console.log('Filter buttons:', document.querySelectorAll('.filter-btn'));
    } else {
        console.error('golfRules not found');
    }
}

// --- Dynamic Meta Tag and Title Updates ---
function updateMetaTagsForRoute() {
    const route = window.location.pathname.toLowerCase();
    let title = 'GolfWagers - Golf Betting Rules & Scoring Guide';
    let description = 'GolfWagers: The ultimate golf betting rules and scoring guide. Learn, play, and bet smarter with clear explanations for every golf game and format.';

    if (route === '/rules') {
        title = 'GolfWagers - Golf Rules';
        description = 'Explore all the official and casual golf rules. Learn how to play by the book and enjoy your round!';
    } else if (route === '/games') {
        title = 'GolfWagers - Golf Games & Formats';
        description = 'Discover popular golf games and formats. Spice up your next round with new ways to play and bet!';
    } else if (route === '/about') {
        title = 'About GolfWagers';
        description = 'Learn more about GolfWagers, our mission, and how we help golfers enjoy the game.';
    } else if (route === '/contact') {
        title = 'Contact GolfWagers';
        description = 'Get in touch with the GolfWagers team. We welcome your questions, feedback, and suggestions!';
    }

    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
}

// Update meta tags on initial load
updateMetaTagsForRoute();

// Optionally, update meta tags on popstate (browser navigation)
window.addEventListener('popstate', updateMetaTagsForRoute);
// If you use pushState for navigation, call updateMetaTagsForRoute() after changing the route.

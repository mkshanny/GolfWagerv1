// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a brief moment to ensure rules.js has loaded
    setTimeout(() => {
        if (!golfRules) {
            console.error('golfRules not defined');
            return;
        }
        
        console.log('Rules loaded successfully');
        debugRules();
        
        // Get DOM elements
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

        // Create a rule card element
        function createRuleCard(rule) {
            const card = document.createElement('div');
            card.className = 'rule-card';
            
            // Create content container
            const content = document.createElement('div');
            content.className = 'rule-card-content';
            
            // Create header with emoji and title
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
            
            // Add category
            const category = document.createElement('div');
            category.className = 'category';
            category.textContent = rule.category;
            content.appendChild(category);
            
            // Add question
            const question = document.createElement('div');
            question.className = 'question';
            question.textContent = rule.scenario || rule.question;
            content.appendChild(question);
            
            // Add answer
            const answer = document.createElement('div');
            answer.className = 'answer';
            answer.textContent = rule.explanation || rule.answer;
            content.appendChild(answer);
            
            // Add content to card
            card.appendChild(content);

            // Create details section if additional info exists
            if (rule.details) {
                const detailsSection = document.createElement('div');
                detailsSection.className = 'rule-details';

                // Create toggle button
                const toggle = document.createElement('div');
                toggle.className = 'details-toggle';
                toggle.innerHTML = `
                    <span>Show Details</span>
                    <span class="material-icons">expand_more</span>
                `;

                // Create details content
                const detailsContent = document.createElement('div');
                detailsContent.className = 'details-content';

                // Add each detail section
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

                // Add toggle functionality
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

        // Render rules to container
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

        // Filter rules based on category and search term
        function filterRules(category = 'all', searchTerm = '') {
            if (!golfRules) {
                console.error('golfRules not defined');
                return;
            }

            let filteredRules = golfRules;

            // Always search across all categories if there is a search term
            if (searchTerm) {
                const lowerSearchTerm = searchTerm.toLowerCase();
                filteredRules = filteredRules.filter(rule => 
                    rule.title.toLowerCase().includes(lowerSearchTerm) ||
                    (rule.scenario || rule.question || '').toLowerCase().includes(lowerSearchTerm) ||
                    (rule.explanation || rule.answer || '').toLowerCase().includes(lowerSearchTerm) ||
                    (rule.category || '').toLowerCase().includes(lowerSearchTerm)
                );
            } else if (category !== 'all') {
                // Only filter by category if search is empty
                filteredRules = filteredRules.filter(rule => rule.category === category);
            }

            renderRules(filteredRules);
        }

        // Initial render
        // Set initial active state to Betting
        const bettingButton = document.querySelector('[data-category="Betting Games"]');
        if (bettingButton) {
            bettingButton.classList.add('active');
            filterRules('Betting Games', '');
        } else {
            renderRules(golfRules);
        }

        // Add search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            // Always search across all categories
            filterRules('all', searchTerm);
        });

        // Add filter button functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Only filter by category if search is empty
                const category = button.dataset.category;
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    filterRules('all', searchTerm);
                } else {
                    filterRules(category, '');
                }
            });
        });
    }, 100); // Small delay to ensure rules.js is loaded
});

// Debug function to show rules
function debugRules() {
    if (golfRules) {
        console.log('Rules array:', golfRules);
        console.log('Rules array length:', golfRules.length);
        console.log('First rule:', golfRules[0]);
        console.log('Rules container:', document.getElementById('rules-container'));
        console.log('Search input:', document.getElementById('search-input'));
        console.log('Filter buttons:', document.querySelectorAll('.filter-btn'));
    } else {
        console.error('golfRules not found');
    }
}

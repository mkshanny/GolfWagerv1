const golfRules = [
    // Basics
    {
        id: 1,
        title: "Provisional Ball",
        scenario: "When can you hit a provisional ball?",
        explanation: "If you think your ball might be lost or out of bounds, you can hit a provisional ball before searching. Announce 'provisional ball' before hitting. This saves time and prevents having to return to the original spot.",
        emoji: "🏌️‍♀️",
        category: "Basics",
        details: {
            "When to Use": [
                "When your ball might be lost outside a penalty area",
                "When your ball might be out of bounds",
                "When you're unsure of the ball's location"
            ],
            "Procedure": [
                "Announce 'provisional ball' before hitting",
                "Play the provisional ball from the same spot as the original",
                "You can continue playing the provisional until you reach the area where the original ball might be"
            ],
            "Important Rules": [
                "You must announce your intention to play a provisional",
                "You can abandon the provisional if you find your original ball in bounds",
                "If you find your original ball out of bounds, you must continue with the provisional"
            ],
            "Time Saving Tips": [
                "Hit a provisional when there's any doubt about the original ball",
                "Use a different ball to easily distinguish between original and provisional",
                "Remember the spot where your original ball might be"
            ]
        }
    },
    {
        id: 2,
        title: "Mulligans in Casual Play",
        scenario: "Are mulligans allowed in our friendly round?",
        explanation: "Mulligans are not official golf rules but are often used in friendly games. Typically, each player gets 1-2 free do-over shots per round. Always agree on mulligan rules before starting.",
        emoji: "🤝",
        category: "Basics",
        details: {
            "Common Mulligan Rules": [
                "One mulligan per nine holes",
                "Two mulligans per round",
                "Mulligans only off the tee",
                "No mulligans on par 3s"
            ],
            "When to Use": [
                "Terrible tee shots",
                "Shots that go out of bounds",
                "Shots that land in unplayable lies"
            ],
            "Etiquette": [
                "Always announce mulligan rules before starting",
                "Be consistent with mulligan usage",
                "Don't abuse the privilege"
            ],
            "Variations": [
                "Breakfast Ball: One mulligan on the first tee only",
                "Gallery Rule: Take a mulligan if someone saw your bad shot",
                "Double or Nothing: Risk your mulligan for a chance at a better shot"
            ]
        }
    },
    {
        id: 3,
        title: "Lost Ball Rule",
        scenario: "What happens if my ball goes missing on the course?",
        explanation: "If a ball is lost, take a one-stroke penalty and replay from the previous spot. You have 3 minutes to search for the ball. If not found, you must take a stroke-and-distance penalty.",
        emoji: "🕵️",
        category: "Basics",
        details: {
            "Search Procedure": [
                "You have 3 minutes to search for your ball",
                "The search time starts when you or your caddie begin looking",
                "Other players can help in the search"
            ],
            "Penalty Options": [
                "Stroke and distance: Return to previous spot with one-stroke penalty",
                "Lateral relief: Drop within two club lengths of where the ball was lost (if local rule in effect)",
                "Back-on-the-line relief: Drop anywhere on the line from the hole through where the ball was lost"
            ],
            "Time Management": [
                "Start searching immediately",
                "Use the full 3 minutes if needed",
                "Let faster groups play through if search takes longer"
            ],
            "Prevention Tips": [
                "Watch your ball until it stops",
                "Use landmarks to mark the area",
                "Play a provisional if there's any doubt"
            ]
        }
    },
    {
        id: 4,
        title: "Ball Drops and Relief",
        scenario: "How do I take a drop when my ball is in a bad spot?",
        explanation: "When taking relief, drop the ball from knee height directly below the point of relief. The ball must come to rest within one club length, not nearer to the hole. Different rules apply for free drops versus penalty drops.",
        emoji: "📏",
        category: "Basics",
        details: {
            "Proper Drop Procedure": [
                "Stand erect and drop from knee height",
                "Drop the ball straight down",
                "The ball must come to rest within the relief area",
                "If the ball rolls outside the relief area, you must re-drop"
            ],
            "Relief Areas": [
                "Free relief: One club length from nearest point of relief",
                "Penalty relief: Two club lengths from reference point",
                "Back-on-the-line relief: Anywhere on the line from the hole through the reference point"
            ],
            "Common Relief Situations": [
                "Cart paths and man-made objects",
                "Ground under repair",
                "Immovable obstructions",
                "Abnormal course conditions"
            ],
            "Important Rules": [
                "The ball must be dropped, not placed (unless specified)",
                "You can't improve your lie when taking relief",
                "The relief area must be in the same area of the course"
            ]
        }
    },
    {
        id: 5,
        title: "Out of Bounds",
        scenario: "What happens if I hit my ball out of bounds?",
        explanation: "If your ball goes out of bounds, you must replay from the original spot with a one-stroke penalty. This means you're effectively hitting your third shot after the out of bounds hit.",
        emoji: "🚧",
        category: "Basics",
        details: {
            "Identifying OB": [
                "White stakes or lines mark out of bounds",
                "Fences or walls can mark boundaries",
                "Course property lines are typically OB"
            ],
            "Procedure": [
                "Take stroke and distance penalty",
                "Return to original spot",
                "Play another ball",
                "Count the original stroke plus penalty"
            ],
            "Local Rules": [
                "Some courses have local rules for OB",
                "Lateral relief options may be available",
                "Check with the pro shop for specific rules"
            ],
            "Strategy Tips": [
                "Play a provisional ball when in doubt",
                "Take extra club to avoid OB",
                "Consider the wind and hazards"
            ]
        }
    },
    {
        id: 6,
        title: "Tee Box Rules",
        scenario: "Can I tee off outside the tee markers?",
        explanation: "You must tee off between and behind the tee markers, within two club lengths. Tee off outside this area and you'll incur a penalty in stroke play.",
        emoji: "🟩",
        category: "Basics",
        details: {
            "Tee Box Boundaries": [
                "Must be between the tee markers",
                "Can be up to two club lengths behind the markers",
                "Cannot be in front of the markers"
            ],
            "Teeing Rules": [
                "Ball must be on the teeing ground",
                "Can use any club from the tee",
                "Can move the ball before the first stroke"
            ],
            "Penalties": [
                "Stroke play: Two-stroke penalty",
                "Match play: No penalty, but opponent can make you replay"
            ],
            "Common Mistakes": [
                "Teeing up in front of markers",
                "Using wrong tee markers",
                "Not checking local rules for specific tees"
            ]
        }
    },
    {
        id: 7,
        title: "Playing the Wrong Ball",
        scenario: "What if I hit the wrong ball by mistake?",
        explanation: "Hitting the wrong ball results in a two-stroke penalty in stroke play. Identify your ball before every shot to avoid this.",
        emoji: "❌",
        category: "Basics",
        details: {
            "Penalties": [
                "Stroke play: Two-stroke penalty",
                "Match play: Loss of hole",
                "Must correct the mistake before next tee"
            ],
            "Prevention": [
                "Mark your ball uniquely",
                "Identify your ball before each shot",
                "Announce your ball's identification"
            ],
            "Correction Procedure": [
                "Return to where you played the wrong ball",
                "Play the correct ball",
                "Add penalty strokes",
                "Continue play"
            ],
            "Common Scenarios": [
                "Similar looking balls in same area",
                "Balls close together on the green",
                "Balls in similar lies in the rough"
            ]
        }
    },
    {
        id: 8,
        title: "Unplayable Lie",
        scenario: "What do I do if I can't hit my ball from where it lies?",
        explanation: "Declare it unplayable, take a one-stroke penalty, and drop within two club lengths, back-on-the-line, or replay from the original spot.",
        emoji: "🚫",
        category: "Basics",
        details: {
            "Relief Options": [
                "Stroke and distance: Return to previous spot",
                "Back-on-the-line: Drop anywhere on the line from the hole through the ball",
                "Lateral relief: Drop within two club lengths"
            ],
            "When to Declare": [
                "Ball in deep rough",
                "Ball in bushes or trees",
                "Ball in a divot",
                "Ball in an awkward lie"
            ],
            "Procedure": [
                "Announce your intention",
                "Take one-stroke penalty",
                "Choose relief option",
                "Drop the ball properly"
            ],
            "Strategy Tips": [
                "Consider all relief options",
                "Think about the next shot",
                "Don't be afraid to take relief"
            ]
        }
    },
    {
        id: 9,
        title: "Water Hazards",
        scenario: "What are my options if my ball goes into water?",
        explanation: "Take a one-stroke penalty and drop where the ball last crossed the water's edge, or replay the shot.",
        emoji: "💦",
        category: "Basics",
        details: {
            "Types of Water Hazards": [
                "Yellow stakes/lines: Regular water hazard",
                "Red stakes/lines: Lateral water hazard",
                "Blue stakes: Penalty area"
            ],
            "Relief Options": [
                "Stroke and distance: Return to previous spot",
                "Back-on-the-line: Drop anywhere on the line from the hole through where the ball last crossed",
                "Lateral relief: Drop within two club lengths (red stakes only)"
            ],
            "Procedure": [
                "Identify where the ball last crossed the hazard",
                "Take one-stroke penalty",
                "Choose relief option",
                "Drop the ball properly"
            ],
            "Strategy Tips": [
                "Consider the wind and water depth",
                "Take enough club to clear the hazard",
                "Play a provisional if in doubt"
            ]
        }
    },
    {
        id: 10,
        title: "Ground Under Repair",
        scenario: "Can I move my ball off ground under repair?",
        explanation: "Yes, you can take free relief by dropping within one club length from the nearest point of relief, no closer to the hole.",
        emoji: "🛠️",
        category: "Basics",
        details: {
            "Identifying GUR": [
                "Marked with white lines",
                "Marked with blue stakes",
                "Obvious damage to the course",
                "Maintenance areas"
            ],
            "Relief Procedure": [
                "Find nearest point of relief",
                "Drop within one club length",
                "No closer to the hole",
                "Free relief (no penalty)"
            ],
            "Common GUR Areas": [
                "Maintenance work",
                "Damaged turf",
                "Construction areas",
                "Temporary conditions"
            ],
            "Important Notes": [
                "Must be marked as GUR",
                "Can't improve your lie",
                "Must take complete relief"
            ]
        }
    },
    {
        id: 11,
        title: "Cart Path Relief",
        scenario: "Can I move my ball off the cart path?",
        explanation: "Yes. Take free relief by finding the nearest point off the path and drop within one club length, no closer to the hole.",
        emoji: "🛺",
        category: "Basics"
    },
    {
        id: 12,
        title: "Embedded Ball",
        scenario: "What if my ball is embedded in the ground?",
        explanation: "If your ball is embedded in its own pitch mark in the general area, you may take free relief by dropping it within one club length.",
        emoji: "🌱",
        category: "Basics"
    },
    {
        id: 13,
        title: "Air Shot",
        scenario: "Does a missed swing count as a stroke?",
        explanation: "Yes. Any intentional attempt to strike the ball, even if missed, counts as a stroke.",
        emoji: "💨",
        category: "Basics"
    },
    {
        id: 14,
        title: "Touching the Sand",
        scenario: "Can I touch the sand in a bunker before my shot?",
        explanation: "You cannot touch the sand with your club before making a stroke in the bunker. Doing so results in a penalty.",
        emoji: "🏖️",
        category: "Basics"
    },
    {
        id: 15,
        title: "Playing Out of Turn",
        scenario: "Does order matter when playing?",
        explanation: "In stroke play, order is less strict, but in match play, playing out of turn can allow the opponent to make you replay.",
        emoji: "🔄",
        category: "Basics"
    },
    {
        id: 16,
        title: "Flagstick In or Out",
        scenario: "Can I leave the flagstick in while putting?",
        explanation: "Yes, you can leave the flagstick in or take it out while putting. It's up to the player.",
        emoji: "🚩",
        category: "Basics"
    },
    {
        id: 17,
        title: "Ready Golf",
        scenario: "What is ready golf and can we use it?",
        explanation: "Ready golf encourages players to hit when ready, rather than by order. It speeds up play and is encouraged in stroke play unless unsafe.",
        emoji: "⏱️",
        category: "Basics"
    },
    {
        id: 18,
        title: "Double Hit",
        scenario: "What happens if I hit the ball twice in one swing?",
        explanation: "If your club accidentally hits the ball more than once in one stroke, it only counts as one stroke, no penalty.",
        emoji: "🎯",
        category: "Basics"
    },
    {
        id: 19,
        title: "Ball Hits Another Ball",
        scenario: "What if my ball hits another ball on the green?",
        explanation: "If your ball hits another stationary ball on the green, there's no penalty in stroke play, but you must play your ball from where it lies.",
        emoji: "🎱",
        category: "Basics"
    },
    {
        id: 20,
        title: "Replacing a Moved Ball",
        scenario: "What if my ball moves after I mark and lift it?",
        explanation: "If your ball moves after being marked and replaced (e.g., due to wind), return it to its original spot without penalty.",
        emoji: "🎯",
        category: "Basics"
    },
    // Team Formats
    {
        id: 21,
        title: "Scramble Scoring Basics",
        scenario: "How does a scramble tournament work?",
        explanation: "In a scramble, all team members hit from the best previous shot. The team selects the best ball location after each shot until the ball is holed. This format encourages teamwork and is great for charity events.",
        emoji: "🏆",
        category: "Team Formats"
    },
    {
        id: 22,
        title: "Texas Scramble Twist",
        scenario: "What makes Texas Scramble different?",
        explanation: "In Texas Scramble, each player must use their own ball for a certain number of drives during the round. Team still selects best shot after drives, adding strategic complexity.",
        emoji: "🤠",
        category: "Team Formats"
    },
    {
        id: 23,
        title: "Best Ball (Four-Ball)",
        scenario: "How does Best Ball work in teams?",
        explanation: "Each player plays their own ball, and the best individual score on each hole counts as the team's score. Great for allowing weaker players to contribute.",
        emoji: "🏌️‍♂️",
        category: "Team Formats"
    },
    {
        id: 24,
        title: "Alternate Shot",
        scenario: "How does alternate shot format work?",
        explanation: "Two teammates take turns hitting the same ball. One tees off, the other hits next, alternating until holed. Team coordination is key.",
        emoji: "🔁",
        category: "Team Formats"
    },
    {
        id: 25,
        title: "Modified Alternate Shot",
        scenario: "What's the twist in modified alternate shot?",
        explanation: "Both players tee off, then select the best drive and alternate shots from there. Offers more strategy than traditional alternate shot.",
        emoji: "🧠",
        category: "Team Formats"
    },
    {
        id: 26,
        title: "Shamble",
        scenario: "What's a shamble format?",
        explanation: "Like a scramble off the tee, then everyone plays their own ball from the selected drive. Best individual score counts for the team.",
        emoji: "🧩",
        category: "Team Formats"
    },
    {
        id: 27,
        title: "Pinehurst (Chapman)",
        scenario: "How do you play Pinehurst format?",
        explanation: "Both teammates tee off, then play their partner's ball. The best result is selected, and alternate shot continues from there.",
        emoji: "🌲",
        category: "Team Formats"
    },
    {
        id: 28,
        title: "Aggregate Score",
        scenario: "What is aggregate team scoring?",
        explanation: "Both teammates play their own balls the entire round, and both scores are added together for the team's score on each hole.",
        emoji: "➕",
        category: "Team Formats"
    },
    {
        id: 29,
        title: "Scotch Foursomes",
        scenario: "How is Scotch Foursomes different from regular alternate shot?",
        explanation: "Players alternate shots and alternate tee shots (e.g., one player tees off on odd holes, the other on even holes). Adds complexity.",
        emoji: "🥃",
        category: "Team Formats"
    },
    {
        id: 30,
        title: "Las Vegas",
        scenario: "What is the Las Vegas team format?",
        explanation: "Two players create a team score by combining digits of their individual scores (e.g., a 4 and 5 becomes 45). Lowest team \"number\" wins the hole.",
        emoji: "🎲",
        category: "Team Formats"
    },
    {
        id: 31,
        title: "Ryder Cup Style",
        scenario: "What does Ryder Cup style mean?",
        explanation: "Combines different formats (Four-Ball, Foursomes, Singles) over multiple matches. Great for team events and match play variety.",
        emoji: "🇺🇸",
        category: "Team Formats"
    },
    {
        id: 32,
        title: "Lone Ranger",
        scenario: "How does Lone Ranger work in a group?",
        explanation: "One team member is the \"lone ranger\" each hole, and their score must count along with the best of the other players. Rotates each hole.",
        emoji: "🤠",
        category: "Team Formats"
    },
    {
        id: 33,
        title: "Two-Man Scramble",
        scenario: "Is there a scramble format for two players?",
        explanation: "Yes. Both players tee off, select the best shot, and continue together until the ball is holed. Perfect for casual partner games.",
        emoji: "👬",
        category: "Team Formats"
    },
    {
        id: 34,
        title: "Cha-Cha-Cha Format",
        scenario: "What's the Cha-Cha-Cha golf format?",
        explanation: "A rotating scoring system: 1 best ball on hole 1, 2 on hole 2, 3 on hole 3, then repeat. Adds rhythm and challenge to the game.",
        emoji: "💃",
        category: "Team Formats"
    },
    {
        id: 35,
        title: "Step Aside Scramble",
        scenario: "What is Step Aside Scramble?",
        explanation: "In this variation, the player whose shot is selected must skip the next shot. Encourages full team participation.",
        emoji: "🚶",
        category: "Team Formats"
    },
    {
        id: 36,
        title: "Pink Ball Format",
        scenario: "What is the Pink Ball team game?",
        explanation: "One team member rotates using a special \"pink ball\" each hole. That player's score must count. If the pink ball is lost, the team is out!",
        emoji: "🎀",
        category: "Team Formats"
    },
    {
        id: 37,
        title: "Four-Man Rotation",
        scenario: "How does a four-man rotation format work?",
        explanation: "Teammates rotate roles each hole (e.g., designated scorer, long driver). Encourages different contributions and fair play.",
        emoji: "🔄",
        category: "Team Formats"
    },
    // Betting Games
    {
        id: 32,
        title: "Nassau",
        scenario: "What is a Nassau bet?",
        explanation: "A Nassau is three separate bets: front nine, back nine, and overall 18 holes. Each bet is typically for the same amount.",
        emoji: "💰",
        category: "Betting Games",
        details: {
            "How to Play": "Three separate bets: front nine, back nine, and overall 18 holes. Each bet is typically for the same amount.",
            "Scoring": "Each nine holes and the total 18 are separate matches. You can win, lose, or push each bet independently.",
            "Press Options": [
                "Automatic Press: Automatically starts a new bet if you're down by 2 or more",
                "Manual Press: Players can agree to press the bet during the round",
                "Double Press: Pressing both the front and back nine simultaneously"
            ],
            "Common Variations": [
                "2-1-1: Double the bet on the front nine",
                "3-2-1: Triple the front, double the back, single the total",
                "Chicago: Points system where each hole is worth a different number of points"
            ]
        }
    },
    {
        id: 33,
        title: "Skins",
        scenario: "How do skins games work?",
        explanation: "Each hole is worth a set amount (the 'skin'). If you win the hole outright, you win the skin. If tied, the skin carries over to the next hole.",
        emoji: "🎯",
        category: "Betting Games",
        details: {
            "Basic Rules": "Each hole is worth a set amount. Win the hole outright to win the skin. Ties carry over to the next hole.",
            "Scoring": [
                "Lowest score on the hole wins the skin",
                "If tied, the skin carries over to the next hole",
                "Multiple carryovers can create large pots"
            ],
            "Variations": [
                "No Carryover: Split the skin if tied",
                "Progressive Skins: Each hole's value increases",
                "Team Skins: Played with teams instead of individuals"
            ],
            "Strategy Tips": [
                "Aggressive play can be rewarded on carryover holes",
                "Consider the pot size when deciding on risk",
                "Team skins require coordination on shot selection"
            ]
        }
    },
    {
        id: 34,
        title: "Match Play",
        scenario: "What are the basics of match play betting?",
        explanation: "Players compete hole by hole, with each hole worth one point. The player with the most holes won at the end wins the match.",
        emoji: "🎮",
        category: "Betting Games",
        details: {
            "Basic Rules": "Each hole is worth one point. Lowest score on the hole wins the point. Most points at the end wins.",
            "Scoring Terms": [
                "1 Up: Leading by one hole",
                "2 & 1: Win by 2 holes with 1 hole remaining",
                "Dormie: Leading by the same number of holes remaining"
            ],
            "Common Side Bets": [
                "First to Win a Hole",
                "Most Birdies",
                "Longest Drive",
                "Closest to Pin"
            ],
            "Strategy": [
                "Match play is about winning holes, not total score",
                "Aggressive play can be rewarded",
                "Conceding putts is common and strategic"
            ]
        }
    },
    {
        id: 35,
        title: "Stableford",
        scenario: "How does Stableford scoring work for betting?",
        explanation: "Points are awarded based on your score relative to par. The player with the most points at the end wins.",
        emoji: "📊",
        category: "Betting Games",
        details: {
            "Scoring System": [
                "Double Eagle: 5 points",
                "Eagle: 4 points",
                "Birdie: 3 points",
                "Par: 2 points",
                "Bogey: 1 point",
                "Double Bogey or worse: 0 points"
            ],
            "Betting Options": [
                "Total Points: Bet on total points for the round",
                "Hole by Hole: Bet on points for each hole",
                "Team Stableford: Combine points for team total"
            ],
            "Handicap Adjustments": "Handicaps can be used to level the playing field. Each player gets extra points based on their handicap.",
            "Strategy": [
                "Focus on making pars and birdies",
                "Avoid big numbers as they're worth 0 points",
                "Consider course difficulty when setting point values"
            ]
        }
    },
    {
        id: 36,
        title: "Bingo Bango Bongo",
        scenario: "What is Bingo Bango Bongo?",
        explanation: "Three points are awarded on each hole: first to reach the green, closest to the pin, and first to hole out.",
        emoji: "🎲",
        category: "Betting Games",
        details: {
            "Point System": [
                "Bingo: First player to reach the green",
                "Bango: Closest to the pin once all balls are on the green",
                "Bongo: First player to hole out"
            ],
            "Scoring": "Each point is worth the same amount. Players can win multiple points on the same hole.",
            "Strategy Tips": [
                "Bingo: Focus on getting to the green quickly",
                "Bango: Accuracy is key for approach shots",
                "Bongo: Putting speed and line are crucial"
            ],
            "Variations": [
                "Team Format: Points can be combined for team total",
                "Progressive Points: Points increase in value as the round progresses",
                "Bonus Points: Extra points for birdies or eagles"
            ]
        }
    },
    {
        id: 37,
        title: "Wolf",
        scenario: "How do you play Wolf?",
        explanation: "Players take turns being the 'Wolf' and can choose to play alone or partner with another player on each hole.",
        emoji: "🐺",
        category: "Betting Games",
        details: {
            "Basic Rules": [
                "Players rotate being the Wolf",
                "Wolf can choose to play alone or partner with another player",
                "Highest score on the hole wins the points"
            ],
            "Scoring": [
                "Wolf playing alone: 4 points for win, -4 for loss",
                "Wolf with partner: 2 points each for win, -2 each for loss",
                "Other players: 1 point each for win, -1 each for loss"
            ],
            "Strategy": [
                "Choose partners based on their tee shot",
                "Consider course layout when deciding to play alone",
                "Watch for patterns in other players' games"
            ],
            "Variations": [
                "Blind Wolf: Must choose partner before seeing their shot",
                "Lone Wolf: Can only play alone",
                "Double Points: On certain holes"
            ]
        }
    },
    {
        id: 38,
        title: "Vegas",
        scenario: "What is the Vegas scoring system?",
        explanation: "Two players combine their scores to create a two-digit number. The lowest number wins the hole.",
        emoji: "🎰",
        category: "Betting Games",
        details: {
            "Scoring System": [
                "Combine two scores to make a two-digit number",
                "Example: 4 and 5 becomes 45",
                "Lower number wins the hole"
            ],
            "Special Rules": [
                "If both players make the same score, it's a tie",
                "If one player makes a much higher score, it can create a large number",
                "Some groups play that 1-0 beats 0-1"
            ],
            "Betting Options": [
                "Hole by Hole: Bet on each hole",
                "Total Score: Bet on the final combined score",
                "Team Format: Combine scores for team total"
            ],
            "Strategy": [
                "Focus on making pars and birdies",
                "Avoid big numbers as they can create large combined scores",
                "Consider your partner's typical scoring when choosing teams"
            ]
        }
    },
    {
        id: 39,
        title: "Skins with Carryovers",
        scenario: "How do carryovers work in skins?",
        explanation: "When holes are tied, the skin value carries over to the next hole, creating larger pots for subsequent holes.",
        emoji: "🔄",
        category: "Betting Games",
        details: {
            "Carryover Rules": [
                "Tied holes carry over to the next hole",
                "Multiple ties can create large carryover pots",
                "Some groups cap the maximum carryover"
            ],
            "Scoring Options": [
                "Standard: Each hole worth the same amount",
                "Progressive: Each hole's value increases",
                "Front/Back: Separate carryovers for each nine"
            ],
            "Strategy": [
                "Aggressive play can be rewarded on carryover holes",
                "Consider the pot size when deciding on risk",
                "Watch for patterns in other players' games"
            ],
            "Variations": [
                "No Carryover: Split the skin if tied",
                "Team Skins: Played with teams instead of individuals",
                "Progressive Skins: Each hole's value increases"
            ]
        }
    },
    {
        id: 40,
        title: "Sixes",
        scenario: "How do you play and bet on Sixes?",
        explanation: "Round divided into six 3-hole matches. Bet $2-$5 per match. Can press after first hole if down. Optional: Add automatic presses every 2 holes down. Most matches won takes the pot.",
        emoji: "🎯",
        category: "Betting Games",
        bettingRules: {
            matches: "6 three-hole matches",
            defaultBet: "$2-$5 per match",
            presses: "Optional when down",
            autoPress: "Optional every 2 down"
        }
    },
    {
        id: 41,
        title: "Snake",
        scenario: "How do you play and bet on Snake?",
        explanation: "First player to three-putt gets the snake. Each subsequent three-putt passes the snake. Snake holder at the end pays $5-$10 to the pot. Optional: Add $1 per three-putt to the pot.",
        emoji: "🐍",
        category: "Betting Games",
        bettingRules: {
            defaultBet: "$5-$10 for snake holder",
            threePutt: "$1 per (optional)",
            payout: "Pot to non-snake players"
        }
    },
    {
        id: 42,
        title: "Rabbit",
        scenario: "How do you play and bet on Rabbit?",
        explanation: "First player to win a hole outright gets the rabbit. If tied, rabbit carries over. Rabbit holder at the end wins $5-$10 from each player. Optional: Add $1 per hole to the pot.",
        emoji: "🐰",
        category: "Betting Games",
        bettingRules: {
            defaultBet: "$5-$10 per player",
            perHole: "$1 (optional)",
            carryover: "Yes, when hole is tied",
            payout: "Rabbit holder takes all"
        }
    },
    {
        id: 43,
        title: "Arnold Palmer",
        scenario: "How do you play and bet on Arnold Palmer?",
        explanation: "Combines Skins, Greenies, and Sandies. Greenies: $2-$5 for closest to pin on par 3s. Sandies: $2-$5 for up and down from sand. Skins: $2-$5 per hole. Most points wins the pot.",
        emoji: "🏌️‍♂️",
        category: "Betting Games",
        bettingRules: {
            greenies: "$2-$5 per par 3",
            sandies: "$2-$5 per up/down",
            skins: "$2-$5 per hole",
            payout: "Winner takes all"
        }
    },
    {
        id: 44,
        title: "Quota",
        scenario: "How do you play and bet on Quota?",
        explanation: "Each player gets a quota based on handicap (e.g., 36 - handicap). Earn points: Eagle (4), Birdie (3), Par (2), Bogey (1). Bet $1-$5 per point over/under quota. Most points wins the pot.",
        emoji: "📊",
        category: "Betting Games",
        bettingRules: {
            quota: "36 - handicap",
            points: "Eagle(4), Birdie(3), Par(2), Bogey(1)",
            defaultBet: "$1-$5 per point",
            payout: "Winner takes all"
        }
    }
];

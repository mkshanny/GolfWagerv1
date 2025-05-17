const golfRules = [
    {
        id: 1,
        title: "Provisional Ball",
        scenario: "When can you hit a provisional ball?",
        explanation: "If you think your ball might be lost or out of bounds, you can hit a provisional ball before searching. Announce 'provisional ball' before hitting. This saves time and prevents having to return to the original spot.",
        emoji: "🏌️‍♀️",
        category: "Basics"
    },
    {
        id: 2,
        title: "Mulligans in Casual Play",
        scenario: "Are mulligans allowed in our friendly round?",
        explanation: "Mulligans are not official golf rules but are often used in friendly games. Typically, each player gets 1-2 free do-over shots per round. Always agree on mulligan rules before starting.",
        emoji: "🤝",
        category: "Friendly Play"
    },
    {
        id: 3,
        title: "Lost Ball Rule",
        scenario: "What happens if my ball goes missing on the course?",
        explanation: "If a ball is lost, take a one-stroke penalty and replay from the previous spot. You have 3 minutes to search for the ball. If not found, you must take a stroke-and-distance penalty.",
        emoji: "🕵️",
        category: "Basics"
    },
    {
        id: 4,
        title: "Ball Drops and Relief",
        scenario: "How do I take a drop when my ball is in a bad spot?",
        explanation: "When taking relief, drop the ball from knee height directly below the point of relief. The ball must come to rest within one club length, not nearer to the hole. Different rules apply for free drops versus penalty drops.",
        emoji: "📏",
        category: "Basics"
    },
    {
        id: 5,
        title: "Out of Bounds",
        scenario: "What happens if I hit my ball out of bounds?",
        explanation: "If your ball goes out of bounds, you must replay from the original spot with a one-stroke penalty. This means you're effectively hitting your third shot after the out of bounds hit.",
        emoji: "🚧",
        category: "Basics"
    },
    {
        id: 10,
        title: "Scramble Scoring Basics",
        scenario: "How does a scramble tournament work?",
        explanation: "In a scramble, all team members hit from the best previous shot. The team selects the best ball location after each shot until the ball is holed. This format encourages teamwork and is great for charity events.",
        emoji: "🏆",
        category: "Team Formats"
    },
    {
        id: 20,
        title: "Match Play Concession",
        scenario: "Can you concede a putt in match play?",
        explanation: "In match play, players can concede a putt if the next shot is considered a 'gimme'. The opponent can accept or decline the concession. This is a courtesy that speeds up play and shows sportsmanship.",
        emoji: "🤝",
        category: "Betting Games"
    },
    {
        id: 30,
        title: "Nassau Game Strategy",
        scenario: "What's a Nassau and how do we bet on it?",
        explanation: "Nassau is a match play betting game with three separate bets: front 9, back 9, and overall 18 holes. Typically, each 'match' is worth a set amount of money. Adds excitement to a friendly round.",
        emoji: "💰",
        category: "Betting Games"
    },
    {
        id: 31,
        title: "Skins Game Rules",
        scenario: "How do we play a Skins game?",
        explanation: "Each hole is worth a 'skin'. The player with the lowest score on a hole wins that skin. If there's a tie, the skin carries over to the next hole, increasing its value. Great for adding competitive edge.",
        emoji: "🏆",
        category: "Betting Games"
    },
    {
        id: 32,
        title: "Texas Scramble Twist",
        scenario: "What makes Texas Scramble different?",
        explanation: "In Texas Scramble, each player must use their own ball for a certain number of drives during the round. Team still selects best shot after drives, adding strategic complexity.",
        emoji: "🤠",
        category: "Team Formats"
    },
    {
        id: 33,
        title: "Wolf Game Strategy",
        scenario: "How do we play the Wolf golf betting game?",
        explanation: "One player is the 'Wolf' each hole. Wolf chooses to play alone against others or partner with someone after seeing their tee shots. Scoring is based on hole wins, adding unpredictability.",
        emoji: "🐺",
        category: "Betting Games"
    },
    {
        id: 34,
        title: "Bingo Bango Bongo Points",
        scenario: "What are the points in Bingo Bango Bongo?",
        explanation: "Three points per hole: Bingo (first on green), Bango (closest to pin when all balls on green), Bongo (first to hole out). Rewards different golf skills beyond just low score.",
        emoji: "🎯",
        category: "Betting Games"
    },
    {
        id: 35,
        title: "High-Low Partner Game",
        scenario: "How do we play High-Low?",
        explanation: "Partners compete by comparing their individual scores. Lowest and highest scores on each hole win points. Adds excitement and strategy to standard play.",
        emoji: "📈",
        category: "Betting Games"
    }
];
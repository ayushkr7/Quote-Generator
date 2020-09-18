var rand_btn  = document.getElementById("rand-btn");
const quote = document.getElementById("quote");

rand_btn.addEventListener("click",function(){
   let text = quotes[getRandomNumber()];
   quote.textContent = text;
});

function getRandomNumber(){
  return Math.floor(Math.random()*(quotes.length-1));
}






var quotes = ["The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do. -  Marcus Aurelius",
 "The whole future lies in uncertainty: live immediately. Seneca",
 "A gem cannot be polished without friction, nor a man perfected without trials. Seneca",
 "The willing are led by fate, the reluctant dragged. Cleanthes",
 "The more you seek the uncomfortable, the more you will become comfortable. Conor McGregor",
 "Learning never exhausts the mind.Leonardo da Vinci",
 "No act of kindness, no matter how small, is ever wasted. Aesop",
 "Honesty is the first chapter in the book of wisdom. Thomas Jefferson",
 "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. Marcus Aurelius",
 "The World is my country, all mankind are my brethren, and to do good is my religion. Thomas Paine",
 "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them. John F. Kennedy",
 "In three words I can sum up everything I've learned about life: it goes on. Robert Frost",
 "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Buddha",
 "I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail. Muriel Strode",
 "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. SteveJobs",
 "Whoever is happy will make others happy too. -Anne Frank",
 "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
 "I have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks",
 "I alone cannot change the world, but I can cast a stone across the water to create many ripples. -Mother Teresa",
 "You miss 100% of the shots you don't take. -Wayne Gretzky",
 "It does not matter how slowly you go as long as you do not stop. -Confucius",
 "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -Henry Ford",
 "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle",
 "Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
 "If you are not willing to risk the usual you will have to settle for the ordinary. -Jim Rohn",
 "The starting point of all achievement is desire. -Napoleon Hill",
 "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work. -Thomas J. Watson",
 "There is no traffic jam along the extra mile. -Roger Staubach",
 "You've got to get up every morning with determination if you're going to go to bed with satisfaction. -George Lorimer",
 "There is nothing impossible to they who will try. — Alexander the Great",
 "In a gentle way, you can shake the world. — Mahatma Gandhi",
 "Ask, and it shall be given you; seek, and you shall find.  -The Bible",
 "DEATH. TAXES. CODING.",
 "What doesn't kill us makes us stronger. -Friedrich Nietzsche",
 "To thine own self, be true. -William Shakespeare",
 "Those who dare to fail miserably can achieve greatly. – John F. Kennedy",
 "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. – Harriet Tubman",
 "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
 "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense. – Thomas A. Edison",
 "Life is like a box of chocolates. You never know what you’re going to get. – Forrest Gump",
 "We are what we repeatedly do; excellence, then, is not an act but a habit. – Aristotle",
 "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will. – George Bernard Shaw",
 "The goal of education is the advancement of knowledge and the dissemination of truth.  -John F. Kennedy",
 "Every accomplishment starts with the decision to try.  -John F. Kennedy",
 "If I am walking with two other men, each of them will serve as my teacher. I will pick out the good points of the one and imitate them, and the bad points of the other and correct them in myself.   - Confucius",
 "Learn as though you would never be able to master it; hold it as though you would be in fear of losing it.  -Confucius",
 "Do not be desirous of having things done quickly. Do not look at small advantages. Desire to have things done quickly prevents their being done thoroughly. -Confucius",
 "To see what is right, and not to do it, is want of courage or of principle.   -Confucius",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 
 "Quotes End"];


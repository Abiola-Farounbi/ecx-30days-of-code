var quotes=[
    "Friendship is Love without his wings!",
    "A short saying often contains much wisdom",
    "Wisdom is a kind of knowledge. It is knowledge of the nature, career, and consequences of human values.",
    "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness, and Common sense.",
    "If you are bitter, you are like a dry leaf that you can just squash, and you can get blown away by the wind. There is much more wisdom in forgiveness.",
    "Applause is a receipt, not a bill.",
    "The greatest obstacle to being heroic is the doubt whether one may not be going to prove one's self a fool; the truest heroism is to resist the doubt; and the profoundest wisdom, to know when it ought to be resisted, and when it be obeyed.",
    "The eye sees only what the mind is prepared to comprehend.",
    "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    "Can you imagine what I would do if I could do all I can?",
    "Knowledge speaks, but wisdom listens.",
    "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.",
    "Whatever happens, take responsibility.",
    "Kind words do not cost much. Yet they accomplish much.",
    "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    "Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.",
    "Who looks outside, dreams; who looks inside, awakes.",
    "By believing passionately in something that does not yet exist, we create it.",
    "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    "Science and technology revolutionize our lives, but memory, tradition and myth frame our response."








]
var authors=[
    "Lord Byron",
    "Sophocles",
     "Sidney Hook",
     "Thomas Edison",
     "Vusi Mahlasela",
     "Dale Carnegie",
     "Nathaniel Hawthorne",
     "Henri Bergson",
     "Bruce Lee",
     "Sun Tzu",
     "Jimi Hendrix",
     "Saint Basil",
     "Tony Robbins",
     "Blaise Pascal",
     "Naguib Mahfouz",
     "Don Miguel Ruiz",
     "Carl Jung",
     "Nikos Kazantzakis",
     "Archimedes",
     "Arthur M. Schlesinger"

     
]

setInterval(getQuotes , 30000)
var tweets=document.querySelector('.tweet')
var author1=document.getElementById('author')
var quote1=document.getElementById('word');
function getQuotes(){
    var i = Math.floor((Math.random() * 20) );

    var quote=quotes[i];
    var author=authors[i];
    quote1.innerHTML=` "${quote}"`;
    author1.innerHTML=`---${author}` ;
    tweets.setAttribute('href','https://twitter.com/home/?status='+quote+ "" + author );

}


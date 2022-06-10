
var QUOTESTORE = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    }, {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }, {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    }, {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }, {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    }, {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    }, {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    }, {
        quote: "Money and success don't change people; they merely amplify what is already there.",
        author: "Will Smith"
    }, {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    }, {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
]
window.onload = func_name;
function func_name() {
    gen_quo()
};
function gen_quo() {
    let leng = QUOTESTORE.length;
    let randomIndex = Math.floor(Math.random() * leng)
    let indi = QUOTESTORE[randomIndex];

    let quotformat = indi.quote.replace(" ", "%20");
    let authformat = indi.author;
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=DristantaSilwalQuotes%20%40DristantaSilwal%20%20";
    twitterLink += quotformat + "%20%20";
    twitterLink += " - " + authformat;

    document.getElementById("tweet-quote").href = twitterLink
    document.getElementById("text").innerText = indi.quote;
    document.getElementById("author").innerText = " - " + indi.author;
}

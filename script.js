function generate() {
    var quotes = {
        "- deepak chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
        "- oscar wild" : '“Be yourself; everyone else is already taken.”',
        "- mahatma gandhi" : 'Be the change that you wish to see in the world'
    }

    var authors = Object.keys(quotes);

    console.log(authors);

    var author = authors[Math.floor(Math.random()*
        authors.length) ];

    var quote = quotes[author]

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
$(document).ready(function(){


    const quotes = [
        "“God is in the details.”  – Mies van der Rohe",
        "“Simplicity is the ultimate sophistication.” – Leonardo da Vinci",
        "“Less is more.”  – Mies van der Rohe",
        "“Architecture should speak of its time and place, but yearn for timelessness.”  – Frank Gehry"
    ];


    setQuote = () => {

        let ranQuote = getRandomQuote();


        $("#quoteDisplay").append(ranQuote);
        $("#quoteDisplay").fadeIn(3000);

        console.log(`added quote ${ranQuote}`);
    }

    getRandomQuote = () => {
        let choiceInt = Math.floor(Math.random() * quotes.length);

        return quotes[choiceInt];
    }

    setQuote();


});
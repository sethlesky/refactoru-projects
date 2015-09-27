angular.module('quoteApp').factory('quoteFactory', function(){
	var quoteList = [
		{name: "Bob Smith", quote: "lots of random stuff here dawg", stars: 0},
		{name: "Sally Mae", quote: "Lalalalalalala thats my quote", stars: 3}
	];
    return {
        addQuote: function(name, quote){
            console.log(name, quote);
            quoteList.push({name: name, quote: quote, stars: 0});
        },
        quotes: quoteList
    }
})
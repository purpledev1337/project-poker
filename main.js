var poker = new Vue({
    el: "#root",
    data: {
        // gameInProgress: 0,
        // userCash: 1000,
        // comCash: 1000,
        // userBet: 100,
        userCards: [],
        comCards: [],
        chosenCards: [],
        newUserCards: [],
        tempHand: [],
        cardsOfSameValue: [],
        composingStraight: [],
        highCard: 2,
        finalResult: '',
        deck: [
            {
                value: 1,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 2,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 3,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 4,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 5,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 6,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 7,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 8,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 9,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 10,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 11,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 12,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 13,
                suit: 'h',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 1,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/la.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 2,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 3,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 4,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 5,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 6,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 7,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 8,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 9,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 10,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 11,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 12,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 13,
                suit: 'd',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 1,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 2,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 3,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 4,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 5,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 6,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 7,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 8,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 9,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 10,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 11,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 12,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 13,
                suit: 'c',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 1,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 2,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 3,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 4,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 5,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 6,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 7,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 8,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 9,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 10,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 11,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 12,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png?ezimgfmt=ng:webp/ngcb13'
            },
            {
                value: 13,
                suit: 's',
                url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png?ezimgfmt=ng:webp/ngcb13'
            }
        ]
    },
    // computed: {
    //     firstUserCard() {

    //         return this.userCards[0];
    //     },
    //     secondUserCard() {

    //         return this.userCards[1];
    //     },
    //     thirdUserCard() {

    //         return this.userCards[2];
    //     },
    //     fourthUserCard() {

    //         return this.userCards[3];
    //     },
    //     fifthUserCard() {

    //         return this.userCards[4];
    //     },
    // },
    methods: {
        giveCards: function() {
            var snd = new Audio("http://purpledev1337.online/poker/sounds/shuffle_cards.wav");

            for (let i = 0; i < 5; i++) {
            // every iteration generate 2 random numbers representing the drawn card's actual position in the deck

                randomNumber = Math.floor(Math.random() * this.deck.length);

                // pushing the extracted card in player's hand
                this.userCards.push(this.deck[randomNumber]);

                // removing the extracted card from the deck
                this.deck.splice(randomNumber, 1);

                // give cards to computer
                randomNumber2 = Math.floor(Math.random() * this.deck.length);

                this.comCards.push(this.deck[randomNumber2]);

                this.deck.splice(randomNumber2, 1);
            }
            snd.play();
            console.log(this.firstUserCard.value);
        },
        // every click toggle the presence of the item in the new array (chosenCards)
        chooseCard: function(card) {

            cardKey = card.currentTarget.getAttribute('mykey');

            if (this.chosenCards.indexOf(cardKey) === -1) {
                var snd = new Audio("http://purpledev1337.online/poker/sounds/card-select.wav");
                snd.play();
                this.chosenCards.push(cardKey);
            } else {

                this.chosenCards.splice(this.chosenCards.indexOf(cardKey), 1);
            }

        },
        changeCards: function() {
            var snd = new Audio("http://purpledev1337.online/poker/sounds/card_flip.wav");
            snd.play();

            // pushing the chosen cards picking them from original array (position in hand = chosenCards key number)
            for (let i = 0; i < this.chosenCards.length; i++) {

                this.newUserCards.push(this.userCards[this.chosenCards[i]])
            }

            // generating new cards (if need)
            for (let j = 0; this.newUserCards.length < 5; j++) {

                randomNumber = Math.floor(Math.random() * this.deck.length);
                this.newUserCards.push(this.deck[randomNumber]);
                this.deck.splice(randomNumber, 1);
            }
            
            this.calcResult();
            // this.newUserCards = [{
            //     value: 12,
            //     suit: 'h',
            //     url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png?ezimgfmt=ng:webp/ngcb13'
            // },
            // {
            //     value: 13,
            //     suit: 'h',
            //     url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png?ezimgfmt=ng:webp/ngcb13'
            // },
            // {
            //     value: 11,
            //     suit: 'h',
            //     url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png?ezimgfmt=ng:webp/ngcb13'
            // },
            // {
            //     value: 10,
            //     suit: 'h',
            //     url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png?ezimgfmt=ng:webp/ngcb13'
            // },
            // {
            //     value: 9,
            //     suit: 'h',
            //     url: 'https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png?ezimgfmt=ng:webp/ngcb13'
            // }]
        },
        calcResult: function() {

            this.calcHighCard(this.newUserCards);

            this.calcCouples(this.newUserCards);

            this.calcStraight();

            this.checkForFlush();



            if (this.cardsOfSameValue.length === 0) {

                if (this.checkForFlush()  & this.calcStraight() ) {

                    this.finalResult = "Unbelievable! a STRAIGHT FLUSH! High Card: " + this.highCard;
                } if (this.checkForFlush() & !this.calcStraight()) {

                    this.finalResult = "Wow.. Flush! High Card: " + this.highCard;
                } if (!this.checkForFlush() & this.calcStraight()) {

                    this.finalResult = "OMG a Straight! High Card: " + this.highCard;
                }
            }

        },
        calcHighCard: function(hand) {

            for (let i = 0; i < 5; i++) {

                if (this.highCard < hand[i].value & this.highCard !== 1) {
                    
                    this.highCard = hand[i].value;

                } else if (hand[i].value === 1) {

                    this.highCard = 1;
                }
            }
        },
        calcCouples: function(hand) {
            // var vict = new Audio("victory-1.wav");

            for (let i = 0; i < 5; i++) {

                this.tempHand = hand.slice();
                this.tempHand.splice(i, 1);

                for (let j = 0; j < 4; j++) {


                    if (hand[i].value === this.tempHand[j].value) {

                        if (this.cardsOfSameValue.indexOf(hand[i]) === -1) {

                            this.cardsOfSameValue.push(hand[i]);
                        }
                    }
                }
            }

            if (this.cardsOfSameValue.length === 5) {

                // vict.play();
                return this.finalResult = "full, high card: " + this.highCard;
            } if (this.cardsOfSameValue.length === 4 & !this.checkForPoker()) {

                // vict.play();
                return this.finalResult = "Double pair!";
            } if (this.cardsOfSameValue.length === 4 & this.checkForPoker()) {

                // vict.play();
                return this.finalResult = "!Poker of " + this.highCard + "!";
            } if (this.cardsOfSameValue.length === 3) {

                // vict.play();
                return this.finalResult = "Nice, tris!";
            } if (this.cardsOfSameValue.length === 2) {

                return this.finalResult = "A pair..";
            } else {
    
                return this.finalResult = "High card: " + this.highCard;
            }
        },
        checkForPoker: function() {

            if (this.cardsOfSameValue.length === 4) {
    
                if (this.cardsOfSameValue[0].value === this.cardsOfSameValue[1].value & this.cardsOfSameValue[1].value === this.cardsOfSameValue[2].value) {
    
                    return true;
                }
            }
        },
        checkForFlush: function() {

            for (let i = 0; i < 4; i++) {

                if (this.newUserCards[i].suit !== this.newUserCards[i + 1].suit) {

                    return false;
                }
            }

            return true;
        },
        calcStraight: function() {

            this.calcTwoFifth(this.newUserCards);
            this.calcThreeFifth();
            this.calcFourFifth();
            this.calcFiveFifth();

            if (this.composingStraight.length === 5) {

                return true;
            } else {

                return false;
            }
        },
        calcTwoFifth: function(hand) {

            this.tempHand = hand.slice();
            this.tempHand.splice(0, 1);
            
            focusCard = hand[0];

            if (focusCard.value === 1) {

                focusCard = hand[1];
            }
            
            // take the first card in the hand and confronts it to each in tempHand
            this.tempHand.forEach(card => {
                
                if (card.value !== 1 & focusCard.value !== 1 & this.composingStraight.length === 0){

                    if (card.value === focusCard.value + 1 | card.value === focusCard.value - 1) {

                        this.composingStraight.push(card);
                        this.composingStraight.push(focusCard);
                        this.tempHand.splice(this.tempHand.indexOf(card), 1);
                        console.log(focusCard.value, "and", card.value);
                        console.log("2 quinti scala", this.composingStraight);
                        return true;
                    }
                }
            });
        },
        calcThreeFifth: function() {

            if (this.composingStraight.length === 2) {

                this.tempHand.forEach(card => {
                
                    if (card.value !== this.composingStraight[0].value & card.value !== this.composingStraight[1].value) {
    
                        if (card.value !== 1 & card.value === this.composingStraight[0].value + 1 | card.value === this.composingStraight[0].value - 1 | card.value === this.composingStraight[1].value + 1 | card.value === this.composingStraight[1].value - 1) {
    
                                this.composingStraight.push(card);
                                this.tempHand.splice(this.tempHand.indexOf(card), 1);
                                console.log(card.value);
                                console.log("3 quinti scala", card.value, this.composingStraight);
                                return true;
                        }
                    }
                });
            }

        },
        calcFourFifth: function() {

            if (this.composingStraight.length === 3) {

                this.tempHand.forEach(card => {
                    
                    if (card.value !== this.composingStraight[0].value & card.value !== this.composingStraight[1].value & card.value !== this.composingStraight[2].value) {

                        if (card.value !== 1 & card.value === this.composingStraight[0].value + 1 | card.value === this.composingStraight[0].value - 1 | card.value === this.composingStraight[1].value + 1 | card.value === this.composingStraight[1].value - 1 | card.value === this.composingStraight[2].value + 1 | card.value === this.composingStraight[2].value - 1) {

                            this.composingStraight.push(card);
                            this.tempHand.splice(this.tempHand.indexOf(card), 1);
                            console.log(card.value);
                            console.log("4 quinti scala", card.value, this.composingStraight);
                            console.log(this.tempHand);
                            return true;
                        }
                    }
                });
            }
        },
        calcFiveFifth: function() {

            if (this.composingStraight.length === 4) {

                lastCard = this.tempHand[0];

                if (lastCard.value === 1) {

                    this.composingStraight.forEach(card => {
                        
                        if (card.value === 2 | card.value === 13) {

                            return true;
                        }
                    });
                } else if (lastCard.value !== this.composingStraight[0].value & lastCard.value !== this.composingStraight[1].value & lastCard.value !== this.composingStraight[2].value & lastCard.value !== this.composingStraight[3].value) {
                    
                        if (lastCard.value === this.composingStraight[0].value + 1 | lastCard.value === this.composingStraight[0].value - 1 | lastCard.value === this.composingStraight[1].value + 1 | lastCard.value === this.composingStraight[1].value - 1 | lastCard.value === this.composingStraight[2].value + 1 | lastCard.value === this.composingStraight[2].value - 1 | lastCard.value === this.composingStraight[3].value + 1 | lastCard.value === this.composingStraight[3].value - 1) {

                            this.composingStraight.push(lastCard);
                            console.log("5 quinti scala", lastCard.value, this.composingStraight);
                            return true;
                        }
                    }
            }
        }
    },

        //     const urlParams = new URLSearchParams(window.location.search);
        // const lang      = urlParams.get('lang');
        // let text        = 'Partita Finita';
        // translate       = data[lang];





        // 5:59
        // data = {
        //     "it": {
        //         "gameStart": "Partita iniziata",
        //         "gameOver": "Partita finita",
        //         "pair": "Coppia"
        //     },
        //     "en": {
        //         "gameStart": "Start game",
        //         "gameOver": "Game over",
        //         "pair": "A pair.."
        //     }
        // };
        // 6:00
        // <script type="text/javascript" src="translate.js"></script>
        
        // **********************************************************************
        // find 2 consecutive cards and push them (ignore the aces)
        // compare consecutive cards with other 3 to find another and push it
        // compare consecutive cards with other 2 to find another and push it
        // if the are 4 consecutive cards compare the last one (including aces now)
        // **********************************************************************
    created() {
        var snd = new Audio("http://purpledev1337.online/poker/sounds/bridging-cards.wav");
        snd.play();
        // this.giveCards();
        // this.changeCards();
        // this.calcResult()
    }
})
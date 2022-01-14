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
    methods: {
        giveCards: function() {

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

        },
        // every click toggle the presence of the item in the new array (chosenCards)
        chooseCard: function(card) {

            cardKey = card.currentTarget.getAttribute('mykey');

            if (this.chosenCards.indexOf(cardKey) === -1) {

                this.chosenCards.push(cardKey);
            } else {

                this.chosenCards.splice(this.chosenCards.indexOf(cardKey), 1);
            }

        },
        changeCards: function() {
        
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

        },
        calcResult: function() {
            
            this.calcHighCard(this.newUserCards);

            console.log("carta alta", this.highCard);

            this.calcCouples(this.newUserCards)

            console.log("finalResult: ", this.finalResult);

            console.log("composing straight", this.composingStraight);

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
            
            // if (this.calcStraight(this.newUserCards) & this.checkForFlush()) {

            //     return this.finalResult = "Unbelievable! a STRAIGHT FLUSH! High Card: " + this.highCard;
            // }
            // if (this.calcStraight(this.newUserCards) & !this.checkForFlush()) {

            //     return this.finalResult = "OMG a Straight! High Card: " + this.highCard;
            // }
            // if (this.checkForFlush() & !this.calcStraight(this.newUserCards)) {

            //     return this.finalResult = "Wow.. Flush! High Card: " + this.highCard;
            // }
            if (this.cardsOfSameValue.length === 5) {
                
                return this.finalResult = "full, high card: " + this.highCard;
            } if (this.cardsOfSameValue.length === 4 & !this.checkForPoker()) {
                
                return this.finalResult = "Double pair!";
            } if (this.checkForPoker()) {

                return this.finalResult = "!Poker of " + this.highCard + "!";
            } if (this.cardsOfSameValue.length === 3) {

                return this.finalResult = "Nice, tris!";
            } if (this.cardsOfSameValue.length === 2) {

                return this.finalResult = "A pair..";
            } else {

                return this.finalResult = "High card: " + this.highCard;
            }
        },
        checkForPoker: function() {

            if (this.cardsOfSameValue[0] !== this.cardsOfSameValue[1]) {

                return false;
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
        calcStraight: function(hand) {

            // **********************************************************************
            // find 2 consecutive cards and push them (ignore the aces)
            // compare consecutive cards with other 3 to find another and push it
            // compare consecutive cards with other 2 to find another and push it
            // if the are 4 consecutive cards compare the last one (including aces now)
            // **********************************************************************

            for (let i = 0; i < 5; i++) {

                this.tempHand = hand.slice();
                this.tempHand.splice(i, 1);

                for (let j = 0; j < 4; j++) {


                    if (hand[i].value === this.tempHand[j].value + 1 | hand[i].value === this.tempHand[j].value - 1) {

                        if (this.composingStraight.indexOf(hand[i]) === -1) {

                            this.composingStraight.push(hand[i]);
                        } if (this.composingStraight.indexOf(hand[j]) === -1) {

                            this.composingStraight.push(hand[j]);
                        }
                    }
                }
            }

            if (this.composingStraight.length === 5) {

                return true;
            }
        }
    },
    // created() {

    //     this.giveCards();
    //     this.changeCards();
    //     this.calcResult()
    // }
})
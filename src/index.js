"use strict";
class Football {
    constructor(winner, date, goal1, goal2) {
        this.winner = winner;
        this.goal1 = goal1;
        this.goal2 = goal2;
    }
    ;
    result() {
        console.log(this.toString());
    }
    toString() {
        if (this.goal1 > this.goal2) {
            return "Football match: " + this.goal1 + "-" + this.goal2;
        }
        else {
            return "Football match: " + this.goal2 + "-" + this.goal1;
        }
    }
}
class Marathon {
    constructor(winner, runtime) {
        this.winner = winner;
        this.runtime = runtime;
        this.runtimesec = Math.floor(this.runtime / 60);
    }
    ;
    result() {
        console.log(this.toString());
    }
    toString() {
        return " Marathon: " + this.runtimesec + " min " + (this.runtime - (this.runtimesec * 60)) + " s";
    }
}
;
class Calvinball {
    constructor() {
        this.calvhob = Math.floor(Math.random() * 2);
        if (this.calvhob == 0) {
            this.winner = "Calvin";
        }
        else {
            this.winner = "Hobbes";
        }
        this.pont = Math.floor(Math.random() * 91 + 10);
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.pont + " points";
    }
}

"use strict";
class Football {
    constructor(winner, goal1, goal2) {
        this.winner = winner;
        this.date = new Date(Date.now());
        this.goal1 = goal1;
        this.goal2 = goal2;
    }
    getwinner() { return this.winner; }
    setwinner(winner) { this.winner = winner; }
    getdate() { return this.date; }
    setdate(date) { this.date = date; }
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
        this.date = new Date(Date.now());
        this.runtime = runtime;
        this.runtimesec = Math.floor(this.runtime / 60);
    }
    ;
    getwinner() { return this.winner; }
    setwinner(winner) { this.winner = winner; }
    getdate() { return this.date; }
    setdate(date) { this.date = date; }
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
        this.date = new Date(Date.now());
        this.pont = Math.floor(Math.random() * 91 + 10);
    }
    getwinner() { return this.winner; }
    setwinner(winner) { this.winner = winner; }
    getdate() { return this.date; }
    setdate(date) { this.date = date; }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.pont + " points";
    }
}
let eredmenyek = [
    new Football('Csapat1', 6, 2),
    new Football('Csapat2', 3, 7),
    new Marathon('Bela', 300),
    new Marathon('Peter', 279),
    new Calvinball(),
    new Calvinball()
];
for (let eredmeny of eredmenyek) {
    eredmeny.result();
    eredmeny.getwinner();
}
;

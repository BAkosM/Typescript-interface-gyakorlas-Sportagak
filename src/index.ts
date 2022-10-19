interface Results{
    winner :string;
    date: Date;
    result():void;
    toString() :string;
    getwinner() :string;
    setwinner(winner :string) :void;
    getdate() :Date;
    setdate(date :Date) :void;
}

class Football implements Results{
    winner :string;
    date :Date;
    goal1 :number;
    goal2 :number;
    constructor(winner :string, goal1 :number, goal2 :number) {
        this.winner = winner;
        this.date = new Date(Date.now());
        this.goal1 = goal1;
        this.goal2 = goal2;
    }
    getwinner() :string { return this.winner; }
    setwinner(winner :string) :void { this.winner = winner; }
    getdate() :Date { return this.date; }
    setdate(date :Date) :void { this.date = date;}
    result():void{
        console.log(this.toString());
    }
    toString(): string {
        if(this.goal1>this.goal2){
        return "Football match: "+this.goal1+"-"+this.goal2;
        } else {
            return "Football match: "+this.goal2+"-"+this.goal1;
        }
    }
}

class Marathon implements Results{
    winner: string;
    date :Date;
    runtime :number;
    runtimesec :number;
    constructor(winner :string, runtime :number) {
        this.winner = winner;
        this.date = new Date(Date.now());
        this.runtime = runtime;
        this.runtimesec = Math.floor(this.runtime/60);
    };
    getwinner() :string { return this.winner; }
    setwinner(winner :string) :void { this.winner = winner; }
    getdate() :Date { return this.date; }
    setdate(date :Date) :void { this.date = date;}
    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return " Marathon: "+this.runtimesec+" min "+(this.runtime-(this.runtimesec*60))+" s";
    }

};

class Calvinball implements Results{
    winner: string;
    date :Date;
    calvhob :number;
    pont :number;
    constructor(){
        this.calvhob = Math.floor(Math.random() * 2);
        if(this.calvhob == 0){
            this.winner = "Calvin";
        } else {
            this.winner = "Hobbes";
        }
        this.date = new Date(Date.now());
        this.pont = Math.floor(Math.random() * 91 + 10);
    }
    getwinner() :string { return this.winner; }
    setwinner(winner :string) :void { this.winner = winner; }
    getdate() :Date { return this.date; }
    setdate(date :Date) :void { this.date = date;}
    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return "Calvinball: "+this.pont+" points";
    }
}

let eredmenyek: Results[] = [
    new Football('Csapat1', 6, 2),
    new Football('Csapat2', 3, 7),
    new Marathon('Bela', 300),
    new Marathon('Peter', 279),
    new Calvinball(),
    new Calvinball()
];

for (let eredmeny of eredmenyek){
    eredmeny.result();
    eredmeny.getwinner();
};
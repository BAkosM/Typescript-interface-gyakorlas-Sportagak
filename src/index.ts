interface Results{
    winner :string;
    //date: Date;
    result():void;
    toString() :string;
}

class Football implements Results{
    winner :string;
    //date: Date;
    goal1 :number;
    goal2 :number;
    constructor(winner :string, date:Date, goal1 :number, goal2 :number) {
        this.winner = winner;
        this.goal1 = goal1;
        this.goal2 = goal2;
    };
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
    runtime :number;
    runtimesec :number;
    constructor(winner :string, runtime :number) {
        this.winner = winner;
        this.runtime = runtime;
        this.runtimesec = Math.floor(this.runtime/60);
    };
    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return " Marathon: "+this.runtimesec+" min "+(this.runtime-(this.runtimesec*60))+" s";
    }

};

class Calvinball implements Results{
    winner: string;
    calvhob :number;
    pont :number;
    constructor(){
        this.calvhob = Math.floor(Math.random() * 2);
        if(this.calvhob == 0){
            this.winner = "Calvin";
        } else {
            this.winner = "Hobbes";
        }
        this.pont = Math.floor(Math.random() * 91 + 10);
    }
    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return "Calvinball: "+this.pont+" points";
    }
}

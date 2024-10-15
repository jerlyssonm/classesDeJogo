class gameChar{
    constructor(nome, idade, tipo){
        this.name = nome
        this.age = idade
        this.class = tipo
        if(tipo == "mago"){
            this.attack = "magia"
        }else if(tipo == "guerreiro"){
            this.attack = "espada"
        }else if(tipo == monge){
            this.attack = "artes marciais"
        }else{
            this.attack = "shuriken"
        }
    }

    attackEnemy(){
        switch (this.class){
            case "mago":
                console.log(`O ${this.class} atacou usando ${this.attack}`)
                break;
            case "guerreiro":
                console.log(`O ${this.class} atacou usando ${this.attack}`)
                break;
            case "monge":
                console.log(`O ${this.class} atacou usando ${this.attack}`)
                break;
            case "ninja":
                console.log(`O ${this.class} atacou usando ${this.attack}`)
                break;
        }
    }
}

let Magrote = new gameChar("Magrote", 25, "mago")

Magrote.attackEnemy()
console.log(Magrote)
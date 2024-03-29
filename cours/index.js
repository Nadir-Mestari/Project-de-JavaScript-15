

// let obj = {
//     nom: "nadir",
//     age: 21,
//     ville: "Paris",

//     ditwah: function () {

//         console.log("je suis le " + obj.age)

//     }


// }

// obj.nom = "mestari"
// obj["date"] = 29


// console.log(obj.ditwah())
// delete obj.age

// // for (const key in obj) {

// //     console.log(key + " : " + obj[key])

// // }
// const ty = [6, 98, 98, 9]

// const ob = {
//     nap: "lima",
//     fruit: "Fraise"

// }

// const cle = Object.keys(obj);
// // console.log(cle)

// const val = Object.values(obj)
// // console.log(val)

// const tablo = Object.entries(obj)
// // console.log(tablo)

// // concat = [...ty, ...tablo]
// const fus = [...ty, ...tablo]
// // console.log(fus)

// const o = Object.assign({}, obj, ob)
// // console.log(o)

// // const fres = Object.freeze(obj);
// const fres = Object.seal(obj);
// obj.na = "rtyu"
// obj.age = 23;
// console.log(fres)

// function Persona(name, age, ville) {
//     this.name = name
//     this.age = age
//     this.ville = ville

//     // this.getID = function () {
//     //     console.log(this.name + " a " + this.age + " ans")
//     // }
// }

// const user = new Persona("Jull", 21, "Paris")
// const user2 = new Persona("Risor", 71, "Paris")

// console.log(typeof Persona)

// function User(Pseudo, age, force) {
//     return {
//         Pseudo,
//         age,
//         force,

//     }

// }

// const playUser = User("Nadir", 21, "intéligence existenciels")
// console.log(typeof playUser)



// class force {
//     constructor(pouvoir, faiblaisse) {
//         this.pouvoir = pouvoir;
//         this.faiblaisse = faiblaisse;
//     }

//     badinjal = function () {
//         console.log("hy" + this.pouvoir)

//     }
// }


// const utilisation = new force("holopo", "machine de patate");

// force.prototype.sayCity = function () {
//     console.log("j'ai une " + this.faiblaisse)
// }

// Object.assign(force.prototype, {
//     methode() {

//     }

// })

// console.log(utilisation)


class Animalc {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    leson(text) {
        console.log(this.name + " a " + text)
    }
}

class chat extends Animalc {
    bouge() {
        console.log("le chat bouge")
    }
}

const fiofio = new chat("miawe", 2)
console.log(fiofio)
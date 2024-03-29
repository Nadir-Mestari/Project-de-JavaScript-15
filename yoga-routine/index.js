

const main = document.querySelector("main")

let exercices = [
    { pic: 0, min: 1 },
    { pic: 1, min: 1 },
    { pic: 2, min: 1 },
    { pic: 3, min: 1 },
    { pic: 4, min: 1 },
    { pic: 5, min: 1 },
    { pic: 6, min: 1 },
    { pic: 7, min: 1 },
    { pic: 8, min: 1 },
    { pic: 9, min: 1 },
];

class Physiqueexo { }

const utile = {
    page: function (title, content, btn) {
        document.querySelector("h1").innerHTML = title
        main.innerHTML = content
        document.querySelector(".btn-container").innerHTML = btn
    },

    eventnumber: function () {
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            input.addEventListener("input", (e) => {
                exercices.map((exo) => {
                    if (exo.pic == e.target.id) {
                        exo.min = parseInt(e.target.value)
                        console.log(exercices)
                    }
                })
            })
        })

    },

    arromove: function () {
        document.querySelectorAll(".arrow").forEach((arr) => {
            arr.addEventListener("click", (e) => {
                let pos = 0;
                exercices.map((exo) => {
                    if (exo.pic == e.target.dataset.pic) {

                        [exercices[0], exercices[1]] = [exercices[1], exercices[0]]
                        console.log(exercices)
                    } else {
                        pos++;

                    }
                })
            })
        })
    }


}

const parama = {
    lobby: function () {
        let arrayexo = exercices.map((exo) => {
            return `

<li>
<div class="card-header">
<input type="number"  id=${exo.pic} min="1" max="10" value=${exo.min}>
<span>min</span>
</div>
<img src="./img/${exo.pic}.png" alt"image de l'exo ${exo.pic}"/>
<i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic} ></i>
<i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
</li>

`
        })

        utile.page(
            "<h1>Paramétrage <i id='reboot' class='fas fa - undo'></i> </h1>",
            `<ul>${arrayexo}</ul>`,
            `<button id="start">Commencer <i class="far fa-play-circle"></i> </button>`);

        utile.eventnumber();
        utile.arromove();



    },

    routine: function () {
        utile.page("Routine", "Execices routines", null

        )
    },

    finish: function () {
        utile.page(
            "C'est terminé",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Rénitialiser <i class='fas fa-times-circle'></i> </button>"

        )

    },
}



parama.lobby()
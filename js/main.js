$.ajax("http://myjson.dit.upm.es/api/bins/6ui7", {
    success: function (res) {
        mass_1 = res
        let index_1 = 0
        res.forEach(element => {
            let card = `
            <div class="col-4">
            <div class="card case"  style="width: 18rem;">
            <div class="photoCard text-center p-4">
            <img src="${element.img}" class="photo" alt="${element.name}" >
            </div>
            <div class="first">
            <p>${element.name}</p>
            <p class="border">${element.cost + "$"}</p>
            </div>
            <button class="dav" onclick="qosh(${index_1})">Sotib olish</button>
            </div>
            
            </div>
            `
            $(".birinchi").append(card)
            index_1++
        });
    }
})


$.ajax("http://myjson.dit.upm.es/api/bins/2rwf", {
    success: function (res) {
        mass_2 = res
        let index_2 = 0
        res.forEach(element => {
            let card = `
            <div class="col-4">
            <div class="card case"  style="width: 18rem;">
            <div class="photoCard text-center p-4">
            <img src="${element.img}" class="photo" alt="${element.name}" >
            </div>
            <div class="first">
            <p>${element.name}</p>
            <p class="border">${element.cost + "$"}</p>
            </div>
            <button class="dav" onclick="qosh_2(${index_2})">Sotib olish</button>
            </div>
            
            </div>
            `
            $(".ikkinchi").append(card)
            index_2++
        });
    }
})


$.ajax("http://myjson.dit.upm.es/api/bins/bk9b", {
    success: function (res) {
        mass_3 = res
        let index_3 = 0
        res.forEach(element => {
            let card = `
            <div class="col-4">
            <div class="card case"  style="width: 18rem;">
            <div class="photoCard text-center p-4">
            <img src="${element.img}" class="photo" alt="${element.name}" >
            </div>
            <div class="first">
            <p>${element.name}</p>
            <p class="border">${element.cost + "$"}</p>
            </div>
            <button class="dav" onclick="qosh_3(${index_3})" >Sotib olish</button>
            </div>
            
            </div>
            `
            $(".uchinchi").append(card)
            index_3++
        });
    }
})

let savat = []
let mass_1 = []
let mass_2 = []
let mass_3 = []

function qosh(val) {
    let sanoq = 0
    let savat_index = 0
    for (let i = 0; i < savat.length; i++) {
        if (savat[i].cost == mass_1[val].cost && savat[i].name == mass_1[val].name) {
            sanoq++
            savat_index = i
        }
    }

    if (sanoq == 1) {
        savat[savat_index].miqdor = savat[savat_index].miqdor + 1
    } else if (sanoq == 0) {
        savat.push({
            img: mass_1[val].img,
            name: mass_1[val].name,
            cost: mass_1[val].cost,
            miqdor: 1
        })
        // notti()
    }
}

function qosh_2(val_2) {
    let sanoq = 0
    let savat_index = 0
    for (let i = 0; i < savat.length; i++) {
        if (savat[i].cost == mass_2[val_2].cost && savat[i].name == mass_2[val_2].name) {
            sanoq++
            savat_index = i
        }
    }

    if (sanoq == 1) {
        savat[savat_index].miqdor = savat[savat_index].miqdor + 1
    } else if (sanoq == 0) {
        savat.push({
            img: mass_2[val_2].img,
            name: mass_2[val_2].name,
            cost: mass_2[val_2].cost,
            miqdor: 1
        })
        // notti()
    }
    // val_2.preventDefault()
}

function qosh_3(val_3) {
    let sanoq = 0
    let savat_index = 0
    for (let i = 0; i < savat.length; i++) {
        if (savat[i].cost == mass_3[val_3].cost && savat[i].name == mass_3[val_3].name) {
            sanoq++
            savat_index = i
        }
    }
    if (sanoq == 1) {
        savat[savat_index].miqdor = savat[savat_index].miqdor + 1
    } else if (sanoq == 0) {
        savat.push({
            img: mass_3[val_3].img,
            name: mass_3[val_3].name,
            cost: mass_3[val_3].cost,
            miqdor: 1
        })
        // notti() 
    }
}

$(".myCard .menu").on("click", () => {
    $(".page_2").addClass("d-none")
    $(".page_1").removeClass("d-none")
})

$(".icon").on("click", () => {
    $(".page_1").addClass("d-none")
    $(".page_2").removeClass("d-none")

    filter()
})


function filter() {
    $(".page2").html("")

    let son_2 = 0
    let son = 0
    savat.forEach(box => {
        let card = `
        <div class="col-4">
        <div class="card">
        <div class="text-center"> <img src="${box.img}" alt="rasm bor"></div>
        <div>
          <h4>${box.cost * box.miqdor} $</h4>
           <h4>${box.name}</h4>
           <div class="d-flex"><button onclick="minus(${son})" class=" btn btn-dark rounded-0 tugmacha ">-</button><button class="btn border rounded-0 tugmacha"><h3>${box.miqdor}</h3></button><button onclick="plus(${son_2})" class=" tugmacha btn btn-dark rounded-0">+</button></div>
        </div>
        </div>
        </div>
        `
        son++
        son_2++
        $(".page2").append(card)
    })

    let hisob = 0

    savat.forEach(item => {
        hisob += Number(item.cost) * Number(item.miqdor)
    })

    $(".all_cost").html("")
    let p = `
      <h2 class="text-center fw-bold text-dark mt-3">ALL COST: ${hisob} $</h2>
      `
    $(".all_cost").append(p)
}


function minus(son) {
    if (savat[son].miqdor > 1) {
        savat[son].miqdor -= 1
        filter()
    } else {
        savat.splice(son, 1)
        filter()
        notti()
    }
}

function plus(son_2) {
    savat[son_2].miqdor += 1
    filter()
}



$(".day").on("click", () => {
    $(".page_1").toggleClass("bg-dark")
    $(".text").toggleClass("text-primary")
    $("p").toggleClass("text-primary")
    $(".card").toggleClass("bg-dark")
    $("button").toggleClass("text-primary")
    $(".card").toggleClass("border-light")
})













































// first()
// second()
// third()

// function SearchFun(){
//     let input = $("input").val(index)
//     console.log(input);
//     if (input.includes(index)) {

//     }

// }
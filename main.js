let grid = document.querySelector(".cell-container")


for (i = 1; i <= 100; i++) {
    let cell = document.createElement("div")
    cell.classList.add("cell")
    grid.appendChild(cell)
    if (i % 3 == 0) {
        cell.innerText = "Fizz"
        cell.classList.add("cell-green")
        console.log("Fizz")
    }

    else if (i % 5 == 0) {
        cell.innerText = "Buzz"
        cell.classList.add("cell-yellow")
        console.log("Buzz")
    }

    else {
        cell.innerText = i
        console.log(i)
        cell.classList.add("cell-blue")
    }

    if (i % 5 == 0 && i % 3 == 0) {
        cell.innerText = "FizzBuzz"
        cell.classList.add("cell-violet")
        console.log("FizzBuzz")
    }


}

console.log(10 % 5)
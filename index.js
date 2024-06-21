count = 0

function increment() {
    count = count + 1
    document.getElementById('count-el').textContent = count
    console.log(count)
}

function save() {
    document.getElementById('savedText').textContent += count + " - "
    document.getElementById('count-el').textContent = 0
    count = 0
}
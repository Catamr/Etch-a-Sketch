let celCount = 128

for (let i = 0; i < celCount/4; i++){
    const row = document.createElement("div");
    row.className = "row"
    row.id = ("row") + i
    document.getElementById('celContainer').appendChild(row);
    rows(row);
}

function rows(row) {
    for (let i = 0; i < celCount/4; i++){
        const cel = document.createElement("div");
        cel.className = "cel";
        row.appendChild(cel);
    }
}
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let plates = [];
colors.forEach(color => plates.push(color));

while (plates.length > 0) {
    console.log(plates.pop());
}



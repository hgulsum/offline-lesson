let a = [ ];
for (let b = 0; b < 5; b++) {
    let c = parseInt(prompt((b+1) + "-ci ededi daxil edin"));
    a.push(c);
}
let $a = Math.min(...a);
console.log("En kicik eded: " + $a);
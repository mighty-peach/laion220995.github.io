let startAngle = 0;
let angleVel = .23;

function setup() {
    createCanvas(1600, 400);
}


function draw() {
    background(0);

    translate(0, height / 2);
    startAngle += 0.015;
    let angle = startAngle;
    let angle1 = 50;
    let angle2 = 100;
    noStroke();
    fill(255, 80);

    for(let x = 0 ; x <= width; x += .5) {
        let y = sin(angle);
        let y1 = cos(angle1);
        let y2 = cos(angle2);
        y = map(y, -1, 1, -height / 3, height / 3);
        y1 = map(y1, -1, 1, -height / 6, height / 6);
        y2 = map(y2, -1, 1, -height / 12, height / 12);
        ellipse(x, y / y1 * y2, 2);
        angle += angleVel;
        angle1 += angleVel / 1.4;
        angle2 += angleVel * 1.2;
    }

}
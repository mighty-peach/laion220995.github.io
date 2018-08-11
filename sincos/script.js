let startAngle = 0;
let angleVel = .23;

function setup() {
    size = createSlider(.1, .5, .5, .01);
    size.position(20, 80);
    size.style('width', '80px');
    cof1 = createSlider(1, 1.4, 1, .01);
    cof1.position(20, 100);
    cof1.style('width', '80px');
    cof2 = createSlider(1, 1.2, 1, .01);
    cof2.position(20, 120);
    cof2.style('width', '80px');
    maxH1 = createSlider(1, 6, 3, .1);
    maxH1.position(20, 140);
    maxH1.style('width', '80px');
    maxH2 = createSlider(1, 8, 4, .1);
    maxH2.position(20, 160);
    maxH2.style('width', '80px');
    maxH3 = createSlider(1, 14, 7, .1);
    maxH3.position(20, 180);
    maxH3.style('width', '80px');

    createCanvas(1600, 400);
}


function draw() {
    background(0);
    fill(255, 90);

    text("Quantity of dots", size.x + size.width, 20);
    text("1st coefficient for cos", cof1.x + cof1.width, 40);
    text("2st coefficient for cos", cof2.x + cof2.width, 60);
    text("Max height for dots coefficient 1", maxH1.x + maxH1.width, 80);
    text("Max height for dots coefficient 2", maxH2.x + maxH2.width, 100);
    text("Max height for dots coefficient 3", maxH3.x + maxH3.width, 120);

    translate(0, height / 2);
    startAngle += 0.015;
    let angle = startAngle;
    let angle1 = 50;
    let angle2 = 100;
    noStroke();

    for(let x = 0 ; x <= width; x += size.value()) {
        let y = sin(angle);
        let y1 = cos(angle1);
        let y2 = cos(angle2);
        y = map(y, -1, 1, -height / maxH1.value(), height / maxH1.value());
        y1 = map(y1, -1, 1, -height / maxH2.value(), height / maxH2.value());
        y2 = map(y2, -1, 1, -height / maxH3.value(), height / maxH3.value());

        fill(random(180, 255), random(180, 255), random(180, 255), random(55, 75));
        ellipse(x, y / y1 * y2, 2);
        angle += angleVel;
        angle1 += angleVel / cof1.value();
        angle2 += angleVel * cof2.value();
    }

}
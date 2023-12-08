<template>
  <div class="px-2 py-12 text-center">
    <p class="mb-2 text-center text-3xl font-bold">Transportation Efficiency</p>
    <p class="text-center">
      This visualization shows the efficiency of different modes of
      transportation.
    </p>
    <p class="mt-4 text-3xl font-bold">Efficiency</p>
    <canvas id="canvas" class="mx-auto mt-4" width="800" height="400" />
    <BackButton />
  </div>
</template>

<script setup lang="ts">
let ctx: CanvasRenderingContext2D;
const cars: {
  x: number;
  y: number;
  people: { x: number; y_start: number; y: number }[];
}[] = [];
const bikes: { x: number; y: number }[] = [];
const trains: {
  x: number;
  y: number;
  people: { x: number; y_start: number; y: number }[];
}[] = [];
const walkers: { x: number; y: number }[] = [];

let carsCounted = 0;
let bikesCounted = 0;
let trainsCounted = 0;
let walkersCounted = 0;

const offSet = Math.floor(Math.random() * 200) + 50;

const carStartPositions = [] as { x: number; y: number }[];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    carStartPositions.push({
      x: 25 + 50 * j,
      y: 40 + 95 * i + (offSet * j) / 2,
    });
  }
}

const trainStartPositions = [] as { x: number; y: number }[];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    trainStartPositions.push({
      x: 425 + 100 * j,
      y: 40 + 180 * i + offSet * j,
    });
  }
}

function populate() {
  console.log(carStartPositions);
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      const randomIndex = Math.floor(Math.random() * carStartPositions.length);
      const startPosition = carStartPositions[randomIndex];
      carStartPositions.splice(randomIndex, 1);
      const car = {
        x: startPosition.x,
        y: startPosition.y,
        people: [] as { x: number; y_start: number; y: number }[],
      };
      car.people.push({
        x: car.x + 5,
        y_start: car.y + 55 - car.y + 40,
        y: car.y + 55,
      });
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          if (Math.random() < 0.95) {
            continue;
          }
          car.people.push({
            x: car.x + 15 * j + 10,
            y_start: car.y + 30 * k - car.y + 50,
            y: car.y + 30 * k + 50,
          });
        }
      }
      cars.push(car);
    }
    if (i < 50) {
      bikes.push({
        x: Math.random() * 190 + 205,
        y: Math.random() * 400,
      });
    }
    if (i < 2) {
      const randomIndex = Math.floor(
        Math.random() * trainStartPositions.length,
      );
      const startPosition = trainStartPositions[randomIndex];
      trainStartPositions.splice(randomIndex, 1);
      const train = {
        x: startPosition.x,
        y: startPosition.y,
        people: [] as { x: number; y_start: number; y: number }[],
      };
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 8; k++) {
          if (Math.random() < 0.5) {
            continue;
          }
          train.people.push({
            x: train.x + 10 * j,
            y_start: train.y + 20 * k - train.y + 40,
            y: train.y + 20 * k,
          });
        }
      }
      trains.push(train);
    }
    walkers.push({
      x: Math.random() * 190 + 605,
      y: Math.random() * 400,
    });
  }
}

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  populate();
  loop();
});

function setup() {
  ctx.strokeStyle = '#000000';
  ctx.font = '20px Inter';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(200 * i, 0);
    ctx.lineTo(200 * i, 400);
    ctx.stroke();
  }

  ctx.fillText('Cars', 80, 20);
  ctx.fillText(`People Moved: ${carsCounted}`, 5, 40);
  ctx.fillText('Bikes', 280, 20);
  ctx.fillText(`People Moved: ${bikesCounted}`, 205, 40);
  ctx.fillText('Trains', 480, 20);
  ctx.fillText(`People Moved: ${trainsCounted}`, 405, 40);
  ctx.fillText('Walking', 680, 20);
  ctx.fillText(`People Moved: ${walkersCounted}`, 605, 40);
}

function loop() {
  ctx.clearRect(0, 0, 800, 400);
  setup();
  for (let i = 0; i < cars.length; i++) {
    ctx.beginPath();
    ctx.rect(cars[i].x - 5, cars[i].y - 5, 40, 70);
    ctx.stroke();
    for (let j = 0; j < cars[i].people.length; j++) {
      ctx.beginPath();
      ctx.arc(cars[i].people[j].x, cars[i].people[j].y, 5, 0, 2 * Math.PI);
      ctx.stroke();
      cars[i].people[j].y += 3;
    }

    cars[i].y += 3;
    if (cars[i].y > 410) {
      cars[i].y = 40;
      for (let j = 0; j < cars[i].people.length; j++) {
        cars[i].people[j].y = cars[i].people[j].y_start;
      }
      carsCounted += cars[i].people.length;
    }
  }
  for (let i = 0; i < bikes.length; i++) {
    ctx.beginPath();
    ctx.arc(bikes[i].x, bikes[i].y, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath;
    ctx.moveTo(bikes[i].x, bikes[i].y - 10);
    ctx.lineTo(bikes[i].x, bikes[i].y - 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(bikes[i].x, bikes[i].y + 12);
    ctx.lineTo(bikes[i].x, bikes[i].y + 5);
    ctx.stroke();

    bikes[i].y += 1.2;
    if (bikes[i].y > 410) {
      bikes[i].y = 40;
      bikesCounted++;
    }
  }
  for (let i = 0; i < trains.length; i++) {
    ctx.beginPath();
    ctx.rect(trains[i].x - 5, trains[i].y - 5, 50, 150);
    ctx.stroke();
    for (let j = 0; j < trains[i].people.length; j++) {
      ctx.beginPath();
      ctx.arc(trains[i].people[j].x, trains[i].people[j].y, 5, 0, 2 * Math.PI);
      ctx.stroke();
      trains[i].people[j].y += 3;
    }

    trains[i].y += 3;
    if (trains[i].y > 410) {
      trains[i].y = 40;
      for (let j = 0; j < trains[i].people.length; j++) {
        trains[i].people[j].y = trains[i].people[j].y_start;
      }
      trainsCounted += trains[i].people.length;
    }
  }
  for (let i = 0; i < walkers.length; i++) {
    ctx.beginPath();
    ctx.arc(walkers[i].x, walkers[i].y, 5, 0, 2 * Math.PI);
    ctx.stroke();

    walkers[i].y += 0.3;
    if (walkers[i].y > 410) {
      walkers[i].y = 40;
      walkersCounted++;
    }
  }
  requestAnimationFrame(loop);
}
</script>

// ---- Dataset ----
const years = Array.from({ length: 25 }, (_, i) => 2000 + i);
const temp = [21,20,22,23,20,19,23,21,19,20,16,19,18,21,19,16.2,18.5,20.7,22.9,19.6,20.1,17.1,19.4,16.3,18.9];
const rainfall = [1500,800,1600,1200,1350,1100,1400,1150,900,1580,1300,1100,1750,1050,1250,1350,1650,1750,1900,1850,1750,1350,1500,1250,1100];
const humidity = [62,70,55,72,59,66,83,54,77,67,48,70,75,63,79,85,60,71,68,80,74,85,55,49,70];

// ---- Linear Regression (JS version) ----
let x = years;
let y = temp;
let xMean = x.reduce((a,b)=>a+b)/x.length;
let yMean = y.reduce((a,b)=>a+b)/y.length;

let num = x.map((v,i)=>(v-xMean)*(y[i]-yMean)).reduce((a,b)=>a+b);
let den = x.map(v=>Math.pow(v-xMean,2)).reduce((a,b)=>a+b);

let slope = num / den;
let intercept = yMean - slope * xMean;

// Predicted temperatures
let predicted = x.map(v => slope * v + intercept);

// ---- Evaluation Metrics ----
let mse = y.map((v, i) => Math.pow(v - predicted[i], 2)).reduce((a,b)=>a+b) / y.length;
let rmse = Math.sqrt(mse);

document.getElementById("mse").innerText = `Mean Squared Error: ${mse.toFixed(2)}`;
document.getElementById("rmse").innerText = `Root Mean Squared Error: ${rmse.toFixed(2)}`;

// ---- Graph 1: Temperature ----
new Chart(document.getElementById("tempChart"), {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Temperature (°C)',
            data: temp,
            borderColor: 'red',
            pointStyle: 'circle',
            borderWidth: 2,
            tension: 0.3
        }]
    }
});

// ---- Graph 2: Rainfall ----
new Chart(document.getElementById("rainfallChart"), {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'Rainfall (mm)',
            data: rainfall,
            backgroundColor: 'blue'
        }]
    }
});

// ---- Graph 3: Humidity vs Temperature ----
new Chart(document.getElementById("humidityTempChart"), {
    type: 'scatter',
    data: {
        labels: temp,
        datasets: [{
            label: 'Humidity vs Temperature',
            data: humidity.map((v, i) => ({ x: temp[i], y: humidity[i] })),
            borderColor: 'green',
            backgroundColor: 'green',
            pointRadius: 5
        }]
    }
});

// ---- Graph 4: Predictions ----
new Chart(document.getElementById("predictionChart"), {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                label: 'Actual Temperature',
                data: temp,
                borderColor: 'purple',
                pointRadius: 5
            },
            {
                label: 'Predicted Temperature Trend',
                data: predicted,
                borderColor: 'orange',
                pointStyle: 'cross',
                borderWidth: 2
            }
        ]
    }
});

// Update the arrival time label dynamically
document.getElementById('arrivalTime').addEventListener('input', function () {
    document.getElementById('arrivalValue').innerText = this.value;
});

// Generate input fields based on the number of processes
document.getElementById('generateInputs').addEventListener('click', function () {
    const numProcesses = parseInt(document.getElementById('numProcesses').value);
    const processInputs = document.getElementById('processInputs');
    processInputs.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numProcesses; i++) {
        processInputs.innerHTML += `
            <div class="process">
                <label>Process ${i} Name: </label>
                <input type="text" id="name${i}" placeholder="P${i}" value="P${i}">
                <label>Arrival: </label>
                <input type="number" id="arrival${i}" min="0" value="${i - 1}">
                <label>Duration: </label>
                <input type="number" id="duration${i}" min="1" value="2">
            </div>
        `;
    }
});

document.getElementById('generateEDF').addEventListener('click', function () {
    generateGanttChart('EDF');
});

document.getElementById('generateRMA').addEventListener('click', function () {
    generateGanttChart('RMA');
});

// Generate the Gantt chart based on the selected algorithm
function generateGanttChart(algorithm) {
    const arrivalTime = parseInt(document.getElementById('arrivalTime').value);
    const ganttChart = document.getElementById('gantt-chart');
    ganttChart.innerHTML = ''; // Clear previous chart

    const tasks = [];
    const numProcesses = parseInt(document.getElementById('numProcesses').value);

    // Collect input values for all processes
    for (let i = 1; i <= numProcesses; i++) {
        const name = document.getElementById(`name${i}`).value;
        const arrival = parseInt(document.getElementById(`arrival${i}`).value);
        const duration = parseInt(document.getElementById(`duration${i}`).value);
        tasks.push({ name, arrival, duration });
    }

    // Sort tasks by arrival time for EDF; keep original order for RMA
    if (algorithm === 'EDF') {
        tasks.sort((a, b) => a.arrival - b.arrival);
    }

    let currentTime = arrivalTime;

    tasks.forEach(task => {
        const block = document.createElement('div');
        block.className = `gantt-block block-${algorithm}`;
        block.style.width = `${task.duration * 50}px`; // Adjust block width
        block.innerText = `${task.name} (${currentTime} - ${currentTime + task.duration})`;

        ganttChart.appendChild(block);
        currentTime += task.duration;
    });

    mergeAdjacentBlocks();
}

// Merge adjacent blocks with the same process name
function mergeAdjacentBlocks() {
    const blocks = Array.from(document.getElementsByClassName('gantt-block'));
    for (let i = 1; i < blocks.length; i++) {
        if (blocks[i].innerText.split(' ')[0] === blocks[i - 1].innerText.split(' ')[0]) {
            blocks[i - 1].style.width = 
                `${parseInt(blocks[i - 1].style.width) + parseInt(blocks[i].style.width)}px`;
            blocks[i].remove();
            i--; // Recheck merged block with the next one
        }
    }
}

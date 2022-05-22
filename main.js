function bestSprintSequence(sprints) {

    let count = 0;
    let sequence;
    let sequencesList = [];
    let sumList;

    if (sprints.length < 3) {
        alert("Error!");
    } else {
        for (let i = 0; i < sprints.length; i++) {
            sequence = sprints.slice(i, i + 3);
            if (sequence.length === 3) {
                count += 1;
                sequencesList.push(sequence);
            }
        }
        sumList = sequencesList.map(r => r.reduce((a, b) => a + b));

        let maxNum = Math.max(...sumList);
        let indexList = [];

        for (let i = 0; i < sumList.length; i++) {
            if (sumList[i] === maxNum) {
                indexList.push(i);
            }
        }
        let bestIndex = indexList[indexList.length - 1];
        alert("sequence: " + sequencesList[bestIndex] + "\nsum: " + sumList[bestIndex]);
    }
}
let sprints = [];
let sprint;
let count = parseInt(prompt("Enter the total number of sprints"));

for (let i = 1; i <= count; i++) {
    sprint = prompt("Enter completed story points: ").toLowerCase();
    sprints.push(parseInt(sprint));
}

bestSprintSequence(sprints);

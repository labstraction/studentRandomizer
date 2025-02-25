const fs = require('fs');



function betterSplice(array, index=0, removalsNumber = 1){
    const newArray = [...array];
    newArray.splice(index, removalsNumber);
    return newArray;
}

function randomArrayIndex(array){
    const randomIndex = Math.round(Math.random() * (array.length - 1));
    return randomIndex;
}

function getStudentsFromJsonFile(filename){

    const json = fs.readFileSync('./' + filename, 'utf8');

    const studentsData = JSON.parse(json);

    return studentsData;
}

function createStudentCouples(studentsArray){

    let clone = [...studentsArray];
    const couples = [];

    while (clone.length > 0) {
        const couple = [];

        const randomIndex1 = randomArrayIndex(clone);
        const student1 = clone[randomIndex1];
        clone = betterSplice(clone, randomIndex1, 1);
        couple.push(student1);

        const randomIndex2 = randomArrayIndex(clone);
        const student2 = clone[randomIndex2];
        clone = betterSplice(clone, randomIndex2, 1);
        couple.push(student2);

        couples.push(couple);
        
    }

    return couples;
}

function printStudentCouples(couplesArray){

    for (let i = 0; i < couplesArray.length; i++) {
        const couple = couplesArray[i];

        const firstStudent = couple[0];

        const secondStudent = couple[1];

        const stringToPrint = `${i + 1}) ${firstStudent.name} - ${secondStudent.name}`;

        console.log(stringToPrint)
    }


}

function main(){
    
    // //0) recupera le informazioni degli studenti dal file students.json
    const allStudents = getStudentsFromJsonFile('students.json')

    // //1) dall'array di studenti estrai un array di coppie di studenti
    // // [[student3name, student8name],[student4name, student5name],[student1name, student7name],[studen2name, student6name]]

    const studentCouples = createStudentCouples(allStudents);


    // //2) fare console.log delle coppie degli studenti con questo output
    // // 1) student3name - student8name
    // // 2) student4name - student5name
    // // 3) student1name - student7name
    // // 4) student2name - student6name
    printStudentCouples(studentCouples);

}

main();
const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
    marks: [8, 9, 10],
}

const jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 7, 8],
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 6, 8]
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid',
    marks: [9, 6, 8]
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    nationality: 'ecuador',
    gender: 'm',
    marks: [6, 10, 7]
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    nationality: 'italy',
    gender: 'f',
    marks: [4, 2, 6]
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut',
    marks: [5, 7, 6]
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f',
    marks: [10, 10, 8]
}

const allStudents = [lorenzo, jan, giovanni, sara, jeremias, laura, eusebio, hugo];

function betterSplice(array, index=0, removalsNumber = 1){
    const newArray = [...array];
    newArray.splice(index, removalsNumber);
    return newArray;
}

function randomArrayIndex(array){
    const randomIndex = Math.round(Math.random() * (array.length - 1));
    return randomIndex;
}

function main(){
    
    //0) recupera le informazioni degli studenti dal file students.json
    //const allStudents = getStudentsFromJsonFile('students.json')

    //1) dall'array di studenti estrai un array di coppie di studenti
    // [[student3name, student8name],[student4name, student5name],[student1name, student7name],[studen2name, student6name]]

    const studentCouples = createStudentCouples(allStudents);

    //2) fare console.log delle coppie degli studenti con questo output
    // 1) student3name - student8name
    // 2) student4name - student5name
    // 3) student1name - student7name
    // 4) student2name - student6name
    printStudentCouples(studentCouples);
    
}

main();
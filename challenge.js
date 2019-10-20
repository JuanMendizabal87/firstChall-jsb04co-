
CALCULADORA


function calculadora(num1, num2) {
    const operacion = prompt();

    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplication") {
        return num1 * num2;
    } else if (operacion === "division") {
        return num1 / num2;
    } else return "Seleccione una operacion";
}

console.log(calculadora(8, 2));



DADO

function dado() {
    let totalScore = 0;
    for (let i = 0; i <= 50; i++) {
        let ladosDado = Math.round(Math.random() * 6);
        totalScore += ladosDado;
        console.log('numero', ladosDado);
        console.log('puntuacion', totalScore);

        if (totalScore >= 50) {
            return console.log('FIN DE LA PARTIDA');
        }
    }
    console.log(ladosDado);
}
dado();



//REGISTRO ACADEMICO

class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Student extends Person {
    subject;
    group;
    constructor(name, age, gender, subject, group) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
    }
}


let Student1 = new Student('Jero', 12, 'male');
let Student2 = new Student('Ana', 13, 'female');
let Student3 = new Student('Pedro', 15, 'male');
let Student4 = new Student('Gema', 14, 'female');
let Student5 = new Student('Juan', 12, 'male');
let Student6 = new Student('Alba', 14, 'female');


class Teachers extends Person {
    subject;
    group;
    studentList;
    constructor(name, age, gender, subject, group, studentList) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
        this.studentList = studentList;
    }

}

let Teacher1 = new Teacher('Jose', 50, 'male');
let Teacher2 = new Teacher1('Maria', 45, 'female');
let Teacher3 = new Teacher('Antonio', 48, 'male');



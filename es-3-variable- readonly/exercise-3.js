const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);


//Sai individuare il motivo per cui abbiamo la possibilità di aggiungere un elemento all'array nonostante abbiamo dichiarato la variabile come `readonly`?

// E' possibile perchè quando dichiariamo una variabile "by reference" come nel caso di students, che 
// rappresenta un Array, la variabile riceve il riferimento che punta all'allocazione di memoria per quell'Array.
// Aggiungendo quindi un valore all'Array non cambiamo questo riferimento, che resta infatti costante, ma solo il valore a cui questo riferimento punta.
// Non è invece possibile riassegnare la variabile o dichiararla nuovamente all'interno del block-scope. 
// //

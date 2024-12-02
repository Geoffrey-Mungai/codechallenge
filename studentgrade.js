let mark = prompt('Enter a grade');

function studentGrade(mark) {
    if(mark >= 80 && mark <= 100){
        return 'A';
    }
    else if(mark >= 60 && mark <=80){
        return 'B';   
    }
    else if(mark >=49 && mark <=60) {
        return 'C';
    }
    else{
        return 'invalid'
     }
    }
    let score = prompt("Enter your scores: ");
        alert(gradeScor(score));
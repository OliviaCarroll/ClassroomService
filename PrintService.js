class PrintService {
    
    printTableOf(array){
        console.table(array);
    }

    print(value){
        console.log(value);
    }

    printEmptyArray(){
        console.log('There are no students in this classroom')
    }

    printNoExamScores(){
        console.log('There are no students with exam scores registered')
    }
};

export default PrintService;
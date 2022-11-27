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
};

export default PrintService;
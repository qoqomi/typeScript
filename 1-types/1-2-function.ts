{
    //javaSctipt π©
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }
    // //TypeScript
    // function add(num1:number, num2:number):number {
    //     return num1 + num2;
    // }
    
    // function jsFetchNum(id) {
    //     //code...
    //     //code..
    //     //code..
    //     return new Promise((resolve,reject) => {
    //         resolve(100)
    //     })
    // }
    // //TypeScript->λ¬Έμνν¨κ³Όλ₯Ό λ³Ό μ μμ.
    // function jsTypeFetchNum(id:string):Promise<number> {
    //     //code...
    //     //code..
    //     //code..
    //     return new Promise((resolve,reject) => {
    //         resolve(100)
    //     })
    // }

    //JavaScript =>TypeScript
    //Optional parameter -> μ λ¬λ°μ μλ μκ³  μ λ¬λ°μ§ μμ μλ μλ€! 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName, lastName)
    }
    printName('Hi', 'name')
    printName('firstName')

    //Default parameter:κΈ°λ³Έκ°μΌλ‘ μ€μ ν  μ μλ€.
    function printMessage(message: string = 'κΈ°λ³Έκ°') {
        console.log(message);
    }
    printMessage();

    //Rest parameter
   
    // μ λ¬νλ λͺ¨λ μ«μλ€μ λ°°μ΄λ‘ λ°μ μ μλ€.
    function addNumbers(...numbers:number[]): number{
        return numbers.reduce((a, b) => a + b)
    }
    console.log(addNumbers(1, 2));
}

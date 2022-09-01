{
    //javaSctipt 💩
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
    // //TypeScript->문서화효과를 볼 수 있음.
    // function jsTypeFetchNum(id:string):Promise<number> {
    //     //code...
    //     //code..
    //     //code..
    //     return new Promise((resolve,reject) => {
    //         resolve(100)
    //     })
    // }

    //JavaScript =>TypeScript
    //Optional parameter -> 전달받을 수도 있고 전달받지 않을 수도 있다! 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName, lastName)
    }
    printName('Hi', 'name')
    printName('firstName')

    //Default parameter:기본값으로 설정할 수 있다.
    function printMessage(message: string = '기본값') {
        console.log(message);
    }
    printMessage();

    //Rest parameter
   
    // 전달하는 모든숫자들을 배열로 받을 수 있다.
    function addNumbers(...numbers:number[]): number{
        return numbers.reduce((a, b) => a + b)
    }
    console.log(addNumbers(1, 2));
}

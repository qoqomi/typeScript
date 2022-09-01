{ 
    //Primitive: number, symbol, null, undefined, boolean, string, bigint
    // Object : function ,, 

    //number 
    const num: number = 5;
   //boolean
    const boal: boolean = false;
    //string 
    let age: boolean | string;
    age = "hi";
    age = false;
  
    function find() : boolean|undefined{
        return false
    }
    //null
    let person: null; //💩
    let person2: string | null;


    //unknown : 알 수 없는  어떤 데이터든 담을 수 있다. 
    let notSure: unknown = 0;
    //any
    let anything: any = 0;
    anything = 'hello';

    //void : 아무것도 return 하지 않는다. 
    function print():void {
        console.log('hello')
        return
    }
    let unusable: void = undefined; //💩
    
    //never ->핸들링할 수 없는 경우
    function throwError(message: string): never {
        throw new Error(message)
        
        
        
    }
    let obj: object; //💩 : 어떤 타입인지 정확하게 명시하는 것이 좋다. 
    function acceptSomeObject(obj: object) {
        acceptSomeObject({ name: 'ellie' })
        acceptSomeObject({ animal: 'dog' })
        
    }
}
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
    let person: null; //π©
    let person2: string | null;


    //unknown : μ μ μλ  μ΄λ€ λ°μ΄ν°λ  λ΄μ μ μλ€. 
    let notSure: unknown = 0;
    //any
    let anything: any = 0;
    anything = 'hello';

    //void : μλ¬΄κ²λ return νμ§ μλλ€. 
    function print():void {
        console.log('hello')
        return
    }
    let unusable: void = undefined; //π©
    
    //never ->νΈλ€λ§ν  μ μλ κ²½μ°
    function throwError(message: string): never {
        throw new Error(message)
        
        
        
    }
    let obj: object; //π© : μ΄λ€ νμμΈμ§ μ ννκ² λͺμνλ κ²μ΄ μ’λ€. 
    function acceptSomeObject(obj: object) {
        acceptSomeObject({ name: 'ellie' })
        acceptSomeObject({ animal: 'dog' })
        
    }
}
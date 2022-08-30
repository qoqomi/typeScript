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
    let anything :any 

}
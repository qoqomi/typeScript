{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker{
            
    }


    const BEANS_GRAMM_PER_SHOT: number = 7;
    let coffeeBeans: number = 0;

    
    function makeCoffee(shots:number) : CoffeeCup{
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error("ėëŽė")
        } 
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false
        }
        
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee)
}
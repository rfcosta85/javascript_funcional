Number.prototype.log = function() { console.log(this) }
Function.prototype.log = function() { console.log(this) }
let r  

const I = a => a 

r = I(3)

r.log()  

r = I(I)
r.log() 

const SELF = f => f(f)

r = SELF(I)

r.log()

const PRI = a => b => a

r = PRI(7)(11)

r.log()

const ULT = a => b => b 

r = ULT(7)(11)

r.log()

const TRO = f => a => b => f(b)(a)

r = TRO(ULT)(7)(11)
 
r.log() 

r = TRO(PRI)(6)(12)

r.log() 

const ULT2 = a => b => TRO(PRI)(a)(b)

r = ULT2(13)(20)

r.log() 

// boolean TRUE e FALSE >> Vamos defini-las como uma função 

// EXP ? PRI : ULT 

// TRUE ? <PRI> : ULT 
// FALSE ? PRI : <ULT>

const T = PRI 
const F = ULT 

T 

F

T.inspect = () => 'Verdadeiro (PRI)'
F.inspect = () => 'Falso (ULT)'

T 
F 

// NOT >> Operador lógico de negação NOT ele é um operador unário

const NOT = a => a(F)(T) 

r = NOT(T)
r.log() 

r = NOT(F)

r.log() 

// AND é um operador binário 

const AND = a => b => a(b)(F)

r = AND(T)(T)

r.log() 

r  = AND(F)(F)

r.log() 

// OR é um operador binário 

const OR = a => b => a(T)(b)

r = OR(T)(T)

r.log() 

r = OR(F)(T)

r.log() 

r = OR(F)(F)

r.log() 

const EQ = a => b => a(b)(NOT(b))

const XOR = a => b => NOT(EQ(a)(b))

r = XOR(T)(T)
r.log() 


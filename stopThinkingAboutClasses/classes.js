// class Calc {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   out() {
//     console.log(this.num1, this.num2);
//   }
// }
// bind ele sobrescreveu o this do construtor que deveria ser algo que nao poderia setar por fora da classe;

const Calc = function (num1, num2) {
  // this da <function> != da < ()=> >
  //   this.num1 = num1;
  //   this.num2 = num2;
  const soma = num1 + num2;
  return {
    out: () => {
      console.log(num1, num2, soma);
    },
  };
};

// this do <out> nao sobrescreve pois o this ele ta na arrowFunction Anonimo

const a = new Calc(1, 2);
a.out.bind({ num1: 4, num2: 5 })();

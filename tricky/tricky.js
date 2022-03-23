const arr = ["a", "b", "c", "d"];

for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (ii) {
      return () => {
        console.log(ii, arr[ii]);
      };
    })(i),
    0
  );
}

console.log("out:", i);

// a variavel <var> ela faz um hoisting entao fica disponivel como variavel "global";
// já o let , const ele é armazenado como variavel do escopo
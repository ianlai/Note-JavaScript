let basicMain = () => {
  //spread operator
  let a = [1, 2, 3];
  let b = [3, 4, 5];
  let c = [...a, ...b];
  console.log(c);

  //TypeScript will capture the typo if calling "touppercase"
  let message = "Yoyoyo"; //assign
  console.log(message.toUpperCase());

  //declare the type of a variable
  let ll: number;
  ll = 3;
  console.log(ll);
};
export default basicMain;

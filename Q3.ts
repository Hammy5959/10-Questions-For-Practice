`Create a length converter function`;

let kmTomile: number = 0.67689;
function killometerToMile(km: number): number {
  let mile = km * kmTomile;
  return mile;
}
console.log(killometerToMile(2));

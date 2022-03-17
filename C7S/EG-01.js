// Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
// Debe medir más o igual de 1,40m y menos de 2 metros.
// Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
// Si mide menos de 1,20m, no podrá subir ni acompañado.
//  Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

const canGetIn = (height, isAlone) => {
  let isOk;

  if (height >= 1.4 && height < 2) {
    isOk = true;
    console.log(
      `Hi, you are ${height} cm tall and you are ${
        (isAlone === true && "alone") || (isAlone === false && "with someone")
      } so Congrats You can get in`
    );
  } else if (height < 1.4 && height >= 1.2 && isAlone === false) {
    isOk = true;
    console.log(
      `Hi, you are ${height} cm tall and you are ${
        (isAlone === true && "alone") || (isAlone === false && "with someone")
      } so Congrats You can get in`
    );
  } else if (height < 1.2) {
    isOk = false;
    console.log(
      `Hi, you are ${height} cm tall and you are ${
        (isAlone === true && "alone") || (isAlone === false && "with someone")
      } Sorry you can't get in`
    );
  } else {
    isOk = false;
    console.log(
      `Hi, you are ${height} cm tall and you are ${
        (isAlone === true && "alone") || (isAlone === false && "with someone")
      } Sorry you can't get in`
    );
  }

  return isOk;
};

console.log(canGetIn(1.35, true));

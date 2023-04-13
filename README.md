# ¿Qué es FAANG?

Es un acrónimo que reúne las iniciales de las empresas más top de tecnología, como bien son Facebook, Apple, Amazon, Netflix y Google.

Cuando superamos la primera etapa de entrevista en una de estas compañías el proceso seguirá los siguientes pasos:

- Se asignará a un reclutador para que te haga preguntas y notar qué tan apasionado eres programando, aquí hay que hacer notar que escribo líneas de código tanto como sea posible.
- Luego se asignará alguien de ingeniería para que te pida solucionar entre 1 y 2 preguntas técnicas.
- Luego habrá una entrevista presencial en el sitio donde estoy aplicando, la empresa paga el hospedaje así que debo separar tiempo si estoy trabajando para otra empresa en ese instante. Serán en total 5 entrevistas, cada una de 1 hora, 4 de estas serán entrevistas técnicas, y 1 sobre personalidad/cultura acorde a la compañía.

Sabiendo esto debemos tener en cuenta las 3 claves para las entrevistas técnicas:

- Conocimiento técnico.
- Resolución de problemas críticos y abstractos.
- Saber comunicarte con el entrevistador. Es importante recordar que son ingenieros y probablemente en algún momento trabajes con ellos, por lo que debes hacerlos sentir cómodos hablando contigo.


# ¿Cómo solucionar las preguntas técnicas?

## 1. Verificar las restricciones

Preguntar al entrevistador sobre la pregunta con el fin de encontrar más información, entender las restricciones y así comprender mejor el problema.

## 2. Escribir algunos casos de prueba

Es importante tener algunos casos de pruebas listos para validar qué debemos retornar en nuestro programa.

## 3. Encontrar una solución sin escribir código

Encontrar una solución sin pensar en código, es decir no pensar en ciclos, validaciones, simplemente en una manera de encontrar el resultado esperado para cada caso de prueba.

## 4. Escribir nuestra solución en código

Ya que entendimos el problema es momento de escribirlo en código.

## 5. Hacer un doble chequeo de errores

Rectificar que todo esté bien, que funcione correctamente, que no hay errores y que todo el código está bien escrito y es limpio.

## 6. Probar nuestro código con nuestros casos de prueba

Utilizar los casos de prueba que creamos en el paso 2 para validar que nuestro código funciona correctamente en todos los escenarios.

## 7. Complejidad de tiempo y espacial

Es importante tener en cuenta nuestro time y space complexity, ya que esto es de suma importancia para las grandes compañías.

## 8. ¿Podemos optimizar nuestra solución?

Siempre buscar optimizaciones que podamos hacerle a nuestro código.


# Problemas

## Two Sum - Arrays

Dado un arreglo de enteros, retornar los índices de los 2 números que sumados den el resultado enviado como parámetro.

### Restricciones
- Todos los números son positivos.
- No hay duplicados.
- No siempre habrá una solución disponible.
- Si no hay solución retornar null.
- Sólo habrá 1 par de números que sumados den el resultado.

### Solución
Lo más sencillo sería pensar en hacer una solución con 2 ciclos anidados, es decir con una complejidad de tiempo de $O(n^2)$, pero se podría optimizar haciendo uso de otra estructura de dato como el Hash Table, y así recorrer sólo una vez el arreglo, e ir verificando si $nums[i] - target$ está en el Hash Table para retornar los índices, si no está se guarda en el Hash Table $nums[i] - target = i$.

## Container with most water - Arrays

Dado un arreglo de positivos enteros donde cada entero representa la altura de una línea vertical en un contenedor. Encontrar 2 líneas que juntas con la distancia entre ellas en el eje X formen un contenedor que contendría la mayor cantidad de agua. Retornar el área del agua que podría contener.

### Restricciones
- El grosor de las líneas no afectan el área.
- No cuentan las líneas iniciales del gráfico.
- Líneas dentro del contenedor no afectan el área.

### Solución
Como el problema anterior la primera solución que podríamos pensar sería comparar cada elemento con los demás y verificar el área mayor, sin embargo podemos hacer uso de 2 punteros, para verificar las combinaciones, donde en cada iteración (el ciclo se rompe cuando $p_1 < p_2$) se calcula el área de los números y guardamos el valor máximo entre el máximo área que habíamos calculado y el actual área en una variable para seguir comparando en cada iteración, e incrementamos $p_1$ si el valor en dicha posición es menor o igual que el valor en $p_2$, caso contrario decrementamos $p_2$.

## Trapping Rainwater - Arrays

Dado un arreglo de enteros representando la elevación de un mapa donde el ancho de cada barra es 1, retornar cuanta agua de lluvia puede ser atrapada.

### Restricciones
- Los extremos del gráfico (líneas de ejes) no cuentan.
- Todos los números son positivos.

### Solución
La solución de fuerza bruta consistió en recorrer la cada posición, y por cada posición verificar sus valores al lado izquierdo y al lado derecho para hacer los cálculos de los valores, sin embargo se volvió a usar el doble puntero para optimizar nuestro código, validando los valores máximos de cada lado, y dependiendo de estos valores máximos sumamos el valor al total o actualizamos dicho valor para ambos extremos y así calcular las áreas correspondientes.

## Type Out Strings - Strings

Dados 2 strings S y T, retornar si estos son iguales cuando son escritos. Cualquier "#" que aparezca en la cadena cuenta como un retroceso.

### Restricciones
- Si hay 2 "#" se eliminan los dos valores anteriores al primer "#".
- Si no hay nada antes del "#" no se elimina nada.
- 2 strings vacíos se consideran iguales.
- La capitalización de las letras sí importa, es decir que "a" no es igual a "A".

### Solución
En este problema se puede hacer uso de la regla de los 2 punteros para comparar los strings directamente sin hacer uso de memoria adicional, iniciando la posición de cada puntero en el final de cada string, e ir comparando en cada iteración si alguno tiene un "#" en dicha posición para ir cambiando de posición omitiendo la cantidad de caracteres necesarios y si en alguna posición son distintos se retorna falso, caso contrario finalizada la iteración se retorna true.
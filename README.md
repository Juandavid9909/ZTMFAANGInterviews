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

## Longest substring without repeating characters - Strings

Dado un string, encontrar la longitud del substring más largo sin repetir caracteres.

### Restricciones
- El substring es contiguo, es decir que buscamos un substring seguido, no una subsecuencia (la subsecuencia permite obviar algunas letras mientras que el substring no).

### Solución
Aquí se tuvo en cuenta otra técnica para recorrer arreglos/strings, y es la técnica Sliding Window Technique, esto nos permite hacer algo similar a la técnica del os 2 punteros, y es tener dos variables que apunten a índices e irlos cambiando convenientemente, en este caso se cambia el rightIndex en cada iteración y si se encuentra la letra en un Hash Table se actualiza el leftIndex.

## Valid Palindrome & Almost Palindrome - Strings

Dado un string, determinar si es un palíndromo (o casi uno), considerando sólo caracteres alfanuméricos e ignorando el case sensitivity.

### Restricciones
- Retornar true si el string es ya un palíndromo.

### Solución
Aquí también se usa la técnica del doble puntero iniciando ambos en los extremos del string, y se valida cada posición left con la right para determinar si son iguales o no los valores, para validar si es casi un palíndromo podemos crear una función auxiliar para validar si eliminando el carácter de la izquierda o la derecha seguiría siendo un palíndromo.

## Reverse a Linked List - Linked Lists

Data una lista enlazada, retornar esta al revés.

### Restricciones
- Retornar null o el valor del nodo si hay 0 o 1 nodo en la lista enlazada.

### Solución
Para este problema podemos usar una variable auxiliar y cada que recorramos los nodos ir anexando estos valores a nuestra lista auxiliar en el valor Next para retornar la lista al revés.

## M, N Reversals - Linked Lists

Dada una lista enlazada y dos números ($n$ y $m$), retornar la lista con sólo en el rango de las posiciones n y m al revés.

### Restricciones
- Siempre asumir que $1 \leq m \leq n \leq length$.
- Puede darse el caso en el que $m = 1$ y $n = length$.

### Solución
Para solucionar este problema es necesario que guardamos algunos datos que son fundamentales para armar correctamente la lista enlazada, estos datos son los valores antes y después de el rango donde se va a revertir el orden de la lista, como la raíz y cola de la lista revertida.

## Merge Multi-Level Doubly Linked List - Linked Lists

Dada una lista doblemente enlazada, cada nodo también puede tener una propiedad hija que apunta a una lista doblemente enlazada separada. Estas listas hijas también pueden tener una o más listas doblemente enlazadas hijas, y así sucesivamente. Se debe retornar una lista doblemente enlazada de un nivel que contenga la lista padre con todas sus listas hijas en la secuencia correspondiente.

### Restricciones
- Una lista doblemente enlazada puede tener múltiples hijos dispersos en sus nodos.
- Cuando se junten los hijos de un nodo de la lista la propiedad child se establece en `null`.

### Solución
Es importante tener en cuenta los nodos extremos que van a quedar conectados a la nueva sublista, hacer una iteración para los hijos y conectar correctamente cada uno de estos nodos.

## Cycle Detection - Linked Lists

Dada una lista enlazada encontrar si esta lista tiene ciclos en ella.

### Solución
En primera instancia la solución de fuerza "bruta" entre comillas tenía una complejidad de tiempo $O(n)$ y una complejidad espacial igual, esto es poco óptimo en cuando a la complejidad espacial porque estamos guardando todos los valores en un `Set` para luego poder compararlos con el item que estamos recorriendo. Luego se encontró que la solución óptima era aplicar el algoritmo Floyd's Tortoise and Hare el cuál consiste en tener 2 punteros, uno avanza de uno en uno mientras que el otro avanza de 2 en 2, si en la lista hay un ciclo en algún punto se encontrarán los 2 punteros y aquí es donde diremos que sí hay un ciclo y retornaremos `true`. A continuación una representación del algoritmo:

![Floyd's Tortoise and Hare Algorithm](https://icelam.github.io/data-structures-and-algorithms/leetcode/202-happy-number/images/fcf-5.jpg)

## Valid Parentheses - Stacks

Dado un string que contiene sólo paréntesis, determinar si es válido. El string es válido si todos los paréntesis se cierran.

### Restricciones
- Si la entrada es un string vacío se retorna que es válido.

### Solución
Es importante saber identificar en qué casos conviene usar las pilas, este es uno de ellos ya que necesitamos ir agregando cada inicio de paréntesis e ir eliminando los últimos, para ello podemos tener un Hash Map que nos indique en cada paréntesis su cierre correspondiente y comparar adecuadamente los valores para retornar   `false` o `true`.

## Minimum brackets to remove - Stacks

Dado un string que sólo contiene paréntesis "(" y ")" y letras en minúscula, remover la mínima cantidad de paréntesis para que el string sea válido.

Un string es considerado válido si está vacío o si hay paréntesis y cada uno de ellos tiene su respectivo cierre.

### Restricciones
- Nuestro algoritmo debe retornar un string con la cantidad válida de aperturas y cierres de paréntesis.
- El string de entrada no tendrá espacios en blanco, sólo caracteres y aperturas y cierres de paréntesis.
- Si el string de entrada no contiene ni aperturas ni cierres de paréntesis el string es directamente válido, por lo que no tenemos que manipularlo.

### Solución
Podemos hacer uso de los métodos de los arreglos y strings para convertir nuestro string en un arreglo y poder iterar cara letra independientemente, y alterar dicha posición del arreglo convenientemente, por ejemplo si es una apertura de paréntesis guardar el index en una pila que usaremos más adelante, si hay un cierre de paréntesis y ya hay datos en nuestra pila podemos borrar el último elemento insertado en esta, caso contrario si es un cierre de paréntesis pero no hay ningún dato registrado directamente asignamos el valor de "" al arreglo en dicha posición y por último hacemos este último proceso para los índices que quedaron pendientes en nuestra pila y así retornar el arreglo como string.

## Queue with stacks - Stacks

Implementar una clase Queue usando pilas. los métodos que se deben implementar son:
- **enqueue:** Anexar un valor al final de la cola.
- **dequeue:** Eliminar el valor al inicio de la cola.
- **peek:** Retornar el valor al inicio de la cola.
- **empty:** Retornar un booleano que nos indique si la cola está vacía o no.

###  Restricciones
- No es necesario que la cola con pilas tenga la misma complejidad de tiempo y espacial que una cola en sí (recordemos que la complejidad en las operaciones enqueue y dequeue es de $O(n)$), pero debe tener la complejidad más óptima posible.

### Solución
Podemos usar 2 pilas, en una hacer todos los enqueue y en otra controlar los dequeue, para los pop recorremos la pila que tiene los enqueue y hacemos pop a todos los elementos mientras hacemos push a la de pops. con el método peek podemos hacer lo mismo con la lista de pops y retornar el último elemento de la pila, y con el empty sólo comparar la longitud de ambas pilas para saber si ambas están vacías.

## Kth largest element - Recursion

### Tail Recursion
La recursividad normal tiene una complejidad espacial de $O(n)$, mientras que Tail Recursion tiene una complejidad espacial de $O(1)$.

**Ejemplos:**

- Recursividad normal.
```
function recFactorial(x) {
	if(x <= 1) {
		return 1;
	}
	
	return x * recFactorial(x - 1);
}
```

- Tail recursion.
```
function tailFactorial(x, totalSoFar = 1) {
	if(x === 0) {
		return totalSoFar;
	}

	return tailFactorial(x - 1, totalSoFar * x);
}
```

Dado un arreglo no ordenado, retornar el kth elemento más grande. Es el kth elemento más grande en orden, no el kth elemento distinto.

### Restricciones
- Siempre va a haber una respuesta disponible.

### Solución
Podemos usar el algoritmo Quick Sort para ordenar el arreglo, una vez hecho esto simplemente retornamos el arreglo en la posición `length - k` que fue enviada como parámetro. Aunque es una buena solución esta no es la más óptima, para obtener la solución más óptima debemos hacer uso del algoritmo Quick Select, el cual tiene el mismo funcionamiento que Quick Sort pero aquí no operaremos en los elementos que no nos interesan (usando el index que deseamos encontrar).
precioBoleta = 7
nombre = prompt("Ingrese el nombre de la persona: ")
genero = Number(prompt("Qué genero es la persona? \n1) Másculino. \n2) Femenino. \n(Ingrese el número de opción)"))
(genero == 1)? nombre + " el valor de tu boleta es: " + (precioBoleta += 2):nombre + " el valor de tu boleta es: " + (precioBoleta -= 2);
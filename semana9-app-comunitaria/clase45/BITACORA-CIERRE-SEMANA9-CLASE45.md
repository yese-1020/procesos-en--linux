# Bitácora de cierre - Semana 9 - Clase 45

## Datos generales

Nombre:Yesenia Bolaños
Fecha:19-06-2026
Entorno: GitHub Codespaces
Rama de trabajo: clase-45-cierre-git-integrador

## 1. Verificación de aplicación

Comando usado para levantar la aplicación:

Respuesta de /estado: curl http://localhost:3000/estado 

Respuesta de /diagnostico:curl http://localhost:3000/diagnostico

Respuesta de /api/info:curl http://localhost:3000/api/info

## 2. Variables de entorno

¿Qué variables se usaron? port node_env

¿Por qué .env no debe subirse? por que ahi guardamos informacion sensible

## 3. Seguridad operativa

¿Qué medidas de seguridad se aplicaron durante la semana?el uso de logs y el uso de .env

## 4. Diagnóstico

¿Qué error simulado se trabajó durante la semana? el del token 

¿Cómo se corrigió? quitamos # que habia al cominso del token en el archivo .env

## 5. Documentación

¿Qué documento explica el procedimiento de despliegue? README.md

## 6. Git

¿Qué aprendí sobre ramas? nos permiten separar versiones 

¿Qué aprendí sobre stash? gurda cambios temporales sin hacer commits 

¿Qué aprendí sobre merge fast-forward?une ramas sin hacer commits extras 

¿Qué aprendí sobre merge no-fast-forward? crea un commits de union 

¿Qué aprendí sobre conflictos?ocurren cuando dos ramas modifican lo mismo y git no sabe cual elegir 

## 7. Reflexión final

¿Qué fue lo más importante de la Semana 9? a dectectar errores y fallas con log 
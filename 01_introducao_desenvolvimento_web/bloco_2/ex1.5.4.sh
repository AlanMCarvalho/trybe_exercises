#!/bin/bash

FILE="/home/acer/Faca_no_queijo/ex1.1.vídeo.sh"
if [ -e "$FILE" ]
    then 
        echo "O caminho $FILE está habilitado"
    else 
        echo "O caminho $FILE NÃO existe"    
fi 
if [ -w "$FILE" ]
    then 
        echo "Você tem permissão de editar $FILE"
    else 
        echo "Você não tem permissão de editar $FILE"
fi 
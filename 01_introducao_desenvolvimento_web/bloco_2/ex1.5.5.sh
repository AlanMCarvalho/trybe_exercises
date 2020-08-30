#!/bin/bash
echo "Digite o caminho de seu arquivo ou diretório:"
read NOME
if [ -f "$NOME" ]
    then 
        echo "$NOME é um arquivo comum."
elif [ -d "$NOME" ]
    then 
        echo "$NOME é um diretório."
else 
        echo "$NOME é um outro tipo de arquivo."
fi
ls -l $NOME

# Fundamentos do node - Aula 07

O conceito de streams pode sim ser pode see visto ao rodar um filme na Netflix ou a música no Spotifybqu quando rodamos uma música ou filme e ele executa mesmo não tendo carregado por completo.

## Streams
- Ler pequenas partes de alguma coisa e já conseguir trabalhar com aqueles dados mesmo antes ler o arquivo por completo.

Imagine que vamos fazer uma importacao de clientes via CSV.	È muito comum ter funcionalidades no sistema que precise fornecer para o usuário uma possicel importação desse arquivo . E o systema pega e ler esse arquivo e começa a salavar o arquivo no banco de dados . Mas umagine que eu queira subir um csv para dentro do meu sitema contendi um giga de tamanho, será que eu permito que o meu usuário suba um arquivo de um giga para dentro do servidor? Se não estiver usando o conceito destream e permitir que isso aconteça, esse csv vai ser enviado para a aplicação backe-end através de uma rota POST por exemplo. Sem streams ele vai ler esse arquivo por completo, depois que ele ler esse arquivo de um giga ele vai percorrer todo o arquivo fazendo cada uma das operações descrita no banco de dados.

O problema é que se o usuário que está usando aplicação tenha uma internet não muito rápida isso pode demorar muito.

Quando trabalhamos com conceito de strams aplicado a esse tipo de exemplo o enquanto estou fazendo o upload do arquivo, no primeiro segundo de upload nesses 10 megas , provalvelmente eu não tenha um milhão de linhas, mas talvez já tenha umas 10.000 linhas.

Então porque não inserir essas 10000 linhas no banco de dados antes de esperar todo o 1 giga de arquivo 
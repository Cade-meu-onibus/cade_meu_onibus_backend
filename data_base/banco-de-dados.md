# configuração do postgres

## instalação e configurando o docker

Para instalaçao do docker no ubuntu é necessario utilizar os comando abaixo: 

1. Atualização dos pacotes: 

```sudo apt-get update```

2. Instale os pacotes para o docker:

```sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common```

3. Adicione a chave GPG oficial do docker:
```curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -``

4. Adicione o repositorio Docker a lista apt sources:

```sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"```

5. Update the package index again:

```sudo apt-get update```

6. Instale o Docker:

```sudo apt-get install docker-ce docker-ce-cli containerd.io```

7. Verifique o funcionamento do Docker executando o comando hello-world:

```sudo docker run hello-world```


## configurando o postgresql no docker:

1. Para configurar o postgre no Docker é preciso baixar a imagem oficoal do postgres: 

```docker pull postgres```




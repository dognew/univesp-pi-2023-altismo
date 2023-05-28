# Utiliza a imagem base do Ubuntu
FROM ubuntu:22.04


# Atualiza a lista de pacotes
RUN apt-get update

# Instalação do tzdata e definição do fuso horário
# Instala o tzdata
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata
# Define o fuso horário
RUN ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata

# Instala as dependências
RUN apt-get install -y python3 python3-pip build-essential bash python3-django mysql-server

# Configura o MySql
COPY my.cnf /etc/mysql/my.cnf

# Adiciona os comandos para criar o usuário e conceder privilégios
RUN service mysql start && \
    mysql -e "CREATE USER 'user'@'localhost' IDENTIFIED BY 'user123';" && \
    mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;" && \
    mysql -e "CREATE DATABASE db;" && \
    mysql -e "FLUSH PRIVILEGES;"

# Instalação das dependências do Django
RUN pip3 install django django-bootstrap4 PyMySQL django-stdimage

# Copia o código fonte para o container
COPY mysite /app

# Define o diretório de trabalho
WORKDIR /app

# Expõe as portas do MySQL e do servidor Django
EXPOSE 3306 8000

# Define o comando padrão a ser executado quando o container for iniciado
CMD ["bash", "-c", "service mysql start && python3 mysite/manage.py runserver 0.0.0.0:8000"]
#CMD ["bash", "-c", "service mysql start"]

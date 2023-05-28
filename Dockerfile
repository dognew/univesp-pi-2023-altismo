# Define a imagem base
FROM mysql:latest

# Variáveis de ambiente
ENV MYSQL_ROOT_PASSWORD=root123
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=user123
ENV MYSQL_DATABASE=projectdb

# Copia o arquivo SQL para dentro do container
COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão do MySQL (opcional)
EXPOSE 3306

# Comando padrão a ser executado quando o contêiner for iniciado
CMD ["mysqld"]

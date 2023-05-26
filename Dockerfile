# Imagem base
FROM python:3.9-slim-buster

# Define o diretório de trabalho
WORKDIR /app

# Instala o apt-utils
RUN apt-get update && apt-get install -y apt-utils

# Copia o arquivo requirements.txt para o container
COPY requirements.txt .

# Instala as dependências
RUN apt-get update && apt-get install -y default-libmysqlclient-dev && \
    pip install --no-cache-dir -r requirements.txt

# Copia o código fonte para o container
COPY . .

# Define as variáveis de ambiente
ENV MYSQL_HOST=db \
    MYSQL_PORT=3306 \
    MYSQL_DATABASE=mydatabase \
    MYSQL_USER=myuser \
    MYSQL_PASSWORD=mypassword

# Expõe a porta do servidor web
EXPOSE 8000

# Inicia o servidor web
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


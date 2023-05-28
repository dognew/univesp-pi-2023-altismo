# db_data Folder

This folder is used to store the database data when running the project with Docker.

Docker uses volumes to persist data between different container executions. By using the "db_data" folder as a volume, we ensure that the database data is retained even if the container is restarted or replaced.

It's important not to manually delete or modify the contents of this folder unless you know exactly what you're doing. Improper changes can result in data loss or improper functioning of the database.

Make sure to regularly back up the important data stored in this directory to ensure the security and integrity of your data.


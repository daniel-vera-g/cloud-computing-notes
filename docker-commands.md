# docker-commands

## Cleaning up

- General clean up: `docker system prune`

Container:

- Container: `docker container rm`
- Only stopped containers: `docker container prune`

Images:

- `docker image rm`
- `docker image prune`
- Only unused: `docker image prune -a`

Volumes:

- `docker volume rm`
- Unused volumes: `docker volume prune`

Networks:

- `docker network rm`
- Unused networks: `docker network prune`

- <https://linuxize.com/post/how-to-remove-docker-images-containers-volumes-and-networks/>
- <https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes>
- <https://stackoverflow.com/questions/30133664/how-do-you-list-volumes-in-docker-containers>

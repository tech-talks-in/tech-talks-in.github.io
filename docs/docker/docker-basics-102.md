---
slug: docker-basics-102
title: Docker Basics 102
authors:
  name: Pavan Kumar
  title: tech-talks Core Team
  url: https://github.com/mrpavan
  image_url: https://github.com/mrpavan.png
tags: [Docker]
sidebar_position: 2
---

# Docker Basics 102

**Useful docker commands for anyone's quick reference**

1. Check active running containers

    ```
    docker ps
    ```
    There might be some coantiners not showing here as they might be in exited state to check all containers simply add -a flag to the docker ps command

    ```
    docker ps -a
    ```
2. Check size of docker container

    ```
    docker container ls --size

    ```
    This will print list of all continers with thier size, quite helpful if you want to keep tab on disk space

    :::tip above comamnd doesnt show how much is taken up by logs as they can fill your disc space quite fast and cause issues in running your servcies smoothly. Use below to know about log size
    ```bash 
    sudo du -h $(docker inspect --format='{{.LogPath}}' $(docker ps -qa))
    ``` 
    Output
    ```
    429M	/var/lib/docker/containers/b9a590c31b48b1/be21d62b9a590c31b4d5138bbfd21ad8e70aa5fb1754b9626ffe702bc99508b1-json.log
    435M	/var/lib/docker/containers/a070d184ba25106ffb78b356865ecc94e8d5c067/a070d184ba251fd04dd228a356865ecc94e8d5c067-json.log
    ```
    :::

3. Docker logs - check stdout stream and troubleshoot
    ```
    docker logs [OPTIONS] container_name_or_id

    example:
    docker logs -f --until=2s mycontainer_name
    ```

    Some of the useful options include 
    ```--since 5m```  provides you logs since last 5m, change to required duration 10m, 50m, 10m50s, 5h
    ```--untill 10m```  Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
    ```--follow , -f``` follow logs, new logs will be displayed as they are generated

4. Backup and move your containers

    ```
    docker save --output file-name.tar container-name

    example:
    docker save --output mycontainer.tar mycontainer
    ```
    if you want to use STDOUT &gt; is used instead of --output flag
    This can be copied to a target machine and iamge can be restored into the new machine with load command as below 
    Read from tar archive file, instead of STDIN, for STDIN replace -i or --input with &lt;

    ```
    docker load -i mycontainer.tar
    ```

5. Docker filter - matches containers by status. You can filter using ```created```, ```restarting```, ```running```, ```removing```, ```paused```, ```exited``` and ```dead```. For example, to filter for running containers:

    ```
    docker ps --filter status=running
    ```
6. For lsiting only container id, status and names

    ```
    docker ps --format "{{.ID}}: {{.Status}} {{.Names}}"
    ```

7. Attach and detach to a container

    ```
    # Run the container
    docker run -d --name mycontainer ubuntu:21.04 /usr/bin/top -b
    
    #Attach to a running container
    docker attach mycontainer

    #detach
    As the container was started without the -i, and -t options, signals are forwarded to the attached process, which means that the default CTRL-p CTRL-q detach key sequence produces no effect, but pressing CTRL-c terminates the container:

    #Check contianer still running not exited
    docker ps -a --filter name=mycontainer
    ```
8. Docker Exec - Runs a new command in running container

    This starts shell in mycontainer
    
    ```
    docker exec -it mycontainer sh
    ```

    This creates file in the container
    ```
    docker exec -d mycontainer touch /tmp/test-file.txt
    ```

    By default, the docker exec command, inherits the environment variables that are set at the time the container is created. Use the --env (or the -e shorthand) to override global environment variables, or to set additional environment variables for the process started by docker exec.
    
    ```
    docker exec -e VAR_A=1 -e VAR_B=2 mycontainer env
    ```

9. Time and again you might need to configure docker to your preferences. for examole logging, if you want to limit the log file to 10Mb and keep utmost 3 files, perform auto rotation or use different network for your containers as default might be conflicting with your exisitng services. Go ahead and create a new file daemon.json in ```/etc/docker/daemon.json``` and add below lines

    ```
    {
        "log-driver": "local | json-file",
        "log-opts": {
            "max-size": "10m",
            "max-file": "3",
            }
        "live-restore": true,
        "bip": "10.10.10.1/24",
        "default-address-pools": [{
            "base": "10.10.10.0/24",
            "size": 100
        }],
        "dns": ["8.8.8.8"],
        "dns-search": ["home.local"]
    }

    ```
    :::caution need to restart containers

    restart docker service ```service docker restart```

    stop, remove containers and start again 

    :::

    More to come ....
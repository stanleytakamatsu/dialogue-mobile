# About this repo

This project has the purpose of studying to develop _react native mobile application_ written in _Typescript_ following techniques of **_Object Oriented Programming, SOLID, Clean Architeture and many techniques_**.

It also serves as an example to follow the suggested architecture for personal or business projects and fully open for improvement.

# About Dialogue

Dialogue is a simple communication project that uses [Socket.IO](https://socket.io/) using _react native_.

# Requirement

- docker
- docker-compose

# To provision the environment

Discover the machine network IP

```
$ hostname -I

-> 192.168.0.10 172.15.0.1 11.11.1.2 2854:14c:128:2660:2f4a:ed89:ba4:62

// select the first IP 192.168.0.10
```

Edit `.env` file

```
REACT_NATIVE_PACKAGER_HOSTNAME=<IP>
REACT_NATIVE_API_BASE_URL=http://<IP>:3000
```

Copy the environment

```
$ cp .env.dist .env
```

Edit the

```
$ docker-compose up -d

$ docker-compose exec dialogue-mobile bash
```

Inside the container

```
$ yarn
```

# To build the project

```
// inside the container

$ tsc
```

# To run the project

```
// inside the container

$ yarn start
```

After started and the QR code was generated, use the [expo](https://expo.io/) app to scan it to run the application.

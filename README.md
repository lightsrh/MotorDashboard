# MotorDashboard
Web Application to control the movements of a 3 axis automate.

## Frontend
### Installing

```shell
> cd frontend
> npm install
> ng build
```

### Configuration

Change the configuration of the system.

### Move

Send commands to the system to move on the axis.
Home is required before any other movement.
Movement allowed on a defined number of steps or to precise coordinates directly (in steps for now too).

### Receipe

Allows the user to create a list of commands to send. Can be repeated on a loop.

### Record

Button to launch the recording of the commands sent. Once the recording is finished, add the list created as a new receipe that can be send once or on loop.

## Backend
### Running

```shell
> cd backend
> sudo apt install python3
> python3 main.py
```

COde not working --> One property is initialized every time the screen is changed --> You have to disable it 

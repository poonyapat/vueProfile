const projectStatus = {
    queuing:"Queuing",
    onGoing:"On going",
    cancelled:"Cancelled",
    pausing:"Pausing",
    done:"Done",
    documentation:"Documentation"
}

class Project {
    constructor(name, description, status, url) {
        this.name = name
        this.description = description
        this.status = status
        this.url = url
    }
}

export var vue001 = new Project("Vue - My First Project", "I try to create my profile with VueJs", projectStatus.onGoing)

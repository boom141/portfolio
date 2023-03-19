class carousel_children{
    constructor(filename){
        this.filename = filename;
    }

    render(){
        return`
            <div class="carousel-item">
                <img src="../static/web_sample/${this.filename}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <div class="container-fluid" style="background-color: rgba(75, 75, 75, 0.537); width: 100%;">
                    <h5>Web Applicaiton</h5>
                    <p>${this.filename.split('.')[0]}</p>
                </div>
                </div>
            </div>`
    }
}

class project_loader{
    constructor(project_name){
        this.project_name = project_name
    }

    render(){
        return `<div class="per-project">
                <video src="../static/videos/${this.project_name}" loop autoplay="true" muted="true"></video>
                <h3 class="color-df">${this.project_name.split('.')[0]}</h3>
                </div>`
            }
}


window.onload = () =>{
   axios.get(window.origin + '/request_images')
   .then(response => {
        for(let i = 0; i < response.data.length; i++){
            if(response.data[i] != 'Dental Clinic Website.png')
                $('.carousel-inner').append(new carousel_children(response.data[i]).render())
        }
   })
   .catch(error => console.log(error))

   axios.get(window.origin + '/request_videos')
   .then(response => {
        for(let i = 0; i < response.data.length; i++){
            if(response.data[i] != 'Dental Clinic Website.png')
                $('.project-container').append(new project_loader(response.data[i]).render())
        }
   })
   .catch(error => console.log(error))

}
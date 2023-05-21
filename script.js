

$(document).ready(function(){
    var API_KEY = "AIzaSyABGmyKuVZWxUIAHfHLKshAucNY7LwpuuQ"
    var video = ''
    var newvideo =''
//    var nextpage= document.getElementById("video-container")
  
    $("#form").submit(function (event) {
        event.preventDefault()
        var search = $("#search").val()
        videoSearch(API_KEY, search, 10)
       
      
          
    
    })
 
    function videoSearch(key, search, maxResults) {
        $.get("https://youtube.googleapis.com/youtube/v3/search?key=" + key + "&type=video&type=title&part=snippet&maxResult=" + maxResults + "&q=" + search, function(data) {
            console.log(data);

            data.items.forEach(item => {
              
                video = `
                <div id="display-data">
                <div id="bg-color">
               
                <iframe id="video-container" src="https://www.youtube.com/embed/${item.id.videoId}" auto="play" frameborder="0" ></iframe></div>
                <div id="title-container"><p>${item.snippet.title}</p>
               </div></div>
                `
                
                newvideo=`<iframe id="video-container1" src="https://www.youtube.com/embed/${item.id.videoId}" auto="play" frameborder="0" ></iframe>`
                  
                      
                $("#anotherdiv").append(newvideo)
                
                $("#videos").append(video)
               
                
                var displayDataElement =document.getElementById("display-data");
                var previouspage =document.getElementById("pres-page");
                
                displayDataElement.addEventListener("click", function() {
                    document.getElementById("videos").style.visibility = 'hidden'
                    document.getElementById("form-hide").style.visibility = 'hidden'
                    document.getElementById("anotherdiv").style.visibility = 'visible'

                
            
                });

                previouspage.addEventListener("click", function () {
                    document.getElementById("videos").style.visibility = 'visible'
                    document.getElementById("anotherdiv").style.visibility = 'hidden'
                    
                })
               
            })
        })
    }
  
   
    
})


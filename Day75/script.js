console.log("Avi is Hacker");
        console.log("Sandy is also hacker")

        setTimeout(() =>{
            console.log("I am Inside setTimeOut")
        }, 0);

        console.log("The End");

        const callback = (arg) => {
          console.log(arg)
        }
        
        const loadScript = (src , callback) => {
          document.createElement("script");
          sc.src = src;
          sc.onload = callback("Avi");
        }
        
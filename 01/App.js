 
     const heading  = React.createElement("h1",{
        id: "title",
      
     },"React component!");

     function headingFunction (title) {
               return React.createElement("h2",{id:title},title);
     }
   
     const container1 = React.createElement("div",{
        id: "container",
       
     },[heading,headingFunction("custom Title :)")]);
    
     const root = ReactDOM.createRoot(document.getElementById("root"));
    // react will over write what already exists in the root div. 
     root.render(container1);


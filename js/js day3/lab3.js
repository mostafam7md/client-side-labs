      //--------------1-----------------
      
      // var win1;
      // function openWindow() {
      //   win1 = window.open("win1.html", "", "width=500, height=500");
      // }
      // function closeWindow() {
      //   win1.close();
      // }

      // openWindow();
      // setTimeout(closeWindow(), 3000);
      
      // //-----------------2------------
      
      // alert(navigator.userAgent);
      
      // //-----------------3-------------

      // console.log(navigator.onLine);

      // //------------------4-------------

      //  setTimeout(location.reload(), 5000);

      // //-----------------5--------------
      
      // console.log("protocol : " + location.protocol +" url:  "+ location.href + " host name :" + location.host);
      
      // // -----------------6---------------

      // history.back(1);
      // history.forward(1);

      // //------------------7-------------
      //  document.getElementById("screen-size").innerHTML =
      // "Screen Width: " + screen.width + "px, Height: " + screen.height + "px";

      // //-----------8---------------------
      //     function changeLink() {
      //   timerId = setTimeout(function () {
      //   var link = document.getElementById("myLink");
      //   link.innerHTML = "google";
      //   link.href = "https://google.com";
      // }, 2000);
      // }

      // function cancelChange() {
      //   clearTimeout(timerId);
      // }
    
      // ChangeLink();

      //------------9------------
      
      // var intervalId;
      // function clock() {
      //   intervalId = setInterval(function () {
      //     var now = new Date();
      //     document.title = now.toLocaleTimeString();
      //   }, 1000);
      // }

      // function stopClock() {
      //   clearInterval(intervalId);
      // }
      // clock();

      // -----------------10-------------------

      // var result = confirm("Do you want to continue?");

      // if (result) {
      //   console.log("user said yes");
      // } else {
      //   console.log("user said no");
      // }

      //-----------11-------------------

      // var ul = document.getElementsByTagName("ul")[0];
      // var nodes = ul.childNodes; 
      // for (var i = 0; i < nodes.length; i++) {
      //     if (nodes[i].nodeType === 1) {
      //       console.log("Element:", nodes[i].tagName, "-", nodes[i].textContent);
      //     }
      //   }
    /*
      Difference:
      - childNodes: returns ALL child nodes including text nodes (like spaces, line breaks) and element nodes.
      - children: returns ONLY element nodes (<li>, <div>, etc.), no text nodes.
    */

    // --------12-------------

    //    function BodyChildrens() {
    //   var body = document.body;
    //   var children = body.childNodes;
    //   for (var i = 0; i < children.length; i++) {
    //     if (children[i].nodeType === 1) {
    //       console.log(children[i].tagName);
    //     }
    //   }
    // }
    // BodyChildrens();

    //-------------13------------------

    // function ElementChildrens(parent) {
    //   var nodes = parent.childNodes;
    //   for (var i = 0; i < nodes.length; i++) {
    //     var node = nodes[i];
    //     if (node.nodeType === 1) {
    //       console.log(node.tagName);
    //     }
    //   }
    // }

    // //---------------14------------------

    // var container = document.getElementById("screen-size");

    // console.log("firstChild:", container.firstChild); 
    // console.log("firstElementChild:", container.firstElementChild);

    // /*
    //   - firstChild : returns the very first child node could be text, comment or element
    //   - firstElementChild : returns only the first child that is an element .
    // */
      
    // // -------------------------15---------------
    
    // var ul = document.getElementById("list");
    // var listItems = ul.children; 
    // for (var i = 0; i < listItems.length; i++) {
    //   console.log(listItems[i].tagName, "-", listItems[i].textContent);
    // }

    // /*
    //    children : returns only element nodes (ignores text nodes and comments).
    //    childNodes : would return ALL types of nodes (text, comment, element).
    // */
    
    // // -------------------17-------------------

    //  function siblings(element) {
    //   var parent = element.parentNode;      
    //   var children = parent.children; 
    //   for (var i = 0; i < children.length; i++) {
    //     if (children[i] !== element) {      
    //       console.log(children[i].tagName, "-", children[i].textContent);
    //     }
    //   }
    // }

    //--------------18-------------
    // var ul = document.getElementById("list");
    // var node = ul.firstChild;
    // while (node) {
    //   console.log("Node:", node.nodeName);
    //   node = node.nextSibling;
    // }
    // var element = ul.firstElementChild;
    // while (element) {
    //   console.log("Element:", element.tagName, "-", element.textContent);
    //   element = element.nextElementSibling;
    // }
    /*
       nextSibling: traverses ALL node types (text, comment, element).
       nextElementSibling: skips text/comments and only goes through element nodes.
    */
   
    //-------------19---------------

    //   function countElementChildren(node) {
    //   var count = 0;
    //   var child = node.firstChild;
    //   while (child) {
    //     if (child.nodeType === 1) {
    //       count++;
    //     }
    //     child = child.nextSibling;
    //   }
    //   return count;
    // }

    //--------------------20---------------

    // function logFormInputs() {
    //   var form = document.forms[0]; 
    //   var elements = form.elements;
    //   for (var i = 0; i < elements.length; i++) {
    //     var field = elements[i];
    //     if (field.name) {
    //       console.log("Name:", field.name, "Value:", field.value);
    //     }
    //   }
    // }

    //------------------21-----------------

    // var forms = document.forms; 
    // for (var i = 0; i < forms.length; i++) {
    //   console.log("Form name:", forms[i].name);
    // }

    //-----------------22------------------

    // var imgs = document.images; 
    // for (var i = 0; i < imgs.length; i++) {
    //   console.log("Image src:", imgs[i].src);
    // }

    //------------------23-----------------
    //   function disableForm(form) {
    //   var fields = form.elements; 
    //   for (var i = 0; i < fields.length; i++) {
    //     fields[i].disabled = true;
    //   }
    // }

    //------------------24-------------------
    
    
    // var imagesArray = Array.from(document.images);
    // var filtered = imagesArray.filter(function(img) {
    //   return img.width > 100;
    // });

    // filtered.forEach(function(img) {
    //   console.log("Image:", img.src, "Width:", img.width);
    // });
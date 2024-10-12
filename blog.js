/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container. Inside should be a third level heading followed by a paragraph. The article should have the class .post added to it
  - The third level heading text content should be the text "Date: " followed by the date submitted. The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  The content in #date and #entry should be cleared

 */

  "use strict";
  (function() {
  
    window.addEventListener("load", init);
  
    /**
     * sets up necessary functionality when page loads
     */
    function init() {
      qs("button").addEventListener("click", addEntry);       
    }
  
    /**
     * TODO
     * adds a blog entry to the blog post page
     */
    function addEntry() {
        //get the two strings
        const blogDateInput = id('date');
        let blogDate = blogDateInput.value;
        blogDateInput.value = '';
       
        const blogTextInput = id('entry');
        let blogText = blogTextInput.value;
        blogTextInput.value = '';

        const article = articleCreation(blogDate, blogText);

        const newBlog = id('posts');
        newBlog.appendChild(article);
         
    }


    function articleCreation(date, text){
        const h3 = document.createElement('h3');
        const para = document.createElement('p');
        const art = document.createElement('article');

        h3.innerHTML = "Date: " + date;
        para.innerHTML = "Entry: " + text;

        art.appendChild(h3);
        art.appendChild(para);

        art.className = 'post';
        art.addEventListener("dblclick", () => {
            //console.log("Double clicking worked");
            art.remove();
        });
        
        
        return art;



    }


    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(id) {
      return document.getElementById(id);
    }
  
    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
      return document.querySelector(selector);
    }
  })();
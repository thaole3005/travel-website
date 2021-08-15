
    // const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);


  $(document).ready(function() {

    function menuHandler () {
      var menu_open_btn = document.querySelector('.bar_btn');
      var menu_close_btn = document.querySelector('.small_menu_close');
      var small_menu = document.querySelector('.small_menu');
      var overlay_website = document.querySelector('.overlay_website');



      menu_open_btn.onclick = function() {   //hàm mở menu
        small_menu.style.right = '0';
        overlay_website.style.opacity = '1';
        overlay_website.style.visibility = 'visible';
      }

      menu_close_btn.onclick = function() { //hàm đóng menu bằng button đóng
        small_menu.style.right = '-100%';
        overlay_website.style.opacity = '0';
        overlay_website.style.visibility = 'hidden';
      }

      overlay_website.onclick = function() { //hàm đóng menu bằng cách click overlay
        small_menu.style.right = '-100%';
        overlay_website.style.opacity = '0';
        overlay_website.style.visibility = 'hidden';
      }

    }

    menuHandler();




    
        
    });
$(document).ready(function () {


        // code for Home Logout Navigation bar animation on hover
         $('.active div').css('transition','none');
         $('.active div').width($('.active li').width());
         $('.active div').css('transition','none');
            $('header ul a').hover(function(){
             $('.active div').css('transition','.5s ease-in-out');    
 
                 $('.active div').width(0);  
                 $(this).children('div').width($(this).children('li').width());  
            })
            $('header ul a').on('mouseleave',function(){
             $('.active div').css('transition','.5s ease-in-out');    
             $('header ul a div').width(0);
                 $('.active div').width($('.active li').width());  
            })
  

    // fetching data from gitHub
    $(".searchBar button").on('click',function(){
        
        $("body").css('cursor','progress');
        const username= $(".searchBar input").val();
        

        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url:`https://api.github.com/users/${username}`,
         
            success: function (response) 
            {

               const gitResponse=response;

               $(".profile img").attr('src',gitResponse.avatar_url);
               $(".name h1").html(gitResponse.name);
               $(".followers").html(gitResponse.followers);
               $(".following").html(gitResponse.following);
               $(".email").html(gitResponse.email);
               $(".bio").html(gitResponse.bio);
               $(".biSection").css('display','flex');

               $.ajax({
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json",
                    url:gitResponse.repos_url,
                
                    success: function (response) 
                    {
                        $('.repos a').remove();  
                        const repoResponse=response;
                        
                        repoResponse.forEach(element => 
                        {
                            var component=`<a href="${element.url}">
                                                <div>
                                                    ${element.name}
                                                </div>
                                          </a>`;
                            $('.repos').append(component);
                        });
                        $("body").css('cursor','default');
                    
                    }
               });

            },

            error: function()
            {
                $(".biSection").css('display','none');
                alert("Unable to Process");
                $("body").css('cursor','default');
            }
        });


    });
});
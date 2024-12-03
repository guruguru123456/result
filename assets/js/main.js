var map;
const semester = $("#sem").val();
        const rollNumber = $("#roll").val();
        const phoneNumber = $("#phone").val();

        console.log(semester);
$(document).ready(function() {

    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade"
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();
    
    
    /* ======= Carousels ======= */
    $('#news-carousel').carousel({interval: false});
    $('#videos-carousel').carousel({interval: false});
    $('#testimonials-carousel').carousel({interval: 6000, pause: "hover"});
    $('#awards-carousel').carousel({interval: false});
    
    
    /* ======= Flickr PhotoStream ======= */
    // $('#flickr-photos').jflickrfeed({
    //     limit: 12,
    //     qstrings: {
    //     id: '32104790@N02' /* Use idGettr.com to find the flickr user id */
    //     },
    //     itemTemplate:
    //         '<li>' +
    //         '<a rel="prettyPhoto[flickr]" href="{{image}}" title="{{title}}">' +
    //         	'<img src="{{image_s}}" alt="{{title}}" />' +
    //         '</a>' +
    //         '</li>'
			
    // }, function(data) {
    // 	$('#flickr-photos a').prettyPhoto();
    // });
    
    // /* ======= Pretty Photo ======= */
    // // http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/ 
    // $('a.prettyphoto').prettyPhoto();
    
    // /* ======= Twitter Bootstrap hover dropdown ======= */
    
    // // apply dropdownHover to all elements with the data-hover="dropdown" attribute
    // $('[data-hover="dropdown"]').dropdownHover();
    
    // /* Nested Sub-Menus mobile fix */
    
    $('li.dropdown-submenu > a.trigger').on('click', function(e) {
        var current=$(this).next();
		current.toggle();
		e.stopPropagation(); 
		if (current.is(':visible')) {
    		$(this).closest('li.dropdown-submenu').siblings().find('ul.dropdown-menu').hide();
		}
    });     
    
    
    /* ======= Style Switcher ======= */
    
    $('#config-trigger').on('click', function(e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();        
        } else {
            $panel.show();
        }
    });
    
    $('#config-close').on('click', function(e) {
        $('#config-panel').hide();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
        var $logoImage = $(this).attr('data-logo');
		$('#theme-style').attr('href', $styleSheet);
		$('#logo').attr('src', $logoImage);		
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		
	});
    
    
    // Initial check when the page loads
    
    
});

    function checkAndDisplayTable(event) {
        event.preventDefault();
        const semester = $("#sem").val();
        const rollNumber = $("#roll").val();
        const phoneNumber = $("#phone").val();
        const result_table= document.getElementById("result-table");
        const resultNotFound = document.getElementById("resultNotFound");
        console.log(semester, phoneNumber, rollNumber)
        if (semester == "6" && rollNumber == "21663081" && phoneNumber == "7378000017") {
            result_table.innerHTML= ` <table class="table table-striped table-hover table-bordered"> 
  <tbody>
    <tr>     
      <td width="15%"><b>Roll Number</b></td>
      <td colspan="3">21663081</td>  
    </tr>
    <tr>      
      <td><b>Name</b></td>
      <td colspan="3">ANTAR SINGH</td>      
    </tr>
    <tr>      
      <td><b>Father Name</b></td>
      <td colspan="3">ANGREJ SINGH</td>      
    </tr>
     <tr>      
      <td><b>Mother Name</b></td>
      <td colspan="3">MANJEET KAUR</td>      
    </tr>
     <tr>      
      <td><b>Result</b></td>
      <td colspan="3">
             <table class="table table-striped table-hover table-bordered">  
        <thead>
         <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Subject Code</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Type</th>
      <th scope="col">Max Marks<br/>E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I</th>
      <th scope="col">Result<br/>E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I</th>
      <th scope="col">Flag</th>
    </tr>
  </thead>
  <tbody>
      <tr>     
      <td>1</td>
      <td>BC-601<br/><br/></td>  
      <td>Management Accounting<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>45&nbsp;&nbsp;&nbsp;&nbsp;22<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
      <tr>     
      <td>2</td>
      <td>BC-602<br/><br/></td>  
      <td>Fundamental of Insurance<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>50&nbsp;&nbsp;&nbsp;&nbsp;18<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
      <tr>     
      <td>3</td>
      <td>BC-604<br/><br/></td>  
      <td>Human Resource Management<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>53&nbsp;&nbsp;&nbsp;&nbsp;21<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
      <tr>     
      <td>4</td>
      <td>BC-604<br/><br/></td>  
      <td>Income Tax-II<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>49&nbsp;&nbsp;&nbsp;&nbsp;22<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
      <tr>     
      <td>5</td>
      <td>BC-605<br/><br/></td>  
      <td>Business Enviroment<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>51&nbsp;&nbsp;&nbsp;&nbsp;19<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
      <tr>     
      <td>6</td>
      <td>BC-606<br/><br/></td>  
      <td>Retail Management<br/><br/></td>  
      <td>TH<br/><br/></td>  
      <td>75&nbsp;&nbsp;&nbsp;&nbsp;25<br/><br/></td>  
      <td>48&nbsp;&nbsp;&nbsp;&nbsp;23<br/><br/></td>
       <td>P<br/></td>        
    </tr>  
  
      
         <tr>  
   <td colspan="5" style="text-align:left;"><b>Total Marks:     600</b></td>
   <td colspan="3">421</td>
   </tr>    
  </tbody>
</table> 
           <p style="font-size:10px; color:red;">P=Pass,R=Reappear,A=Absent</p>
      </td>   
      
    </tr>
    
  </tbody>
 </table> `
            
            
        } else {
          result_table.innerHTML=""
          resultNotFound.innerHTML=`<div class="col-md-12">
            <table class="table table-striped table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>No results found</td>
                    </tr>
                </tbody>
            </table>
        </div>`
        }
    }
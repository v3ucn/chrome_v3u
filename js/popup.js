$(function () {
    
    
    

        
       console.log('你好你好');

        
        $.ajax({url:"https://vx.weiinng.cn/chrome",data:{'word':'redis123'},contentType: "application/json", 
        dataType: "json",success:function(result){
            console.log(result);
            $("#title").html(result.result[0]['title']);
            $("#answer").html(result.result[0]['desc']);
        }});

    $("#my").click(function () {

        $("#answer").show();
    
    });


});
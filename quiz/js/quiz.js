    //javascript 
    document.addEventListener("DOMContentLoaded", function() { 
        var quiz_check = document.querySelectorAll('.quiz_answer_list_txt');
            for(var i =0; i < quiz_check.length; i++) {
                quiz_check[i].onclick = function(){
                    var a = this.previousElementSibling.value;         
                        step1 = document.querySelector(".quiz_step_img"),
                        step2 = document.querySelector(".quiz_step_txt"),
                        answerO = document.querySelector(".quiz_result_O"),
                        answerX = document.querySelector(".quiz_result_X");

                    if(a == "1" || "2" || "3" || "4"){
                        step1.classList.remove("hidden");
                        step2.classList.remove("active");
                        answerO.classList.remove("active");
                        answerX.classList.remove("active");
                    };

                    var result = document.querySelector(".quiz_step_img");
                    result.onclick = function(){
                        if(q_answer[0] == a){
                            answerO.classList.add("active");
                            answerX.classList.remove("active");
                        }else{
                            answerO.classList.remove("active");
                            answerX.classList.add("active");
                        }
                    
                    step1.classList.add("hidden");
                    step2.classList.add("active");
                    };
                };
            };
    });

    document.addEventListener("click", function(event) {
        
        if (event.target.closest(".quiz_step") || event.target.closest(".quiz_result") || event.target.closest(".quiz_answer_box")) return;
        step1.classList.remove("hidden");
        step2.classList.remove("active");
        answerO.classList.remove("active");
        answerX.classList.remove("active");
    });
  
    $(document).ready(function(){
        //javascript
      /*  var quiz_check = document.querySelectorAll('.quiz_answer_list_txt');
        for(var i =0; i < quiz_check.length; i++) {
            quiz_check[i].onclick = function(){
                var a = this.previousElementSibling.value,         
                    step1 = document.querySelector(".quiz_step_img"),
                    step2 = document.querySelector(".quiz_step_txt"),
                    answerO = document.querySelector(".quiz_result_O"),
                    answerX = document.querySelector(".quiz_result_X");
                console.log(this.previousElementSibling.value);

                if(a == "1" || "2" || "3" || "4"){
                    step1.classList.remove("hidden");
                    step2.classList.remove("active");
                    answerO.classList.remove("active");
                    answerX.classList.remove("active");
                };

                var result = document.querySelector(".quiz_step_img");
                result.onclick = function(){
                    if(q_answer[0] == a){
                        answerO.classList.add("active");
                        answerX.classList.remove("active");
                    }else{
                        answerO.classList.remove("active");
                        answerX.classList.add("active");
                    }
                
                step1.classList.add("hidden");
                step2.classList.add("active");
                };
            };
        };*/

        // javascript & jquery 4 (코드 최적화)
        /*$(".quiz_answer_list_txt").click(function(){
                var a = $(this).siblings(".quiz_answer_radio").val(),                
                    step1 = document.querySelector(".quiz_step_img"),
                    step2 = document.querySelector(".quiz_step_txt"),
                    answerO = document.querySelector(".quiz_result_O"),
                    answerX = document.querySelector(".quiz_result_X");
                //console.log(a);

                if(a == "1" || "2" || "3" || "4"){
                    step1.classList.remove("hidden");
                    step2.classList.remove("active");
                    answerO.classList.remove("active");
                    answerX.classList.remove("active");
                }
                    var result = document.querySelector(".quiz_step_img");
                    result.onclick = function(){
                        if(q_answer[0] == a){
                            answerO.classList.add("active");
                            answerX.classList.remove("active");
                        }else{
                            answerO.classList.remove("active");
                            answerX.classList.add("active");
                            }
                    
                    step1.classList.add("hidden");
                    step2.classList.add("active");
                    }
            
        });*/

        // javascript & jquery 3
       /* \        
       var el = document.querySelectorAll('.quiz_answer_list_txt');
        for(var i =0; i < el.length; i++) {
            el[i].onclick = function() { 
                //alert();
                var a = $(this).siblings(".quiz_answer_radio").val();
                
                var result = document.querySelector(".quiz_step_img");
                result.onclick = function(){
                    var step1 = document.querySelector(".quiz_step_img");    
                    var step2 = document.querySelector(".quiz_step_txt");
                    var answerO = document.querySelector(".quiz_result_O");
                    var answerX = document.querySelector(".quiz_result_X");
                
                    if(q_answer[0] == a){
                        answerO.classList.add("active");
                        answerX.classList.remove("active");
                    }else{
                        answerO.classList.remove("active");
                        answerX.classList.add("active");
                        }
                
                step1.classList.add("hidden");
                step2.classList.add("active");
                }
            };
        }*/

        // javascript & jquery 2
        /*for(var i =0; i < el.length; i++) {
            el[i].onclick = function() { 
                var a = $(this).siblings(".quiz_answer_radio").val();

                var step1 = document.querySelector(".quiz_step_img");    
                var step2 = document.querySelector(".quiz_step_txt");
                var answerO = document.querySelector(".quiz_result_O");
                var answerX = document.querySelector(".quiz_result_X");

                if(q_answer[0] == a){
                    answerO.classList.add("active");
                    answerX.classList.remove("active");
                 }else{
                    answerO.classList.remove("active");
                    answerX.classList.add("active");
                    }
                step1.classList.add("hidden");
                step2.classList.add("active");
            };
        }*/

        // onclick jquery 1
       /* var step1 = function(){
                $(".quiz_answer_list_txt").click(function(){
            
                var a = $(this).siblings(".quiz_answer_radio").val();

                var step1 = document.querySelector(".quiz_step_img");    
                var step2 = document.querySelector(".quiz_step_txt");
                var answerO = document.querySelector(".quiz_result_O");
                var answerX = document.querySelector(".quiz_result_X");

                /*var a_check = document.querySelector('input[name="quiz_answer"]:checked');
                console.log(a_check);*/

                //정답확인 결과 
               /*if(q_answer[0] == a){
                    answerO.classList.add("active");
                    answerX.classList.remove("active");
                    /*$(".quiz_result_O").addClass("active");
                    $(".quiz_result_X").removeClass("active");*/
           /*     }else{
                    answerO.classList.remove("active");
                    answerX.classList.add("active");
                    /*$(".quiz_result_O").removeClass("active");
                    $(".quiz_result_X").addClass("active");*/
           /*     }
                step1.classList.add("hidden");
                step2.classList.add("active");
                /*$(".quiz_step_img").addClass("hidden");
                $(".quiz_step_txt").addClass("active");*/

          //  });
    /*    }
        step1();*/

       /* var step1 = document.querySelector(".quiz_step_img");    
        var step2 = document.querySelector(".quiz_step_txt");
        var answerO = document.querySelector(".quiz_result_O");
        var answerX = document.querySelector(".quiz_result_X");

        document.addEventListener("click", function(event) {
            
            if (event.target.closest(".quiz_step") || event.target.closest(".quiz_result") || event.target.closest(".quiz_answer_box")) return;

            step1.classList.remove("hidden");
            step2.classList.remove("active");
            answerO.classList.remove("active");
            answerX.classList.remove("active");
            //$(".quiz_answer_radio:checkbox[name='quiz_answer']").css("outline","2px solid red").removeAttr("checked");
            //$(".quiz_answer_radio").siblings(".quiz_answer_list_txt").css("outline","2px solid red").prop("checked", false);            
            //console.log(e);
        });*/

   });
       
    
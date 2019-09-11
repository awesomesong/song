// 문제의 답
var q_answer = ["2"];

    //var a = document.querySelector(".quiz_answer_radio");
    var el = document.querySelectorAll(".quiz_answer_list_txt");
    //var a = $(this).siblings(".quiz_answer_radio").val();
    function quiz(){
        
        for(var i =0; i < el.length; i++) {
            el[i].onclick = function() { 
                var a = document.querySelectorAll(".quiz_answer_radio[name='quiz_answer']");
                var step1 = document.querySelector(".quiz_step_img");    
                var step2 = document.querySelector(".quiz_step_txt");
                var answerO = document.querySelector(".quiz_result_O");
                var answerX = document.querySelector(".quiz_result_X");
                console.log(a[1].value());

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
        }
    }
    quiz();

        document.addEventListener("click", function(event) {
            /*$(".quiz_result_O, .quiz_result_X, .quiz_step_txt").removeClass("active, hidden");*/
            
            //var a = document.querySelectorAll(".quiz_answer_radio[name='quiz_answer']");
            var step1 = document.querySelector(".quiz_step_img");    
            var step2 = document.querySelector(".quiz_step_txt");
            var answerO = document.querySelector(".quiz_result_O");
            var answerX = document.querySelector(".quiz_result_X");
            // If user clicks inside the element, do nothing
            if (event.target.closest(".quiz_step") || event.target.closest(".quiz_result") || event.target.closest(".quiz_answer_box")) return;

        // If user clicks outside the element, hide it!
            step1.classList.remove("hidden");
            step2.classList.remove("active");
            answerO.classList.remove("active");
            answerX.classList.remove("active");
            //$(".quiz_answer_radio:checkbox[name='quiz_answer']").css("outline","2px solid red").removeAttr("checked");
            //$(".quiz_answer_radio").siblings(".quiz_answer_list_txt").css("outline","2px solid red").prop("checked", false);            
            //console.log(e);
        });
  /* $(document).ready(function(){
       //javascript
        
        // jquery & javascript
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
/*
        var step1 = document.querySelector(".quiz_step_img");    
        var step2 = document.querySelector(".quiz_step_txt");
        var answerO = document.querySelector(".quiz_result_O");
        var answerX = document.querySelector(".quiz_result_X");
        //var a_value = $(this).siblings(".quiz_answer_radio[name='quiz_answer']");

        // Detect all clicks on the document
        document.addEventListener("click", function(event) {
            /*$(".quiz_result_O, .quiz_result_X, .quiz_step_txt").removeClass("active, hidden");*/
            

            // If user clicks inside the element, do nothing
   /*         if (event.target.closest(".quiz_step") || event.target.closest(".quiz_result") || event.target.closest(".quiz_answer_box")) return;

        // If user clicks outside the element, hide it!
            step1.classList.remove("hidden");
            step2.classList.remove("active");
            answerO.classList.remove("active");
            answerX.classList.remove("active");
            //$(".quiz_answer_radio:checkbox[name='quiz_answer']").css("outline","2px solid red").removeAttr("checked");
            //$(".quiz_answer_radio").siblings(".quiz_answer_list_txt").css("outline","2px solid red").prop("checked", false);            
            //console.log(e);
        });

   });*/
       
    
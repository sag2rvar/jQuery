$(document).ready(function () {

     

    $('.heading-form').submit(function (e) {
        e.preventDefault();
        var heading = $(".input-heading").val();
        $('.input-heading').val('');
        $("main").append(`<section><h1>` + heading + `</h1><button type="button" class="btn-close remove_btn" aria-label="Close"></button></section>`)


        $('body').on("click", ".remove_btn", function (e) {
            e.preventDefault();
            let row_item = $(this).parent();
            $(row_item).remove();
        });

        $('.optionselect').find('option').remove()
        $('.optionselect').append('<option> select </option>')
        $('.headingForm1').find('option').remove()
        $('.headingForm1').append('<option> select </option>')
        $('main section h1').each(function (index) {
            $('.optionselect').append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>')
            $('.headingForm1').append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>')
        });
        arr.push({ 'title': heading, 'subarr': [] });
        localStorage.setItem('key', JSON.stringify(arr));
    });

    $('.heading-form1').submit(function (e) {
        e.preventDefault();
        var heading = $('.optionselect option:selected').val();
        var subheading = $(".input-heading1").val();
        $('.input-heading1').val('');
        $(`main section:nth-child(` + heading + `)`).append(`<div style="padding-left:110px"><h2>` + subheading + `</h2><button type="button" class="btn-close remove_btn" aria-label="Close"></button></div>`)


        $('.headingForm1').on('change', function () {
            var head = $('.headingForm1 option:selected').val();
            $('.headingForm2').find('option').remove()
            $('.headingForm2').append('<option> select </option>')
            $(`main section:nth-child(` + head + `) div h2`).each(function (index) {
                $('.headingForm2').append('<option value=" ' + (index + 1) + ' ">' + $(this).text() + '</option>')
            });
        });
        arr[heading - 1].subarr.push({ 'subheading': subheading, 'subarr1': [] });
        localStorage.setItem('key', JSON.stringify(arr));
    });



    $('.heading-form2').submit(function (e) {
        e.preventDefault();

        var inputType = $(".optionselect2 option:selected").val();
        var label1 = $('.input-heading2').val();
        $('.input-heading2').val('');
        var class1 = $('.input-heading3').val();
        $('.input-heading3').val('');
        var value3 = $('.input-heading4').val();
        $('.input-heading4').val('');
        var name1 = $('.input-heading5').val();
        $('.input-heading5').val('');
        var placeholder1 = $('.input-heading6').val();
        $('.input-heading6').val('');
        var isReadonly = $('#checkboxNoLabel1').is(":checked");
        $('.checkboxNoLabel1').val('');
        var isDisabled = $('#checkboxNoLabel2').is(":checked");
        $('.checkboxNoLabel2').val('');
        var value1 = parseInt($(".headingForm1 option:selected").val());
        var value2 = parseInt($(".headingForm2 option:selected").val());
        var val2 = parseInt(value2) + 2;

        var selectedOption = $('.input-heading7').val();
        $('.input-heading7').val('');
        var choices = selectedOption.split(',');


        var checkboxLabel = choices[0];
        var checkboxName = choices[1];

        var options1 = ''
        var options11 = ''
        var options12 = ''




        if (inputType === "text") { // Text Input
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;" ><label>${label1}</label> <input  type="text" class="${class1}" value="${value3}" name="${name1}" placeholder="${placeholder1}"/><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, });
            localStorage.setItem('key', JSON.stringify(arr));

        } else if (inputType === "radio") { // radio
            for (var i = 0; i < choices.length; i++) {
                options11 += `<br><input type="radio" name="dynamicRadio" value="${choices[i]}"> ${choices[i]}`
            }
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px; "><label>` + label1 + `</label> ` + options11 + ` <br><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));

        } else if (inputType === "checkbox") { // checkbox
            for (var i = 0; i < choices.length; i++) {
                options12 += `<br><input type="checkbox" value="${choices[i]}"> ${choices[i]}`
            }
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;">` + options12 + `<br><button type="button" class="btn-close remove_btn" aria-label="Close"></button><p/>`)
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));
        } else if (inputType === "email") {// email

            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;"><label>` + label1 + `</label><input type="email" value="` + value3 + `"><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));
            

        } else if (inputType === "textarea") { // Textarea
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;"><label>${label1}</label> <textarea type="textarea" value="${value3}"> </textarea><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));

            // $(`main section:nth-child(${value1}) div:nth-child(${value2})`).append(`<p><label>${label1}</label> <textarea type="textarea" class="${class1}" value="${value3}" name="${name1}" placeholder="${placeholder1}"/><button class='remove_btn'>Remove</button><p><br>`);

        } else if (inputType === "button") { // button
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;"><button>` + label1 + `</button><button type="button" class="btn-close remove_btn" aria-label="Close"></button> </p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));

        } else if (inputType === "file") { // file
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append('<p style="margin-top: 30px; margin-left: 70px;"><label>' + label1 + `</label><input type="file"> <button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));

        } else if (inputType === "select") {// select
            var i = 0
            for (var i = 0; i < choices.length; i++) {
                options1 += `<option value="${choices[i]}"> ${choices[i]}`
            }
            $(`main section:nth-child(${value1}) div:nth-child(${val2})`).append(`<p style="margin-top: 30px; margin-left: 70px;"><label>` + label1 + `</label> <select>{ <option>` + options1 + `</option>}</select><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
            arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, class1, label1, value3, placeholder1, name1, choices, });
            localStorage.setItem('key', JSON.stringify(arr));
        }
    });
});
window.onload = function () {
    what();
    function what() {
        var head = localStorage.getItem('key');
        var inputType = $(".optionselect2 option:selected").val();
        var label1 = $('.input-heading2').val();
        var class1 = $('.input-heading3').val();
        var value3 = $('.input-heading4').val();
        var name1 = $('.input-heading5').val();
        var placeholder1 = $('.input-heading6').val();
        var selectedOption = $('.input-heading7').val();
        var choices = selectedOption.split(',');
        // var checkboxLabel = choices[0];
        // var checkboxName = choices[1];
        var options11 = ''
        var options12 = ''
        var options13 = ''
        if (head) {
            var newObj = $.parseJSON(head);
            for (i = 0; i < newObj.length; i++) {
                $("main ").append(`<section><h1>` + newObj[i].title + `</h1"><button type="button" class="btn-close remove_btn" aria-label="Close"></button></section>`);
                $(".remove_btn").on('click', function () {
                    var url = localStorage.key('key');
                    localStorage.removeItem(url);
                    $("main").window.onload('refresh');

                });

                for (j = 0; j < newObj[i].subarr.length; j++) {

                    $("main").append(`<div style="padding-left:110px"><h2>` + newObj[i].subarr[j].subheading + `</h2><button type="button" class="btn-close remove_btn" aria-label="Close"></button></div>`);


                    for (k = 0; k < newObj[i].subarr[j].subarr1.length; k++) {

                        if (newObj[i].subarr[j].subarr1[k].inputvalue == "text") {//text
                            $("main").append(' <p style="margin-left: 170px; margin-top: 50px;" ><label>' + newObj[i].subarr[j].subarr1[k].label1 + `</label><input type = "text"` + (newObj[i].subarr[j].subarr1[k].inputvalue) + ` class =   ` + (newObj[i].subarr[j].subarr1[k].class1) + ` placeholder = ` + (newObj[i].subarr[j].subarr1[k].placeholder1) + ` name = ` + (newObj[i].subarr[j].subarr1[k].name1) + ` value =   ` + (newObj[i].subarr[j].subarr1[k].value3) + `><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "radio") {//radio
                            for (var s = 0; s < newObj[i].subarr[j].subarr1[k].choices.length; s++) {
                                options11 += `<br><input type="radio" name="dynamicRadio"  value="${newObj[i].subarr[j].subarr1[k].choices[s]}"> ${newObj[i].subarr[j].subarr1[k].choices[s]}`
                            }
                            $("main").append(`<p style=" margin-left: 170px;"><label>` + newObj[i].subarr[j].subarr1[k].label1 + `</label> ` + options11 + `</p><button type="button" class="btn-close remove_btn" style="margin-left: 170px;" aria-label="Close"></button>`)
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "checkbox") {//checkbox
                            for (var s = 0; s < newObj[i].subarr[j].subarr1[k].choices.length; s++) {
                                options12 += `<br><input type="checkbox" style=" margin-left: 170px;" value="${newObj[i].subarr[j].subarr1[k].choices[s]}"> ${newObj[i].subarr[j].subarr1[k].choices[s]}`
                            }

                            $("main").append(`<p> ` + options12 +  `<br><button type="button" class="btn-close remove_btn" style="margin-left: 170px;" margiiaria-label="Close"></button></p>`);
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "email") {//email
                            $("main").append(' <p style=" margin-left: 170px; margin-top: 50px;"><label>' + newObj[i].subarr[j].subarr1[k].label1 + `</label><input type = "email"` + (newObj[i].subarr[j].subarr1[k].inputvalue) + ` placeholder = ` + (newObj[i].subarr[j].subarr1[k].placeholder1) + ` name = ` + (newObj[i].subarr[j].subarr1[k].name1) + ` value =   ` + (newObj[i].subarr[j].subarr1[k].value3) + `><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue === "textarea") { // Textarea
                            $(`main`).append(`<p style=" margin-left: 170px;"><label>`+ newObj[i].subarr[j].subarr1[k].label1 +`</label> <textarea type="textarea"` + (newObj[i].subarr[j].subarr1[k].inputvalue) + `  value =   ` + (newObj[i].subarr[j].subarr1[k].value3) + `> </textarea><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
                        }   
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue === "button") { // button
                        $(" main ").append(`<p style=" margin-left: 170px;"><button>` + newObj[i].subarr[j].subarr1[k].label1 + `</button><button type="button" class="btn-close remove_btn" aria-label="Close"></button> </p><br>`);
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue === "file") { // file
                            $(" main ").append('<p style=" margin-left: 170px;"><label>' + newObj[i].subarr[j].subarr1[k].label1 + `</label><input type="file"> <button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue === "select") {// select
                        var i = 0
                        for (var s = 0; s <newObj[i].subarr[j].subarr1[k].choices.length; s++) {
                            options13 += `<option  value="${newObj[i].subarr[j].subarr1[k].choices[s]}"> ${newObj[i].subarr[j].subarr1[k].choices[s]}`
                        }
                        $(" main ").append(`<p style=" margin-left: 170px;"><label>` + newObj[i].subarr[j].subarr1[k].label1 + `</label> <select>{ <option>` + options13 + `</option>}</select><button type="button" class="btn-close remove_btn" aria-label="Close"></button></p><br>`);
                        }   
                                     




                    }

                }
            }
        }
    }
}

















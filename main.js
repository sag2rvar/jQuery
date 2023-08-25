function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$('document').ready(function () {
    var arr = [];
    $(".contactForm").submit(function (e) {

        e.preventDefault();
        var Heading = $('.inputclass').val();
        console.log(Heading);
        $('main').append(`<section><h1 id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">${Heading}<input type="button" value=" delete" class="rehedig" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px"></h1></section>`);  
        $('#myModal').modal('hide');

        $('.headingList').find('option').remove();
        $('.headingList').append('<option value=" "> select </option>');

        $('.headingListForm').find('option').remove();
        $('.headingListForm').append('<option value=" "> select </option>');

        $("main section h1").each(function (index, value){
        
            $('.headingList').append('<option value="' + (index + 1) + '">' + $(this).text() + '</option>')   
            $('.headingListForm').append('<option value="' + (index + 1) + '">' + $(this).text() + '</option>')

        });
        arr.push({ 'title': Heading, 'subarr': [] });
        localStorage.setItem('key', JSON.stringify(arr));
        $(document).on("click", ".rehedig", function () {
            $(this).closest("section").remove();
            
        });
        $('.contactForm').trigger('reset');
        // $('#myModal').modal('toggle');
            
    });
    $(".contactForm2").submit(function (e) {
        e.preventDefault();
        var Subheading = $('.inputclass2').val();
        $('#myModal2').modal('hide');

        var i = $(".headingList option:selected").val();
        $(`main section:nth-child(${i})`).append(`<div><h2 class="ms-3" id="drag2" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">${Subheading}<input type="button" value="delete" class="subhed"  style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px"></h2></div>`);  
        
        arr[i - 1].subarr.push({ 'subheading': Subheading, 'subarr1': [] });
        localStorage.setItem('key', JSON.stringify(arr));
        $(document).on("click", ".subhed", function () {
            $(this).closest("div").remove();
                
        });
        $('.contactForm2').trigger("reset");
        // $('#myModal2').modal('toggle');
        
    });

    $('.headingListForm').on('change', function() {
        var i = $(".headingListForm option:selected").val();
        $('.headingList2').find('option').remove();      
        $('.headingList2').append('<option value=" "> select </option>');
        $(`main section:nth-child(${i}) div h2`).each(function (index, value) { 
            $('.headingList2').append('<option value="'+(index+1)+'">'+$(this).text()+'</option>');
        });	
    });
    

    $(".Form3").submit(function (e) {
        e.preventDefault();
        $('#myModal3').modal('hide');
        var get_id = $(".headingListForm option:selected").val();
        var get_id2 = $(".headingList2 option:selected").val();
        var get_id3 = $(".FormList option:selected").val();
        var num = parseInt(get_id);
        var cntintid2 = parseInt(get_id2);
        var classid = $("#classinput").val();
        var labelid = $("#lableinput").val();
        var valueid = $("#valueinput").val();
        console.log(valueid);
        var placeholderid = $("#placeholderinput").val();
        var optionid = $("#optioninput").val().split(",");
        var btr = (cntintid2 + 1);
        var disabel = $(".disabled").val();
        var requed = $(".required").val();
        var redony = $(".cekbxredoly").val();

        if (get_id3 == "select") {
            var selt = ('<option >' +  (valueid) + '</option>')
            $.each(optionid, function (i, v) {
                selt += ('<option value=' + i + '> ' + v + '</option>')
            });
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><select >' + (selt) + '  ' + (disabel) + '</select><input type="button" value="delete" class="seldel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)"></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><select >' + (selt) + '  ' + (requed) + '</select><input type="button" value="delete" class="seldel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)"></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid,labelid, valueid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
                $('#' + (classid)).blur(function () {
                    if ($('input:text').is(":empty")) {
                        $(this).parents('p').addClass('warning');
                    }
                });
            }
            else {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="selid"><label style = "margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><select >' + (selt) + '</select><input type="button" value="delete" class="seldel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            $(document).on("click", ".seldel", function () {
                $(this).closest("#selid").remove(); 

            });
        }
        else if (get_id3 == "checkbox") {
            var chk = ('<label></label>')
            $(optionid).each(function (i, v) {
                chk += ('<br><input type=' + (get_id3) + ' style =" margin-left:180px; font-size:23px">')
                chk += ('<label value=' + i + '> ' + v + '</label> ')
            });
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid" ><label style="margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="cekdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" >'+ (disabel) + ' ' + (chk) + '</span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label style="margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="cekdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" >'+ (requed) + ' ' + (chk) + '</span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="cekid"><label style="margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="cekdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" >' + (chk) + '</span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, optionid,labelid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            $(document).on("click", ".cekdel", function () {
                $(this).closest("#cekid").remove();
            });
        }
        else if (get_id3 == "radio") {
            var rdio = ('<label></label>')
            $(optionid).each(function (i, v) {
                console.log(i, v);
                rdio += ('<br><input type=' + (get_id3) + ' name="fav_language">')
                rdio += ('<label value=' + i + '> ' + v + '</label>')
            });
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="raddel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ><div style="margin-left:180px; font-size:23px">'+ (disabel) + ' ' + (rdio) + '</div></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            } 
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="raddel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ><div style="margin-left:180px; font-size:23px">'+ (requed) + ' ' + (rdio) + '</div></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="radid"><label style="margin-left:180px; font-size:23px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type="button" value="delete" class="raddel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ><div style="margin-left:180px; font-size:23px">'+ (rdio) + '</div></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            $(document).on("click", ".raddel", function () {
                $(this).closest("#radid").remove();
            });
        }
        else if (get_id3 == "textarea") {
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '  ' + (disabel) + 'style = "margin-left:180px; font-size:23px"></textarea><input type="button" value="delete" class="texarea" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.cekbxredoly').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '  ' + (redony) + '>' + (valueid) + '</textarea></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '  ' + (requed) + '>' + (valueid) + '</textarea><input type="button" value="delete" class="texarea" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
                $('#' + (classid)).blur(function () {
                    if ($('input:text').is(":empty")) {
                        $(this).parents('p').addClass('warning');
                    }
                });
            }
            else {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="texarid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><textarea name=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '></textarea><input type="button" value="delete" class="texarea" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid,labelid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            $(document).on("click", ".texarea", function () {
                $(this).closest("#texarid").remove();

            });
        }
        else if (get_id3 == "button") {
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '  ' + (disabel) + '><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '  ' + (requed) + '><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
                $('#' + (classid)).blur(function () {
                    if ($('input:text').is(":empty")) {
                        $(this).parents('p').addClass('warning');
                    }
                });
            }
            else {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="butid"><label id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + '  value=' + (valueid) + '  placeholder=' + (placeholderid) + ' class=' + (classid) + '><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            $(document).on("click", ".bundel", function () {
                $(this).closest("#butid").remove();

            });
        }
        else {
            if ($('.disabled').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + ' id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + ' class =' + (classid) + '  ' + (disabel) + '><input type="button" value="delete" class="aerdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
            }
            else if ($('.cekbxredoly').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + ' id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + ' class=' + (classid) + ' value = ' + (valueid) + '  ' + (redony) + '><input type="button" value="delete" class="aerdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, labelid,optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
                console.log('<input type=' + (get_id3) + ' Class = ' + (classid) + ' value = ' + (valueid) + '  ' + (redony) + '>')
            }
            else if ($('.required').is(':checked')) {
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id="adrid"><label class=' + (get_id3) + ' id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (labelid) + '</label><input type=' + (get_id3) + ' class=' + (classid) + ' value =' + (valueid) + '  ' + (requed) + '><input type="button" value="delete" class="aerdel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, valueid, optionid,labelid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr));
                $('#' + (classid)).blur(function () {
                    if ($('input:text').is(":empty")) {
                        $(this).parents('p').addClass('warning');
                    }
                });
            }
            else {
               
                $("main section:nth-child(" + num + ") div:nth-child(" + btr + ")").append('<br><span id = "adrid"><label class = ' + (get_id3) + ' style = "padding-left:200px" id="drag3" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)"> ' + (labelid) + ' </label><input type = ' + (get_id3) + ' value = ' + (valueid) + '  placeholder = ' + (placeholderid) +  ' class = ' + (classid) + ' style = "padding-left:20px" ><input type = "button" value = "delete" class = "aerdel" style = "height:35px; width:100px; background-color:red; padding-left:15px; font-size:14px" ></span>');
                arr[get_id-1].subarr[get_id2-1].subarr1.push({'inputvalue': get_id3 ,classid, labelid,valueid, optionid, placeholderid,});
                localStorage.setItem('key', JSON.stringify(arr)); 
                console.log(valueid,'44444444444')
            
        }
            $(document).on("click", ".aerdel", function () {
                $(this).closest("#adrid").remove();
            
            });
        }       
        $('#Form3').trigger('reset');
        // $('#myModal3').modal('toggle');
    });
   
});
        // $('main').append('<div class="ms-3">'+inpuT+'</div>');
        // $('#myModal2 .dropdown-toggle').append($("[inpuT="+i+"] > p"));
window.onload = function () {
    what();
    function what() {
        var head = localStorage.getItem('key');
        var classid = $("#classinput").val();
        var labelid = $("#lableinput").val();
        var valueid = $("#valueinput").val();
        var placeholderid = $("#placeholderinput").val();
        var optionid = $("#optioninput").val().split(",");
        if (head) {
            var newObj = $.parseJSON(head);

            for (i = 0; i < newObj.length; i++) {
                $("main ").append('<section><h1 id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + newObj[i].title + '<input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></h1></section>');
                $("#delete").on('click', function () {
                    var url = localStorage.key('key');
                    localStorage.removeItem(url);
                    $("main").window.onload('refresh');
                    
                });

                for (j = 0; j < newObj[i].subarr.length; j++) {
                   
                    $("main").append('<section><h2 style="padding-left:110px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + newObj[i].subarr[j].subheading + '<input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></h2></section>');
                       $("#delete1").on('click', function () {
                        var ls_data = JSON.parse(localStorage.getItem('key'));
                        var sub = (newObj[i].subarr[j].subheading)
                        
                        console.log(ls_data);
                        const index1 = ls_data.findIndex(item => item.id === ls_data[i]);
                        console.log(index1);

                    });

                    for (k = 0; k < newObj[i].subarr[j].subarr1.length; k++) {
                        if (newObj[i].subarr[j].subarr1[k].inputvalue == "select") {
                            var selt = ('<option>' +  (newObj[i].subarr[j].subarr1[k].valueid) + '</option>')
                            $.each(newObj[i].subarr[j].subarr1[k].optionid, function (i, v) {
                                selt += ('<option value=' + i + '> ' + v + '</option>')
                            });
                            $("main").append(' <span id="selid"><label style="margin-left:180px; font-size:23px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + newObj[i].subarr[j].subarr1[k].labelid + '</label><select>' + (selt) + '</select><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span><br>');

                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');

                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                           });
                        }
                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "radio") {
                            var rdio = ('<label></label>')
                            $(newObj[i].subarr[j].subarr1[k].optionid).each(function (index, value) {
                                rdio += ('<br><input type= ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + ' name="fav_language">')
                                rdio += ('<label value = ' + index + '> ' + value + '</label>')
                            });
                            $("main ").append('<br><span id="radid"><label style="margin-left:180px; font-size:23px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + (newObj[i].subarr[j].subarr1[k].labelid) + '</label><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ><div style="margin-left:180px; font-size:23px">' + (rdio) + '</div></span>');

                        }

                        else if (newObj[i].subarr[j].subarr1[k].inputvalue == "checkbox") {
                            var chk = ('<label ></label>')
                            $(newObj[i].subarr[j].subarr1[k].optionid).each(function (g, v) {

                                chk += ('<br><input type = ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + '>')
                                chk += ('<label value=' + g + '> ' + v + '</label>')
                            });
                            $("main").append(' <span id="cekid"><label style="margin-left:180px; font-size:23px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + newObj[i].subarr[j].subarr1[k].labelid + '</label><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ><div style = "margin-left:180px; font-size:23px">' + (chk) + '</div></span><br>');

                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');
                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                            });
                        }
                        else {
                            $("main").append(' <span id="selid"><label style="margin-left:180px; font-size:23px" id="drag1" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event)">' + newObj[i].subarr[j].subarr1[k].labelid + '</label><input type = ' + (newObj[i].subarr[j].subarr1[k].inputvalue) + ' class = ' + (newObj[i].subarr[j].subarr1[k].classid) + ' placeholder = ' + (newObj[i].subarr[j].subarr1[k].placeholderid) + '><input type="button" value="delete" class="bundel" style="height:35px; width:100px; background-color:red; padding-left:4px; font-size:14px" ></span><br>');
                            $("#delete2").on('click', function () {
                                var url2 = localStorage.key('key');
                                localStorage.removeItem(url2);
                                $("main").newObj + ('refresh');
                            });
                        }
                    }
                }
            }

        }
    }
}
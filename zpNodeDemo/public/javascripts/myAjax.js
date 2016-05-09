$(document).ready(function(){
	// alert('tt');
	//前台展示 
	$.get('http://127.0.0.1:3000/server/news',function(data){
		// alert(data.length);
		 
		for(var i=0;i<data.length;i++){
			var sub =       '<div class="news-item cf">';
				sub +=			'<div class="news-item-img">';
				sub +=				'<img src="'+ data[i].newsimg + '" class="news-img">';
				sub +=			'</div>';
				sub +=			'<div class="news-item-content">';
				sub +=				'<div class="news-content-title"><a href="">'+data[i].newstitle + '</a></div>';				
				sub +=				'<div class="news-content-main">' + data[i].newscontent + '</div>';
				sub +=				'<div class="main-content-time">' + data[i].newstime +'</div>';
				sub +=			'</div>';
				sub +=		'</div>';

		$(".list-wrapper").append(sub);
		}
	});

	//后台管理展示
	
        $("#bj").click(function() {
            $('.cur').removeClass('cur');
            $('#bj').addClass('cur');
            $('#show-wrap').css('display', 'none');
            $('#show-wrap1').css('display', 'block');
            $('.c-title').html("金融新闻列表");
            $('#show-wrap1 table').show();
            $('#addNew').hide();
        });
        $("#tj").click(function() {
            $('.cur').removeClass('cur');
            $('#tj').addClass('cur');
            $('#show-wrap').css('display', 'block');
            $('#show-wrap1').css('display', 'none');
            $('.c-title').html("推荐新闻列表");
            $('#show-wrap table').show();
            $('#addNew').hide();
        });

        //

        //增加新闻
        $("#addBtn").click(function() {
            $('#show-wrap table').hide();
            $('#show-wrap1 table').hide();

            $('#addNew').show();
        });


        //返回新闻列表
        $("#backBtn").click(function() {
            $('#show-wrap table').show();
            $('#show-wrap1 table').show();
            $('#addNew').hide();

        });

        //修改新闻页面——————返回
        $("#backBtn-1").click(function() {
            $("#r-wrap").show();
            $("#r-wrap-1").hide();
            $('#show-wrap table').show();
            $('#show-wrap1 table').show();
            $('#addNew').hide();

        });


        //ajax

        //咨询 新闻列表展示
        $.get("http://127.0.0.1:3000/server/news", function(data) {

            // console.log(JSON.stringify(data));
            // console.log(typeof(data));
            // console.log(data.length);
            //alert(data.length);

            for (var i = 0; i < data.length; i++) {

                var sub = "<tr>";
                sub += "<td>" + data[i].id + "</td>";
                sub += "<td>" + data[i].newstitle + "</td>";
                sub += "<td>" + data[i].newsimg + "</td>";
                sub += "<td>" + data[i].newscontent + "</td>";
                sub += "<td>" + data[i].newstime + "</td>";
                sub += "<td class='del'>"
                    // sub += "<a id='delBtn' href='javascript:alert(" + data[i].newsid+ ")'>删除</a>"
                sub += "<a id='delBtn' onclick='doDel(" + data[i].id + ")'>删除</a> "
                sub += " <a id='updataBtn' onclick='doUpdata(" + data[i].id + ")'>修改</a>"
                sub += "</td>";
                sub += "</tr>"

                $("#show-wrap table").append(sub);
            }

        });

        // //百家
        // $.get("http://127.0.0.1:3000/server/baijia", function(data) {

        //     // console.log(JSON.stringify(data));
        //     // console.log(typeof(data));
        //     // console.log(data.length);

        //     for (var i = 0; i < data.length; i++) {

        //         var sub = "<tr>";
        //         sub += "<td>" + data[i].newsid + "</td>";
        //         sub += "<td>" + data[i].newstitle + "</td>";
        //         sub += "<td>" + data[i].newsimg + "</td>";
        //         sub += "<td>" + data[i].newscontent + "</td>";
        //         sub += "<td>" + data[i].addtime + "</td>";
        //         sub += "<td class='del'>"
        //         sub += "<a id='delBtn' onclick='doDel(" + data[i].newsid + ")'>删除</a> "
        //         sub += " <a id='updataBtn' onclick='doUpdata(" + data[i].newsid + ")'>修改</a>"
        //         sub += "</td>";
        //         sub += "</tr>"


        //         $("#show-wrap1 table").append(sub);
        //     }

        // });


        //增加新闻
        $("#sub").click(function() {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "http://127.0.0.1:3000/server/addnews",
                data: $("#addForm").serialize(),
                success: function() {
                    alert("添加成功");
                }

            })

        });



        //修改新闻  确认按钮
        $("#r-sub").click(function() {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "http://127.0.0.1:3000/server/renew",
                data: $("#resnewForm").serialize(),
                success: function() {
                    alert("修改成功");
                }

            })

        });

   

   
});

      //删除新闻
    function doDel(id) {
        var r = confirm("确定要删除吗？");
        if (r == true) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "http://127.0.0.1:3000/server/delnews",
                data: {
                    id: id
                },
                success: function() {
                    alert("删除成功");
                    window.location.reload();
                }
            });
        } else {
            return;
        }

    };

     //修改新闻
    function doUpdata(id) {
        document.getElementById('r-wrap').style.display = "none";
        document.getElementById('r-wrap-1').style.display = "block";
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://127.0.0.1:3000/server/updatanews",
            data: {
                id: id
            },
            success: function(data) {

                var a = JSON.stringify(data);
                var b = JSON.parse(a);
                var id = b[0].id;
                var newstitle = b[0].newstitle;
                var newsimg = b[0].newsimg;
                var newscontent = b[0].newscontent;
                var newstime = b[0].newstime;
                $("#r-newsid").val(id);
                $("#r-newstitle").val(newstitle);
                $("#r-newsimg").val(newsimg);
                $("#r-newscontent").val(newscontent);
                $("#r-addtime").val(newstime);

            }
        });
    }
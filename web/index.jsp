<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>测试显示缩略图</title>
    <!--曹大师跨平台代码-->
    <script type="text/javascript" src="script/myLittleCarrotForJS.js"></script>
    <script type="text/javascript" src="script/jsThumbnails.js"></script>
    <link rel="stylesheet" href="css/styleThumbnails.css"/>
</head>
<body>
<div class="frame-main" id="layoutMain">
    <!-- 隐藏浮动层 -->
    <div id="divCenter" align="center"
         style="position: absolute; z-index: 9; display: none; background-color: #eee; width:700px; height:500px;left:200px;top:200px; border:1px solid #222;">
        <img src="" alt="" id="showImg"/>
    </div>
    <!--上部工具条-->
    <div class="module-toolbar g-clearfix" style="display: none;">
        <div class="default-dom"><%--切换列表/网格显示--%>
            <div class="list-grid-switch grid-switched-on">
                <a class="list-switch" href="javascript:void(0)">列表</a>

                <a class="grid-switch" href="javascript:void(0)">网格</a>
            </div>
            <div class="bar" style="white-space: nowrap; position: relative;">
                <div class="button-box-mark"
                     style="display:inline-block;*display:inline;*zoom:1;width:1px;height:1px;line-height:0;">

                </div>
                <div style="position: absolute; top: 0px; padding-top: 11px; line-height: normal;">
                    <span class="g-dropdown-button">
                        <a class="g-button g-button-blue upload-wrapper" data-button-id="b9" data-button-index="1"
                           href="javascript:void(0);">
                            <span class="g-button-right">
                              <em class="icon icon-upload" title="上传"></em>
                              <span class="text" style="width: 40px;">上传</span>
                            </span>
                        </a>
                        <a class="g-button" data-button-id="b11" data-button-index="2" href="javascript:void(0);">
                            <span class="g-button-right">
                                <em class="icon icon-newdir" title="新建文件夹"></em>
                                <span class="text" style="width: auto;">新建文件夹</span>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!--核心缩略图显示层-->
    <div class="module-grid-view">
        <div class="grid-view" id="grid-view" style="display: block;">
            <div class="grid-view-item" _position="0" _installed="1" style="display: block;">
                <div class="file-icon">
                    <img class="thumb"
                         src="thumbnails/Monet-0281.jpg"
                         style="visibility: visible; left: -45px; top: -13px;">
                    <span class="checkbox"></span>
                </div>
                <div class="file-name">
                    <a class="filename" href="javascript:void(0);" title="Monet-0281.jpg">Monet-0281.jpg</a>
                </div>
            </div>
            <div class="grid-view-item" _position="0" _installed="1" style="display: block;">
                <div class="file-icon">
                    <img class="thumb"
                         src="thumbnails/Monet-0353.jpg"
                         style="visibility: visible; left: -45px; top: -13px;">
                    <span class="checkbox"></span>
                </div>
                <div class="file-name">
                    <a class="filename" href="javascript:void(0);" title="Monet-0353.jpg">Monet-0353.jpg</a>
                </div>
            </div>
            <div class="grid-view-item" _position="0" _installed="1" style="display: block;">
                <div class="file-icon">
                    <img class="thumb"
                         src="thumbnails/Monet-0379.jpg"
                         style="visibility: visible; left: -45px; top: -13px;">
                    <span class="checkbox"></span>
                </div>
                <div class="file-name">
                    <a class="filename" href="javascript:void(0);" title="Monet-0379.jpg">Monet-0379.jpg</a>
                </div>
            </div>
            <div class="grid-view-item" _position="0" _installed="1" style="display: block;">
                <div class="file-icon">
                    <img class="thumb"
                         src="thumbnails/Monet-0540.jpg"
                         style="visibility: visible; left: -45px; top: -13px;">
                    <span class="checkbox"></span>
                </div>
                <div class="file-name">
                    <a class="filename" href="javascript:void(0);" title="Monet-0540.jpg">Monet-0540.jpg</a>
                </div>
            </div>
            <%--文件夹--%>
            <div class="grid-view-item" _position="0" _installed="1" style="display: block;">
                <div class="file-icon dir-large" title="">
                    <img class="thumb" style="visibility: hidden;">
                    <span class="checkbox"></span>
                </div>
                <div class="file-name">
                    <a class="filename" href="javascript:void(0);" title="照片">照片</a>
                </div>
            </div>
        </div>
    </div>
    <div>
        <%
            out.println("Hello World again！");
        %>
    </div>

</body>
</html>

<%--
  作用：测试所学内容
  经验
    1. \t \n 同理没用（&nbsp ,<br>）
    2. 不用单独配置debug，只要out目录下有，就能访问到
    3. java.util.* 仍默认导入
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<h1>九九乘法表</h1>
<%
  int lin,col;
  for(lin=1;lin<=9;lin++){
    for(col=1;col<=lin;col++){
      out.println(col+"*"+lin+"="+(col*lin)+"&nbsp&nbsp&nbsp&nbsp");
    }
    out.println("<br>");
  }
%>
</body>
</html>

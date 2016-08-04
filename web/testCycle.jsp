<%--
  作用：测试生命周期
  System.out.println:服务器端输出
  刷新页面后变量仍存在，重启服务器后消失
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<html>
<head>
  <title>life.jsp</title>
</head>
<body>

<%!
  private int initVar=0;
  private int serviceVar=0;
  private int destroyVar=0;
%>

<%!
  //启动服务器后只执行一次
  public void jspInit(){
    initVar++;
    System.out.println("jspInit(): JSP被初始化了"+initVar+"次");
  }
  //从未被执行
  public void jspDestroy(){
    destroyVar++;
    System.out.println("jspDestroy(): JSP被销毁了"+destroyVar+"次");
  }
%>
<%--每次刷新页面都运行一次--%>
<%
  serviceVar++;
  System.out.println("_jspService(): JSP共响应了"+serviceVar+"次请求");
  //分离变量与输出→多位置输出
  String content1="初始化次数 : "+initVar;
  String content2="响应客户请求次数 : "+serviceVar;
  String content3="销毁次数 : "+destroyVar;
%>
<h1>菜鸟教程 JSP 测试实例</h1>
<p><%=content1 %></p>
<p><%=content2 %></p>
<p><%=content3 %></p>

</body>
</html>

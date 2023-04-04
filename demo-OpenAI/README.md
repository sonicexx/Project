请求网页流程

1. 用户 URL => 回车
2. DNS 解析 => 域名 = IP 地址
3. 浏览器网络向服务器发送 TCP/IP 连接请求
   3 次握手
4. 建立 TCP/IP 连接
5. 发送 HTTP 请求
6. 等待响应
7. 下载 HTML 资源
8. 解析 HTML 资源
9. 遇到静态资源 => 发送 HTTP 请求 => 下载资源
   4 次挥手
10. 浏览器渲染流程
11. 呈现页面

Uniform Resource Identifier 统一资源标识
Uniform Resource Locator 统一资源定位符
Uniform Resource Name 统一资源命名
URI 包含 URL + URN
nice => URI
URL => 家庭住址
URN => 姓名+身份证

URL = 协议+域名+端口+地址+请求字符
http:// nice.com :80 /index/index.html ?a=1&b=2

客户端通过服务端口从服务器获得后台数据

Client Server C/S 架构 应用程序+服务端 B/S 网页+服务端

Elastic Computer Service

Domain Name
顶级: nice.com
一级: www.nice.com
二级: java.www.nice.com

DNS => Domain Name Server 域名服务解析

Internet Protocol Address 互联网协议地址
IPv4: 32 位 十进制 :80
IPv6: 128 位 十六进制 :443
MySQL: 3306

TCP 连接: Transfer Control Protocol 传输控制协议 三次握手 四次挥手
UDP 连接: User Data Protocol

HTTP: HyperText Transfer Protocol 超文本传输协议
HTTPS: HyperText Transfer Protocol Secure 超文本传输安全协议

三次握手

- Server: LISTEN 状态,侦听 Client 连接请求
- Client: 发送 TCP 连接请求
  SYN 标志位+序号 J
  进入: SYN_SEND 请求发送等待确定状态 (第一次握手)
- Server: 收到客户端的 SYN J 的连接请求并确认
  发送 确认连接信息 ACK 标志位+序号 J+1 和 SYN 标志位(序号 K)(第二次握手)
  进入 SYN_RECV 状态, 等待确认连接
- Client: 收到服务器的确认信息, 并发送确定连接信息
  发送 ACK 标志位(序号 K+1)
  进入 ESTABLISHED 连接建立状态
- Server: 收到确认信息 进入 ESTABLISHED 状态

请求方式
GET/POST
GET 数据存储在 URL 中, 转为 ASCII 码, 受 URL 长度限制
POST 数据存储在 报文中, 无大小限制
POST 在成功建立 TCP/IP 连接之后, 先发送 POST 请求头, 返回 100 后再进行数据传输
GET 再成功建立后, 直接发送数据等待响应
POST 更安全

状态码
1xx: 响应 post 请求, 需要进一步操作
2xx: 响应成功
3xx: 重定向状态码, 从页面连接到另一个页面
4xx: 客户端错误, 语法错误/无法完成请求
5xx: 服务端错误

关闭 TCP 连接: 四次挥手

- Client: 发送关闭连接请求报文
  报文首部: FIN=1, seq=u
  进入 FIN_WAIT_1 状态--等待中断请求状态(第一次挥手)
  不再发送新的请求
- Server: 收到客户端发来的关闭连接报文
  发送确认收到请求报文 (第二次挥手)
  报文首部: ACK=1 ack=u+1(确认发送的请求) 序列号 seq=v
  进入: CLOSE_WAIT 状态, 查看是否有未处理完的响应
- Client: 收到确认的报文后
  进入: FIN_WAIT_2 等待中断请求 2 状态, 继续等待服务端响应, 可以接收数据
- Server: 所有数据传输完成后
  主动发送结束连接报文 (第三次挥手)
  报文头部: FIN=1, ACK=1, ack=u+1(确认上条请求), 序列号 seq=w
  进入: LAST_ACK 等待确认状态
- Client: 接收到服务端的结束连接请求
  发送确认报文首部: ACK=1, ack=w+1 seq=u+1 (第四挥手)
  进入:TIME_WAIT 状态, 等待 2MSL
- Server: 收到最后确认信息 => 直接断开 TCP 连接 => 进入 CLOSE 状态
  服务端结束 TCP 连接要比 客户端快一些
- Client: 等待时间结束后 断开 TCP 连接 进入 CLOSE 状态

源: 同协议&&同域名&&同端口

检测语法错误 => 预编译 => 逐行解释执行

预编译
GO: Global Object 全局执行期上下文: 变量声明 => 函数声明 => 逐行执行
AO: Active Object 函数执行期上下文: 变量声明 => 参数赋值 => 函数声明 => 逐行执行
new: this => 变量声明 => 参数赋值 => 函数声明 => 逐行执行
函数声明 => 继承当前 [[scope]] => 执行 新建 AO 放到自身的 [[scope]]最上层

eval('console.log(1)')
eval('model.a' + model.b + 'model.s')

this =>
全局: window
预编译函数: window
构造函数: 实例对象
闭包: window
call/apply: 改变 this 指向

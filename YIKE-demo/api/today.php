<?php


            /*我去获取豆瓣一刻的数据.*/

            $date=$_GET["currentDate"];

            /*php 提供可以直接发送http 请求的api*/
            /*
                file_get_contents("") 在本地去去读取文件内容
                这个也支持一个连接，读取一个连接的内容.
                file_get_contents 只支持读取http 协议的格式的数据.
                现在我这边使用的是 https://  http 协议加密的版本。安全证书.
                如果说要我file_get_contents 支持 https 我需要读服务器进行配置.
                //我已经配置好了.
                file_get_contents("http://") 数据没问题
                file_get_contents("https://") 服务器配置.
                我们这个应该配置那里。wamp 去运行    php
                我要去配置 php.ini 文件，初始化文件，软件运行的时候会去解析.
                根据 extension=php_openssl.dll 到这个php.ini
                去搜索，删掉970;
            */
            echo file_get_contents("https://moment.douban.com/api/stream/date/".$date."?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6&callback=getInfo");
?>
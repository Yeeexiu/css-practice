$(document).ready(function(){
    $('.version').click(function(){
        $(this).addClass("click");
        $(this).siblings().removeClass("click");
    })

    getInfo(0);
})

let info0 = {
    "version-name":"高级版",
    "fit":"独立摄影师",
    "content":
    [
        ["A","标题1","标题1的描述"],
        ["B","标题2","标题2的描述"],
        ["C","标题3","标题3的描述"],
        ["D","标题4","标题4的描述"],
        ["E","标题5","标题5的描述"],
        ["F","标题6","标题6的描述"],
        ["G","标题7","标题7的描述"],
        ["H","标题8","标题8的描述"],
        ["I","标题9","标题9的描述"],
        ["J","标题10","标题10的描述"]
    ]
}
let info1 = {
    "version-name":"定制版",
    "fit":"小型工作室",
    "content":
    [
        ["a","标题a","标题a的描述"],
        ["b","标题b","标题b的描述"],
        ["c","标题c","标题c的描述"],
        ["d","标题d","标题d的描述"],
        ["e","标题e","标题e的描述"],
        ["f","标题f","标题f的描述"],
        ["g","标题g","标题g的描述"],
        ["h","标题h","标题h的描述"],
        ["i","标题i","标题i的描述"],
        ["j","标题j","标题j的描述"]
    ]
}
let arr = [info0,info1]
let version_name='高级版';
let  version_info = '独立摄影师';


function getInfo(v){
    let cont_title = ``;
    let func_item = ``;

    // item变量
    let func_icon = '';
    let func_icon_name = '';

    //给模板数据赋值
    version_name=arr[v]["version-name"];
    version_info = arr[v]["fit"];
    
    //把数据放入模板
    cont_title = `<p>${version_name}</p>
        <p>（适合<span id="fit">${version_info}</span>）</p>`

    for(let i=0;i<arr[v]["content"].length;i++){
        func_icon = arr[v]["content"][i][0];
        func_icon_name = arr[v]["content"][i][1];
        func_item += `<div class="function-item" onclick="showMask(${v},${i})">
            <div class="icon"><span>${func_icon}</span></div>
            <p class="icon-name">${func_icon_name}</p>
            </div>`
    }
    $('.content-title').html(cont_title);
    $('#function').html(func_item);
}

//触发遮罩层
function showMask(v,i){
    $('#v-name').html(version_name);
    $('#v-item').html(arr[v]["content"][i][1]);
    $('#v-item-intro').html(arr[v]["content"][i][2]);
    var scroll = $(document).scrollTop();
    $('#cover').css({'margin-top':scroll,'display':'flex'});
    $('body').css('overflow','hidden');
}
// 隐藏遮罩层
function hiddenMask(){
    $('#cover').css('display','none');
    $('body').css('overflow','auto');
}
$(function() {
    $(".checkall").change(function() {
        $(".j-checkbox .checkall").prop("checked", $(this).prop("checked"));
    })


    $(".j-checkbox").change(function() {
        //.j-checkbox:checked是被选中的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });
    //购物车物品数量的做法
    //如果文本框val()里面有值，则是赋值，没有就是获取
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        //计算价钱
        var p = $(this).parent().parent().siblings(".p-price").html(); //获取价钱
        p = p.substr(1); //截取掉人民币符号
        var price = (p * n).toFixed(2); //可以保留两位小数
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    });
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parent().parent().siblings(".p-price").html(); //获取价钱
        p = p.substr(1); //截取掉人民币符号
        var price = (p * n).toFixed(2); //可以保留两位小数
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    });
    //用户修改文本框的值
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parent().parent().siblings(".p-price").html(); //获取价钱
        p = p.substr(1); //截取掉人民币符号
        var price = (p * n).toFixed(2); //可以保留两位小数
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    });
    getSum();

    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1)); //首先是去掉人民币符号$(ele).text().substr(1)，因为有小数，所以用parseFloat
        });
        $(".price-sum em").text("￥" + money.toFixed(2)); //只取两位小数
    };
    //  删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function() {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2) 删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})
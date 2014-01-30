/*global $, document */
"use strict";
var checkoutAddressDropDown = (function () {
    $('.js-dropDownMenuWrapper').click(function(e) {
        $(this).toggleClass('dropDownMenuMultiLines-selected');
        $('.js-DropDownMenu').toggleClass('displayNone');
        $('.js-DropDownMenu').toggleClass('dropDownMenuMultiLines-options-selected');
        var dropDownHeight = $(this).height();
        $('.js-DropDownMenu').css('top', dropDownHeight - 10);
        e.stopPropagation();
    });
	$(".js-DropDownMenuList li").click(function(event){
		var selectedValue1=$(this).find(".js-optionValue-1").text();
        var selectedValue2=$(this).find(".js-optionValue-2").text();
        var selectedValue3=$(this).find(".js-optionValue-3").text();
		$('.js-selectedValue-1').text(selectedValue1).addClass('dropDownMenu-selectedItems');
        $('.js-selectedValue-2').text(selectedValue2).addClass('dropDownMenu-selectedItems');
        $('.js-selectedValue-3').text(selectedValue3).addClass('dropDownMenu-selectedItems');
        $('.js-unSelectedValue').empty();
	});    
    $(document).click(function () {
        if (!$('.js-DropDownMenu').hasClass('displayNone')) {
            $('.js-DropDownMenu').addClass('displayNone');
        }
        $('.js-DropDownMenu').removeClass('dropDownMenuMultiLines-options-selected');
        $('.js-dropDownMenuWrapper').removeClass('dropDownMenuMultiLines-selected');
    });    
}());
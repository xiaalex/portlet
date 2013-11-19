/*!
 * jQuery UI Portlet 1.0.0
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/portlet
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.sortable.js
 */
(function( $, undefined ) {

var thisportlet,
    firstPass = false,
    portletcookie = 'portlet-persist-cookie';

$.widget( "ui.portlet", $.ui.sortable, {
    version: "1.0.0",
    options: {
        persist: false
    },

	_create: function() {
        thisportlet = this;

		this._initializeItems();
		this._initializeWidget();
	},

	_initializeItems: function() {
        // add id: loop trought each column
        var i = 0, col = 0;
        $(".ui-portlet-column", this.element).each(function () {
            $(this).attr("id", "c_" + col);

            var j = 0;
            $(this).children(".ui-portlet").each(function () {
                $(this).attr("id", "a_" + i + '_' + j);
                j++;
            });
            i++, col++;
        });

        // add style
        this.element.find(".ui-portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")  
            .find(".ui-portlet-header")  
            .addClass("ui-widget-header ui-corner-all")  
            .prepend("<span class='ui-icon ui-icon-minusthick'></span>");

        // re-arrange
        if (this.options.persist) {
            var data = $.cookie(portletcookie);
            if (typeof data != "undefined") {
                var array = data.split(",");

                for (var i=0, len=array.length; i<len; i++) {
                    var item = array[i].split("|");   // a_col_row
                    if (item[0] != item[1]) {
                        var target = item[0].split("_"); 
                        var source = $("#" + item[1], thisportlet.element);
                        var targetparent = $("#c_" + target[1], thisportlet.element);

                        if (typeof targetparent != "undefined") {
                            var id = parseInt(target[2]) + 1;
                            var node = $(":nth-child(" + id + ")", targetparent);
                            if (typeof node != "undefined") {
                                $(targetparent).append(source.detach());
                            } else {
                                $(node).before(source.detach());
                            }
                        }
                    }
                }
            }
        } else {
            $.removeCookie(portletcookie);
        }
    },

	_initializeWidget: function() {
        // init sortable
        this.element.children(".ui-portlet-column")
            .sortable({  
                connectWith: ".ui-portlet-column",

                update: function(event, ui) {
                   thisportlet._update(event, ui);
                }
        });

        // add event
        this.element.find(".ui-portlet-header .ui-icon").click(function () {  
            $(this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");  
            $(this).parents(".ui-portlet:first").find(".ui-portlet-content").toggle();  
        });

        this.element.find(".ui-portlet-column").disableSelection();  
    },

    // hook up with update event
    _update: function(event, ui) {  
        if (firstPass) {
            firstPass = false;
        } else {
            var order = [], col = 0;
            $(".ui-portlet-column", thisportlet.element).each(function () {
                var row = 0;
                $(".ui-portlet", this).each(function () {
                    order.push("a_" + col + "_" + row + "|" + $(this).attr("id"));
                    row++;
                });
                col++;
            });  
            thisportlet._persist(order);
            firstPass = true;
        }
    },

	_persist: function(data) {
        $.data(document.body, portletcookie, data);

        if (this.options.persist) {
            $.cookie(portletcookie, data.join(), { expires: 365 });
        }
    },

	reset: function() {
        $.removeCookie(portletcookie);
    }
    // end if widget
});

}( jQuery ) );


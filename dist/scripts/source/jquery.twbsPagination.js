/*!
 * jQuery pagination plugin v1.2.5
 * http://esimakin.github.io/twbs-pagination/
 *
 * Copyright 2014, Eugene Simakin
 * Released under Apache 2.0 license
 * http://apache.org/licenses/LICENSE-2.0.html
 */

!function (t, s, i, e) { "use strict"; var a = t.fn.twbsPagination, o = function (i, e) { if (this.$element = t(i), this.options = t.extend({}, t.fn.twbsPagination.defaults, e), this.options.startPage < 1 || this.options.startPage > this.options.totalPages) throw new Error("Start page option is incorrect"); if (this.options.totalPages = parseInt(this.options.totalPages, 10), isNaN(this.options.totalPages)) throw new Error("Total pages option is not correct!"); if (this.options.visiblePages = parseInt(this.options.visiblePages, 10), isNaN(this.options.visiblePages)) throw new Error("Visible pages option is not correct!"); if (this.options.totalPages < this.options.visiblePages && (this.options.visiblePages = this.options.totalPages), this.options.onPageClick instanceof Function && this.$element.first().bind("page", this.options.onPageClick), this.options.href) { var a, o = this.options.href.replace(/[-\/\\^$*+?.|[\]]/g, "\\$&"); o = o.replace(this.options.hrefVariable, "(\\d+)"), null != (a = new RegExp(o, "i").exec(s.location.href)) && (this.options.startPage = parseInt(a[1], 10)) } var n = "function" == typeof this.$element.prop ? this.$element.prop("tagName") : this.$element.attr("tagName"); return "UL" === n ? this.$listContainer = this.$element : this.$listContainer = t("<ul></ul>"), this.$listContainer.addClass(this.options.paginationClass), "UL" !== n && this.$element.append(this.$listContainer), this.render(this.getPages(this.options.startPage)), this.setupEvents(), this }; o.prototype = { constructor: o, destroy: function () { return this.$element.empty(), this.$element.removeData("twbs-pagination"), this.$element.unbind("page"), this }, show: function (t) { if (1 > t || t > this.options.totalPages) throw new Error("Page is incorrect."); return this.render(this.getPages(t)), this.setupEvents(), this.$element.trigger("page", t), this }, buildListItems: function (s) { var i = t(); if (this.options.first && (i = i.add(this.buildItem("first", 1))), this.options.prev) { var e = s.currentPage > 1 ? s.currentPage - 1 : this.options.loop ? this.options.totalPages : 1; i = i.add(this.buildItem("prev", e)) } for (var a = 0; a < s.numeric.length; a++) i = i.add(this.buildItem("page", s.numeric[a])); if (this.options.next) { var o = s.currentPage < this.options.totalPages ? s.currentPage + 1 : this.options.loop ? 1 : this.options.totalPages; i = i.add(this.buildItem("next", o)) } return this.options.last && (i = i.add(this.buildItem("last", this.options.totalPages))), i }, buildItem: function (s, i) { var e = t("<li></li>"), a = t("<a></a>"), o = null; switch (s) { case "page": o = i, e.addClass(this.options.pageClass); break; case "first": o = this.options.first, e.addClass(this.options.firstClass); break; case "prev": o = this.options.prev, e.addClass(this.options.prevClass); break; case "next": o = this.options.next, e.addClass(this.options.nextClass); break; case "last": o = this.options.last, e.addClass(this.options.lastClass) } return e.data("page", i), e.data("page-type", s), e.append(a.attr("href", this.makeHref(i)).html(o)), e }, getPages: function (t) { var s = [], i = Math.floor(this.options.visiblePages / 2), e = t - i + 1 - this.options.visiblePages % 2, a = t + i; 0 >= e && (e = 1, a = this.options.visiblePages), a > this.options.totalPages && (e = this.options.totalPages - this.options.visiblePages + 1, a = this.options.totalPages); for (var o = e; a >= o;) s.push(o), o++; return { currentPage: t, numeric: s } }, render: function (s) { this.$listContainer.children().remove(), this.$listContainer.append(this.buildListItems(s)); var i = this.$listContainer.children(); i.filter(function () { return t(this).data("page") === s.currentPage && "page" === t(this).data("page-type") }).addClass(this.options.activeClass), i.filter(function () { return "first" === t(this).data("page-type") }).toggleClass(this.options.disabledClass, 1 === s.currentPage), i.filter(function () { return "last" === t(this).data("page-type") }).toggleClass(this.options.disabledClass, s.currentPage === this.options.totalPages), i.filter(function () { return "prev" === t(this).data("page-type") }).toggleClass(this.options.disabledClass, !this.options.loop && 1 === s.currentPage), i.filter(function () { return "next" === t(this).data("page-type") }).toggleClass(this.options.disabledClass, !this.options.loop && s.currentPage === this.options.totalPages) }, setupEvents: function () { var s = this; this.$listContainer.find("li").each(function () { var i = t(this); return i.off(), i.hasClass(s.options.disabledClass) || i.hasClass(s.options.activeClass) ? void i.click(function (t) { t.preventDefault() }) : void i.click(function (t) { !s.options.href && t.preventDefault(), s.show(parseInt(i.data("page"), 10)) }) }) }, makeHref: function (t) { return this.options.href ? this.options.href.replace(this.options.hrefVariable, t) : "#" } }, t.fn.twbsPagination = function (s) { var i, a = Array.prototype.slice.call(arguments, 1), n = t(this), r = n.data("twbs-pagination"), l = "object" == typeof s && s; return r || n.data("twbs-pagination", r = new o(this, l)), "string" == typeof s && (i = r[s].apply(r, a)), i === e ? n : i }, t.fn.twbsPagination.defaults = { totalPages: 0, startPage: 1, visiblePages: 5, href: !1, hrefVariable: "{{number}}", first: "First", prev: "Previous", next: "Next", last: "Last", loop: !1, onPageClick: null, paginationClass: "pagination", nextClass: "next", prevClass: "prev", lastClass: "last", firstClass: "first", pageClass: "page", activeClass: "active", disabledClass: "disabled" }, t.fn.twbsPagination.Constructor = o, t.fn.twbsPagination.noConflict = function () { return t.fn.twbsPagination = a, this } }(jQuery, window, document);

/*
* ===========================================================
* PAGINATION - LOAD MORE - ALBUMS - FRAMEWORK Y
* ===========================================================
* This script manage the pagination and load more system of the grid list and masonry list container components.
* This script manage also the album components. The script require Isotope only is used with masonry list.
* Documentation: www.framework-y.com/containers/list-grid.html#gallery-pagiantion
* Documentation: www.framework-y.com/containers/list-masonry.html#masonry-gallery-load-more
* 
* Pixor - Copyright (c) Federico Schiocchet - Pixor - Framework Y
*/

(function ($) {
    var isRLI;
    $.fn.initTwbsPagination = function () {
        var opt = $(this).attr("data-options");
        var a = $(this).attr("data-pagination-anima");
        var p = parseInt($(this).attr("data-page-items"), 10);
        var c = $(this).closest(".grid-list");
        var t = $(c).find(".grid-box .grid-item");
        var n = $(t).length;
        var type = "pagination";
        if ($(this).hasClass('load-more-grid')) type = 'load-more';

        $(t).css("display", "none");
        for (var i = 0; i < p; i++) {
            $($(t)[i]).css("display", "block");
        }

        if (type == 'pagination') {
            var optionsArr;
            var options = {
                totalPages: Math.ceil(n / p),
                visiblePages: 7,
                first: "<i class='fa fa-angle-double-left'></i> <span>First</span>",
                last: "<span>Last</span> <i class='fa fa-angle-double-right'></i>",
                next: "<span>Next</span> <i class='fa fa-angle-right'></i>",
                prev: " <i class='fa fa-angle-left'></i> <span>Previous</span>",
                onPageClick: function (event, page) {
                    $(t).css("display", "none");
                    for (var i = (p * (page - 1)) ; i < (p * (page)) ; i++) {
                        var o = $($(t)[i]);
                        if (!isEmpty(a)) {
                            $(o).css("opacity", "0");
                            $(o).showAnima(a);
                        }
                        $(o).css("display", "block");
                        if (isRLI) $(o).renderLoadedImgs();
                    }
                    if (!isEmpty(opt) && opt.indexOf("scrollTop:true") != -1) $(c).scrollTo();
                    if ($.isFunction($.fn.initFlexSlider)) {
                        var i = 0;
                        $(t).find(".flexslider").each(function () {
                            $(this).initFlexSlider();
                            i++;
                        });
                        if (i) $(window).trigger('resize').trigger('scroll');
                    }
                }
            }
            if (!isEmpty(opt)) {
                optionsArr = opt.split(",");
                options = getOptionsString(opt, options);
            }
            $(this).twbsPagination(options);
        }
        if (type == 'load-more') {
            if (!isEmpty(opt) && opt.indexOf("lazyLoad:true") != -1) {
                var ths = this;
                $(window).scroll(function () {
                    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                        loadMoreGrid(ths);
                    }
                });
            }
            $(this).on("click", function () {
                loadMoreGrid(this);
            });
        }
        function loadMoreGrid(obj) {
            var page = $(obj).attr("data-current-page");
            if (isEmpty(page)) page = 1;
            page++;
            $(obj).attr("data-current-page", page);
            var s = p * (page - 1);
            var e = p * (page);

            for (var i = s ; i < (p * (page)) ; i++) {
                var o = $($(t)[i]);
                if (!isEmpty(a)) {
                    $(o).css("opacity", "0");
                    $(o).showAnima(a);
                }
                $(o).css("display", "block");
            }
            if (e >= n) $(obj).hide(300);
        }
    }
    $(document).ready(function () {
        isRLI = $.fn.renderLoadedImgs;
        $(".pagination-grid,.load-more-grid").each(function () {
            $(this).initTwbsPagination();
        });

        //ALBUM
        var alb = ".cont-album-box";
        $(".album-item").hide();
        $("body").on("click", ".album-box", function () {
            var t = $(this).closest(".album-main");
            var a = $(t).attr("data-album-anima");
            var ida = $("#" + $(this).attr("data-album-id"));
            if (isEmpty(ida)) {
                ida = $(t).find(alb + " .album-item:eq(" + $(this).index() + ")");
            }
            $(alb + " .album-item").hide();
            $(t).find(".album-list").hide();
            $(t).find(alb + " .album-title span").html($(this).find(".album-name").html().replace("<br>", " ").replace("<br />", " "));
            $(t).find(alb + " .album-title").show();
            if (!isEmpty(a)) {
                $(ida).css("opacity", 0);
                $(ida).showAnima(a);
            }
            $(ida).css("display", "block");
            if ($.isFunction($.fn.initIsotope)) $(ida).find(".maso-list").initIsotope();
            if (isRLI) $(t).find(ida).renderLoadedImgs();

            $(ida).find(".load-more-maso").attr("data-current-page", "1").css("display", "inline-block");
        });

        $("body").on("click", alb + " .album-title", function () {
            var t = $(this).closest(".album-main");
            var a = $(t).attr("data-album-anima");
            var b = $(t).find(".album-list");
            $(alb + " .album-item").hide();
            $(alb + " .album-title").hide();
            if (!isEmpty(a)) {
                $(b).css("opacity", 0);
                $(b).showAnima(a);
            }
            $(b).css("display", "block");
        });
    });
}(jQuery));



/*
 * @CreateTime: May 16, 2017 6:14 PM
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Last Modified By: Mink
 * @Last Modified Time: May 16, 2017 6:27 PM
 * @Description: 倒计时组件
 * var countdown = new Countdown(opt)
 * opt= {
        selector: '.countDown-box', // dom
        msgBefore: "尚未开始！", // 尚未开始时显示文字
        msgAfter: "活动已结束！", // 结束时显示文字
        msgPattern: "{days}天{hours}时{minutes}分{seconds}秒", // 文字含有变量{years}{months}{weeks}{days}{hours}{minutes}{seconds}
        dateStart: new Date(), // 开始时间
        dateEnd: new Date('2017-06-15 18:00'), // 结束时间
        leadingZeros: 2, // 保留位数
        initialize: true, // 是否立即启动，否则使用 .initialize() 手动启动
        onStart() {}, // 计时开始时回调函数
        onEnd() {}, // 计时结束回调函数
 * }
 */
// var countdown = new Countdown({
//         selector: '.countDown-box',
//         msgBefore: "尚未开始！",
//         msgAfter: "活动已结束！",
//         msgPattern: "{days}天{hours}时{minutes}分{seconds}秒",
//         dateStart: new Date(),
//         dateEnd: new Date(this.ActInfo.activityEndDate),
//         leadingZeros: 2,
//         initialize: true,
//         onStart() {},
//         onEnd() {},
//     })
(function(global) {
    "use strict"
    // Vanilla JS alternative to $.extend
    global.extend = function(obj, extObj) {
        obj = obj || {}
        if (arguments.length > 2) {
            for (var a = 1; a < arguments.length; a++) {
                global.extend(obj, arguments[a])
            }
        } else {
            for (var i in extObj) {
                obj[i] = extObj[i]
            }
        }
        return obj
    }

    // Countdown constructor
    var Countdown = function(conf) {
        this.conf = global.extend({
            // Dates
            dateStart: new Date(),
            dateEnd: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),

            // Default elements
            selector: ".timer",

            // Messages
            msgBefore: "Be ready!",
            msgAfter: "It's over, sorry folks!",
            msgPattern: "{days} days, {hours} hours, {minutes} minutes and {seconds} seconds left.",

            // Callbacks
            onStart: null,
            onEnd: null,

            // Extra options
            leadingZeros: false,
            initialize: true
        }, conf)

        // Private variables
        this.started = false
        this.selector = document.querySelectorAll(this.conf.selector)
        this.interval = 1000
        this.patterns = [
            { pattern: "{years}", secs: 31536000 },
            { pattern: "{months}", secs: 2628000 },
            { pattern: "{weeks}", secs: 604800 },
            { pattern: "{days}", secs: 86400 },
            { pattern: "{hours}", secs: 3600 },
            { pattern: "{minutes}", secs: 60 },
            { pattern: "{seconds}", secs: 1 }
        ]

        // Doing all the things!
        if (this.initialize !== false) {
            this.initialize()
        }
    }

    // Initializing the instance
    Countdown.prototype.initialize = function() {
        this.defineInterval()

        // Already over
        if (this.isOver()) {
            return this.outOfInterval()
        }

        this.run()
    }

    // Converting a date into seconds
    Countdown.prototype.seconds = function(date) {
        return date.getTime() / 1000
    }

    // Returning if countdown has started yet
    Countdown.prototype.isStarted = function() {
        return this.seconds(new Date()) >= this.seconds(this.conf.dateStart)
    }

    // Returning if countdown is over yet
    Countdown.prototype.isOver = function() {
        return this.seconds(new Date()) >= this.seconds(this.conf.dateEnd)
    }

    // Running the countdown
    Countdown.prototype.run = function() {
        var that = this,
            sec = Math.abs(this.seconds(this.conf.dateEnd) - this.seconds(new Date())),
            timer

        // Initial display before first tick
        if (this.isStarted()) {
            this.display(sec)
        } else { // Not started yet
            this.outOfInterval()
        }

        // Vanilla JS alternative to $.proxy
        timer = global.setInterval(function() {
            sec--

            // Time over
            if (sec <= 0) {
                global.clearInterval(timer)
                that.outOfInterval()
                that.callback("end")
            } else if (that.isStarted()) {
                if (!that.started) {
                    that.callback("start")
                    that.started = true
                }

                that.display(sec)
            }
        }, this.interval)
    }

    // Displaying the countdown
    Countdown.prototype.display = function(sec) {
        var output = this.conf.msgPattern

        for (var b = 0; b < this.patterns.length; b++) {
            var currentPattern = this.patterns[b]

            if (this.conf.msgPattern.indexOf(currentPattern.pattern) !== -1) {
                var number = Math.floor(sec / currentPattern.secs),
                    displayed = this.conf.leadingZeros && number <= 9 ? "0" + number : number
                sec -= number * currentPattern.secs
                output = output.replace(currentPattern.pattern, displayed)
            }
        }

        for (var c = 0; c < this.selector.length; c++) {
            this.selector[c].innerHTML = output
        }
    }

    // Defining the interval to be used for refresh
    Countdown.prototype.defineInterval = function() {
        for (var e = this.patterns.length; e > 0; e--) {
            var currentPattern = this.patterns[e - 1]

            if (this.conf.msgPattern.indexOf(currentPattern.pattern) !== -1) {
                this.interval = currentPattern.secs * 1000
                return
            }
        }
    }

    // Canceling the countdown in case it's over
    Countdown.prototype.outOfInterval = function() {
        var message = new Date() < this.conf.dateStart ? this.conf.msgBefore : this.conf.msgAfter

        for (var d = 0; d < this.selector.length; d++) {
            if (this.selector[d].innerHTML !== message) {
                this.selector[d].innerHTML = message
            }
        }
    }

    // Dealing with events and callbacks
    Countdown.prototype.callback = function(event) {
        var e = event.capitalize()

        // onStart callback
        if (typeof this.conf["on" + e] === "function") {
            this.conf["on" + e]()
        }

        // Triggering a jQuery event if jQuery is loaded
        if (typeof global.jQuery !== "undefined") {
            global.jQuery(this.conf.selector).trigger("countdown" + e)
        }
    }

    // Adding a capitalize method to String
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }

    global.Countdown = Countdown
}(window))
;(function ($, window, document, undefined) {

    $.fn.codeIt = function (options) {
        
        var settings = $.extend({
            tab:'&nbsp;&nbsp;&nbsp;&nbsp;',
            newline:'<br>',
			format:'html',
			syntax: {},
			inner: 'code',
			title: true,
			lineNumbers: true
        },options);
        return this.each(function () {
        	$me = $(this);
			$in = settings.inner=='' ? $me : $me.find(settings.inner);
			//replace quotes in text with &quot; before we transfer to html!!!
            html = escapeHtmlChars($in.html())
			// trim newlines from start and whitespace from end
			html = html.replace(/^(\r|\n|\r\n)+|\s*?$/g,'');
            //convert newlines to newlines
            html = html.replace(/(\r\n|\n|\r)/g,settings.newline)
            // convert tabs to newlines
            html = html.replace(/\t/g,settings.tab);
			
			fmt = settings.format;
			lang = $.isEmptyObject(settings.syntax[fmt]) ? jsonSyntax[fmt] : settings.syntax[fmt];
			//load in colors from syntax json
			if (!$.isEmptyObject(lang)) {
				for (rule in lang) {
					me = lang[rule];
					html = html.replace(RegExp((me.find),"g"),me.replace);
				}
			}
            $in.html(html);
			
			//wrap it
			$me.wrap('<figure class="codeIt" />');
			$me.css('padding','0').css('margin','0');
			$me.css('overflow','auto');
			if (settings.lineNumbers) {
				lineNumbers = ''
				noOfBreaks = 1+$me.html().split(settings.newline).length - 1;
				for (i=1; i<=noOfBreaks; i++) {
					lineNumbers += i + settings.newline;
				}
				lineNumbers = lineNumbers.replace(new RegExp(settings.newline + '$'), '');
				$me.before('<figcaption class="codeItGutter"><pre>'+lineNumbers+'</pre></figcaption>');
				$me.prev().find('pre').css('padding','0').css('margin','0');
				$me.prev().css('float','left');
			}
			
			if (settings.title) {
				$me.prev().before('<figcaption class="codeItTitle">' + $me.attr('title') + '</figcaption>');
			}
			
        });
    }
	function escapeHtmlChars(html) {
		return String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
}(jQuery));